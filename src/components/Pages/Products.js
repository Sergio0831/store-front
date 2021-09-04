import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../UIComponents/Loader";
import Product from "../UIComponents/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await axios(
          "https://supermarket-d873d-default-rtdb.firebaseio.com/products.json"
        );
        setProducts(response.data);
        setErrorMsg("");
      } catch (error) {
        setErrorMsg("Error while loading data. Try again");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className='products-layout'>
      {loading && <Loader />}
      {errorMsg && <p className='error-msg'>{errorMsg}</p>}
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className='products-grid'>
        {products &&
          products.map((product) => {
            const { id, name, description, image, price } = product;
            return (
              <Product
                key={id}
                name={name}
                description={description}
                image={image}
                price={price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Products;
