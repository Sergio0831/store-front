import React, { useContext } from "react";
import Button from "../UIComponents/Button";
import { AppContext } from "../Context/AppContext";

const ProductDetailInfo = () => {
  const app = useContext(AppContext);
  const { onProductAdd } = app;

  return (
    <>
      <p>
        DESCRIPTION sold at <strong>$PRICE</strong> per piece.
      </p>

      <Button onClick={onProductAdd}>$PRICE</Button>
    </>
  );
};

export default ProductDetailInfo;
