import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import card from "../../assets/card.jpg";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div className="flex justify-center items-center h-screen lg:px-0 px-5">
            <div className="lg:w-1/3 md:w-3/4 w-full mx-auto border border-primary p-10">
                <img className="h-32 w-full mb-5" src={card} alt="" />
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;