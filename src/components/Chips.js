import React from "react";
import VendingMachine from "./VendingMachine"
import { Link } from "react-router-dom";
import "../images/chips.jpg";
import "../styles/Chips.css"


const Chips = () => {
  return (
    <div className="chips">
      <h3>
        <Link to="/">Back</Link>
      </h3>
      <h3>Chips</h3>
      <div>
        <a className="attribute" href="https://www.freepik.com/vectors/food">
          Food vector created by macrovector - www.freepik.com
        </a>
      </div>
    </div>
  );
};

export default Chips;
