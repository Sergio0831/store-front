import React, { useEffect, useState } from "react";
import Loader from "../UIComponents/Loader";
import Product from "../UIComponents/Product";
import { client } from "../../database/client";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await client.getEntries({ content_type: "product" });
        const products = response.items;
        setProducts(products);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className='products-layout'>
      {loading && <Loader />}
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className='products-grid'>
        {products &&
          products.map((product) => {
            const slug = product.fields.slug;
            return <Product key={slug} product={product} />;
          })}
      </div>
    </div>
  );
};

export default Products;
