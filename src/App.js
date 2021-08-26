import React, { useContext } from "react";
import StoreFront from "./components/StoreFront";
import Navbar from "./components/Navbar";
import { AppContext } from "./components/AppContext";

const App = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Navbar />
      <StoreFront />
    </div>
  );
};

export default App;
