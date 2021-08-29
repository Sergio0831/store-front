import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ details }) => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };
  const handleDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Link to={"products/" + details.id}>
      <div className='product'>
        <img src={details.image} width='50' alt={details.name} />
        <div className='product-info'>
          <h2>{details.name}</h2>
          <p>{details.description}</p>
        </div>
        {/* <div className='product-buttons'>
          <button className='product-sub' onClick={handleIncrementClick}>
            +
          </button>
          <h3 className='product-count'>{count ? count : ""}</h3>
          <button
            className='product-add'
            disabled={count === 0}
            onClick={handleDecrementClick}
          >
            -
          </button>
        </div> */}
      </div>
    </Link>
  );
};

export default Product;
