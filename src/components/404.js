import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>Page not found</h2>
      <p>The page could not be found</p>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
    </>
  );
};

export default NotFound;
