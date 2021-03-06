import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "./Button";
import Input from "./Input";
import { AppContext } from "../Context/AppContext";

const Form = () => {
  const [email, setEmail] = useState("");
  const app = useContext(AppContext);
  const { cart } = app;

  const stripeLoadedPromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLIC_KEY
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.priceId, quantity: product.quantity };
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
      <p>
        Use the test card number <strong>4242 4242 4242 4242</strong>, a random
        three-digit CVC number, and any expiration date in the future. <br />
        And any email.
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
