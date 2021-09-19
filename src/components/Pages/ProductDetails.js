import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { client } from "../../database/client";
import Loader from "../UIComponents/Loader";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailNutrition from "./ProductDetailNutrition";
import ProductDetailStorage from "./ProductDetailStorage";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { path, url } = useRouteMatch();
  const params = useParams();
  const slug = params.slug;

  const getCurrentProduct = async () => {
    try {
      setLoading(true);
      const response = await client.getEntries({
        content_type: "product",
        "fields.slug": slug
      });
      const product = response.items[0];
      setProduct(product);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentProduct();
  }, []);

  console.log(product.fields.name);

  return (
    <div className='product-details-layout'>
      {loading && <Loader />}
      <div>
        <h2>name</h2>
        <img
          width='125'
          height='125'
          className='product-details-image'
          alt='name'
          src='image'
        />
      </div>
      <div>
        <div className='tabs'>
          <ul>
            <li>
              <NavLink to={`${url}`} exact activeClassName='tab-active'>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/nutrition`} activeClassName='tab-active'>
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/storage`} activeClassName='tab-active'>
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path={`${path}`}>
            <ProductDetailInfo
            //price={price}
            //description={description}
            //product={item}
            />
          </Route>
          <Route exact path={`${path}/nutrition`}>
            <ProductDetailNutrition
            //nutrition={nutrition}
            />
          </Route>
          <Route exact path={`${path}/storage`}>
            <ProductDetailStorage
            //storage={storage}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ProductDetails;
