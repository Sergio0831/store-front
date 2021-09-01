import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Loader from "./Loader";
import ProductDelivery from "./ProductDelivery";
import useFetch from "./useFetch";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const match = useRouteMatch();
  const id = params.id;
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    get(`productdetails/id${id}.json`)
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Link to='/' className='btn btn-primary'>
        Back home
      </Link>
      {loading && <Loader />}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width='100' alt={product.name} />
          <p>
            View <Link to={`${match.url}/delivery`}>delivery notes</Link>
          </p>
        </div>
      )}

      <Switch>
        <Route path={`${match.path}/delivery`}>
          <ProductDelivery />
        </Route>
      </Switch>
    </>
  );
};

export default ProductDetails;
