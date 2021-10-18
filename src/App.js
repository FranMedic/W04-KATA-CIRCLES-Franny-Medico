import "./App.css";
import { useState } from "react";
import Circle from "./components/Circle.js";

function App() {
  const circulos = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return circulos.map((circulo) => <Circle key={circulo.id} />);
}
export default App;
