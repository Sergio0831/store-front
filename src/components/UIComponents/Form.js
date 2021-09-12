import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "./Button";
import Input from "./Input";

const Form = ({ cart, setCart }) => {
  const [email, setEmail] = useState("");
  const stripeLoadedPromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLIC_KEY
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });

    stripeLoadedPromise
      .then((stripe) => {
        stripe.redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "http://localhost:3000/",
          cancelUrl: "http://localhost:3000/cart",
          customerEmail: email
        });
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleFormSubmit} className='pay-form'>
      <p>
        Enter your email and then click on pay and your products will be
        delivered to you on the same day!
      </p>
      <Input
        autoComplete='email'
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type='submit'>Pay</Button>
    </form>
  );
};

export default Form;
