import { useState } from "react";
import "./Circle.css";

const Circle = () => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={`colores${selected ? " on" : ""}`}
      onClick={toggleSelected}
    ></div>
  );
};
export default Circle;
