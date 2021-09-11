import React from "react";

const Cart = ({ cart }) => {
  const totalCartPrice = cart.reduce((total, product) => {
    const totalPrice = product.price * product.quantity;
    total += totalPrice;
    return total;
  }, 0);

  return (
    <div className='cart-layout'>
      {cart.length === 0 ? (
        <p>You have not added any product to your cart yet.</p>
      ) : (
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
                    <img width='30' height='30' alt='' src={image} alt={name} />
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
      )}
    </div>
  );
};

export default Cart;
