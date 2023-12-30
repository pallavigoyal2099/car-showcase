import { loadStripe } from "@stripe/stripe-js";

import React from "react";

export async function Checkout({ lineItems }: any) {
  let stripePromise: any = null;
  const getstripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY || "");
    }
    return stripePromise;
  };
  const stripe = await getstripe();
  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}
