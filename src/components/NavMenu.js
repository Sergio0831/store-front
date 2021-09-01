import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <NavLink
            className='nav__link'
            activeClassName='nav--active'
            exact
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink
            className='nav__link'
            activeClassName='nav--active'
            exact
            to='/about'
          >
            About
          </NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink
            className='nav__link'
            activeClassName='nav--active'
            to='/products'
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
