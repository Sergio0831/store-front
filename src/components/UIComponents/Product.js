import React from "react";
import { Link } from "react-router-dom";
import Button from "../UIComponents/Button";

const Product = ({ product, cart, onProductAdd, onProductDelete }) => {
  const { id, name, description, price, image, slug } = product;

  const productFromCart = cart.find((item) => item.id === product.id);
  const quantity = productFromCart ? productFromCart.quantity : 0;

  return (
    <div className='product'>
      <div className='product-image-container'>
        <Link to={`/products/${slug}`}>
          <img
            width='100'
            height='100'
            className='product-image'
            alt={name}
            src={image}
          />
        </Link>
        <div className='product-quantity-container'>
          {quantity > 0 && <div className='product-quantity'>{quantity}</div>}
        </div>
      </div>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className='product-checkout'>
        <div>
          {quantity > 0 && (
            <Button
              onClick={() => onProductDelete(id)}
              className='product-delete'
              outline
            >
              x
            </Button>
          )}
        </div>
        <Button outline className onClick={() => onProductAdd(product)}>
          &euro;{price}
        </Button>
      </div>
    </div>
  );
};

export default Product;
