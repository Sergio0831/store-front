import About from "../components/Pages/About";
import Cart from "../components/Pages/Cart";
import Home from "../components/Pages/Home";
import ProductDetails from "../components/Pages/ProductDetails";
import Products from "../components/Pages/Products";

export const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/about", component: About, exact: true },
  { path: "/products", component: Products, exact: true },
  { path: "/products/:slug", component: ProductDetails, exact: false },
  { path: "/cart", component: Cart, exact: true }
];

