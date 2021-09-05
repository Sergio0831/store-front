import React from "react";
import { Link } from "react-router-dom";
import Button from "../UIComponents/Button";

const Product = ({ id, name, description, price, image, slug }) => {
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
          <div className='product-quantity'>0</div>
        </div>
      </div>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className='product-checkout'>
        <div>
          <Button className='product-delete' outline>
            x
          </Button>
        </div>
        <Button outline className>
          &euro;{price}
        </Button>
      </div>
    </div>
  );
};

export default Product;
