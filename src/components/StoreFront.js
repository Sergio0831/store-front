import React, { useEffect, useState, useContext } from "react";
import Product from "./Product";
import Loader from "./Loader";
import { AppContext } from "./AppContext";
import useFetch from "./useFetch";

const StoreFront = () => {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    get("products.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const { currency } = useContext(AppContext);

  return (
    <>
      <p>Shopping in {currency}</p>
      <div className='store-front'>
        {loading && <Loader />}
        {products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
};

export default StoreFront;
