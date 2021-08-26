import React, { useContext } from "react";
import { ThemeContext } from "./AppContext";

const Title = () => {
  const userInfo = useContext(ThemeContext);
  const { name, lastName, age } = userInfo;

  return (
    <div>
      <h2>User name: {name}</h2>
      <h2>User lastName: {lastName}</h2>
      <h2>User age: {age}</h2>
    </div>
  );
};

export default Title;
