import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51QaWhIRt6RpyedJkS4z8GNBiYvaCOa9WX1rmJ46jLhF22lIBIDsMGQXL4SXRawCeiOIOAwRZLWqSO7HlhB0i7mcj00vHVL5FQC");

const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement/>
        </form>
    )
}

const Checkout = () => {
 const location = useLocation();
 const options = {
    clientSecret: location.state.clientSecret,
 };

  return (
   <div>checkout
    <Elements stripe = {stripePromise} options={options}>
        <CheckoutForm />
        </Elements>
   </div>
  );
};

export default Checkout;