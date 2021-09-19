import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import { AppProvider } from "./components/Context/AppContext";
import { routes } from "./router/routes";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Switch>
            {routes.map((route) => (
              <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
