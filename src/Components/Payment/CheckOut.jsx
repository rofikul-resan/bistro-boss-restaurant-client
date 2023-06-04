import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = ({ price, carts }) => {
  console.log(price);
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const { axiosSecure } = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [process, setProcess] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcess(true);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError(null);
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });
    setProcess(false);
    if (confirmError) {
      console.log(confirmError);
      return setCardError(confirmError);
    }
    console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const paymentHistory = {
        userName: user.displayName,
        email: user.email,
        amount: price,
        status: "service pending",
        quantity: carts.length,
        orderItemNames: carts.map((food) => food.name),
        orderItemId: carts.map((food) => food._id),
      };
      axiosSecure.post("/payments", paymentHistory).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          alert("payments successfully");
        }
      });
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-4">
        Total Order : {carts.length}{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-success mt-4"
          disabled={!stripe || !clientSecret || process}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-2xl text-center font-semibold text-red-600 mt-3">
          {cardError}
        </p>
      )}
      {transactionId && (
        <p className="text-2xl text-center font-semibold text-orange-600 mt-3">
          Transaction from {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOut;
