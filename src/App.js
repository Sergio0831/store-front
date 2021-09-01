import React, { useContext } from "react";
import StoreFront from "./components/StoreFront";
import Navbar from "./components/Navbar";
import { AppContext } from "./components/AppContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/404";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  const { theme } = useContext(AppContext);

  return (
    <BrowserRouter>
      <div className={theme === "dark" ? "dark" : ""}>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/products'>
              <StoreFront />
            </Route>
            <Route path='/products/:id'>
              <ProductDetails />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
