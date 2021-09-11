import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailNutrition from "./ProductDetailNutrition";
import ProductDetailStorage from "./ProductDetailStorage";

const ProductDetails = ({ onProductAdd }) => {
  const { path, url } = useRouteMatch();

  return (
    <div className='product-details-layout'>
      <div>
        <h2>Product name here</h2>
        <img
          width='125'
          height='125'
          className='product-details-image'
          alt='product name here'
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
          <Route
            exact
            path={`${path}`}
            component={ProductDetailInfo}
            onProductAdd={onProductAdd}
          />
          <Route
            exact
            path={`${path}/nutrition`}
            component={ProductDetailNutrition}
          />
          <Route
            exact
            path={`${path}/storage`}
            component={ProductDetailStorage}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ProductDetails;
