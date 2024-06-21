import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <h2 className="text-3xl text-center my-10"> Total Payment: {price}</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
      <div className="text-center mt-10">
        <p>Card Number: 4242 4242 4242 4242</p>
        <p>MM/YY: 10/28</p>
        <p>CVC: 123</p>
        <p>ZIP: 12345</p>
      </div>
    </div>
  );
};

export default Payment;
