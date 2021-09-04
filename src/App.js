import React from "react";
import Button from "./components/Button";

const App = () => {
  const handleButtonClick = () => {
    console.log("Hello");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button className='extra-class btn' onClick={handleButtonClick}>
        Customizable
      </Button>
    </div>
  );
};

export default App;
