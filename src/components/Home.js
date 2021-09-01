import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link className='btn btn-primary' to='/products'>
        Strat Shopping
      </Link>
    </>
  );
};

export default Home;
