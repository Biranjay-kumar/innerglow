import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      alert("Payment failed!");
    } else {
      alert(`Payment of ₹${amount} was successful!`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="p-3 border rounded-md" />
      <button
        type="submit"
        disabled={!stripe}
        className="mt-4 bg-blue-500 text-white py-2 rounded-md w-full hover:bg-blue-600"
      >
        Pay ₹{amount}
      </button>
    </form>
  );
};

export default CheckoutForm;
