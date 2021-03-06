import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const NavBar = () => {
  const app = useContext(AppContext);
  const totalQuantity = app.getTotalQuantity();

  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-brand'>
        SuperM
      </NavLink>
      <ul>
        <li className='nav-item'>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about'>About us</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/cart' className='nav-item nav-cart btn btn-accent'>
            Cart ({totalQuantity})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
