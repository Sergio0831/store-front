import React, { useContext } from "react";
import StoreFront from "./components/StoreFront";
import Navbar from "./components/Navbar";
import { AppContext } from "./components/AppContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const { theme } = useContext(AppContext);

  return (
    <BrowserRouter>
      <div className={theme === "dark" ? "dark" : ""}>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/'>
              <StoreFront />
            </Route>
            <Route exact path='/products/:id'>
              <ProductDetails />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
