import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const { theme, toggleTheme, setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <header>
      <div className='navbar-options'>
        Shopping in{" "}
        <select onChange={handleCurrencyChange}>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
        </select>
        - Using {theme} theme{" "}
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
      <NavMenu />
      <hr />
    </header>
  );
};

export default NavBar;
