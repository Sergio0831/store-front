import React from "react";
import { AppProvider } from "./components/AppContext";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const AppWrapper = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

ReactDOM.render(<AppWrapper />, document.querySelector("#root"));
