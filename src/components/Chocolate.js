import React from "react";
import VendingMachine from "./VendingMachine";
import { Link } from "react-router-dom";
import "../images/chocolate.jpg"
import "../styles/Chocolate.css"


const Chocolate = () => {

    return (
      <div className="chocolate">
        <h3>
          <Link to="/">Back</Link>
        </h3>
        <h3>Chocolate</h3>
        <div>
          <a className="attribute" href="https://www.freepik.com/vectors/food">
            Food vector created by macrovector - www.freepik.com
          </a>
        </div>
      </div>
    );
}

export default Chocolate;