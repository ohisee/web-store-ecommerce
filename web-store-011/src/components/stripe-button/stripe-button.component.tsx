/**
 * @fileoverview strip checkout button component 
 */
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { PUBLISHABLE_KEY } from "../../utils/utilities";
import Logo from "../../assets/svg/crown.svg";

function onToken(token: any) {
  alert("Payment Successful");
}

interface StripeCheckoutButtonProps {
  price: number,
}
const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ price }) => {
  // Stripe accepts price in cents 
  const priceForStripe = price * 100;
  return (
    <StripeCheckout
      label={"Pay Now"}
      name={"CROWN Clothing Co."}
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your price is $${price}`}
      amount={priceForStripe}
      panelLabel={"Pay Now"}
      token={onToken}
      stripeKey={PUBLISHABLE_KEY}
    />
  );
};

export default StripeCheckoutButton;
