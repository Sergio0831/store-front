import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import About from "./components/Pages/About";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import ProductDetails from "./components/Pages/ProductDetails";

const App = () => {
  const [cart, setCart] = useState(() => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      savedCart = [];
    }

    return savedCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleProductAdd = (newProduct) => {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updatedProduct = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCart(updatedProduct);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  };

  const handleProductDelete = (id) => {
    const updaedCart = cart.filter((product) => product.id !== id);
    setCart(updaedCart);
  };

  return (
    <BrowserRouter>
      <NavBar cart={cart} />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/products'>
            <Products
              cart={cart}
              onProductAdd={handleProductAdd}
              onProductDelete={handleProductDelete}
            />
          </Route>
          <Route path='/products/:slug'>
            <ProductDetails onProductAdd={handleProductAdd} />
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
