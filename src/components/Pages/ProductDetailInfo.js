import React, { useContext } from "react";
import Button from "../UIComponents/Button";
import { AppContext } from "../Context/AppContext";

const ProductDetailInfo = ({ price, description, item }) => {
  const app = useContext(AppContext);
  const { onProductAdd } = app;

  return (
    <>
      <p>
        {description} sold at <strong>${price}</strong> per piece.
      </p>

      <Button onClick={() => onProductAdd(item)}>${price}</Button>
    </>
  );
};

export default ProductDetailInfo;
