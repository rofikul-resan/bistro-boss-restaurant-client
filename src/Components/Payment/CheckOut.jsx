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
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(" cil", res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
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
        name: user.displayName,
        email: user.email,
        amount: price,
        orderItemNames: carts.map((food) => food.name),
        orderItemId: carts.map((food) => food._id),
      };
      axiosSecure.post("/payments", paymentHistory).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert("payments successfully");
        }
      });
    }
  };
  return (
    <div>
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
