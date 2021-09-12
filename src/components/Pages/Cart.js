import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Form from "../UIComponents/Form";

const Cart = () => {
  const app = useContext(AppContext);
  const { cart } = app;
  const totalCartPrice = app.getTotalCartPrice();

  return (
    <div className='cart-layout'>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>You have not added any product to your cart yet.</p>
      ) : (
        <>
          <table className='table table-cart'>
            <thead>
              <tr>
                <th width='25%' className='th-product'>
                  Product
                </th>
                <th width='20%'>Unit price</th>
                <th width='10%'>Quanity</th>
                <th width='25%'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => {
                const { id, name, price, quantity, image } = product;
                const totalPrice = quantity * price;
                return (
                  <tr key={id}>
                    <td>
                      <img width='30' height='30' src={image} alt={name} />
                      {name}
                    </td>
                    <td>&euro;{price}</td>
                    <td>{quantity}</td>
                    <td>
                      <strong>&euro;{totalPrice}</strong>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan='2'></th>
                <th className='cart-highlight'>Total</th>
                <th className='cart-highlight'>&euro;{totalCartPrice}</th>
              </tr>
            </tfoot>
          </table>
          <Form />
        </>
      )}
    </div>
  );
};

export default Cart;
