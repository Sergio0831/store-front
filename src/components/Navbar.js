import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const NavBar = () => {
  const { theme, toggleTheme, setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <>
      Shopping in{" "}
      <select onChange={handleCurrencyChange}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
      </select>
      - Using {theme} theme <button onClick={toggleTheme}>Toggle theme</button>
      <hr />
    </>
  );
};

export default NavBar;
