/**
 * @fileoverview strip checkout button component 
 */
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { PUBLISHABLE_KEY } from "../../utils/utilities";
import axios from "axios";
import Logo from "../../assets/svg/crown.svg";

interface StripeCheckoutButtonProps {
  price: number,
}
const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ price }) => {
  // Stripe accepts price in cents 
  const priceForStripe = price * 100;

  function onToken(token: any) {
    axios({
      url: "/payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token: token,
      },
    }).then(response => {
      alert("Payment Successful");
    }).catch(error => {
      // console.log(error);
      alert("There was an issue with your payment");
    });
  }

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
