import React from "react";
import Button from "../UIComponents/Button";

const ProductDetailInfo = () => {
  return (
    <>
      <p>
        DESCRIPTION sold at <strong>$PRICE</strong> per piece.
      </p>
      <Button>$PRICE</Button>
    </>
  );
};

export default ProductDetailInfo;