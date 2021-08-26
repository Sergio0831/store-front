import React, { useEffect, useState, useContext } from "react";
import Product from "./Product";
import Loader from "./Loader";
import { AppContext } from "./AppContext";

const StoreFront = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const { currency } = useContext(AppContext);

  return (
    <>
      <p>Shopping in {currency}</p>
      <div className='store-front'>
        {isLoading && <Loader />}
        {products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
};

export default StoreFront;
