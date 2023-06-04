import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../SectionHeader";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useCarts from "../../hook/useCarts";

const Payment = () => {
  const { carts } = useCarts();
  const totalPrice = carts.reduce((a, b) => a + b.price, 0);
  const price = +totalPrice.toFixed();
  const stripePromise = loadStripe(import.meta.env.VITE_payment);
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <SectionHeader title={"payment"} headerName={"Please  process"} />
        <Elements stripe={stripePromise}>
          <CheckOut price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
