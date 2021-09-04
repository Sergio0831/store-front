import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import About from "./components/Pages/About";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
