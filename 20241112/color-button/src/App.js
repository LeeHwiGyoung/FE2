import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const newColor = color === "red" ? "blue" : "red";
  const handleOnClick = () => {
    setColor(newColor);
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleOnClick}>
      change to {newColor}!
    </button>
  );
}

export default App;
