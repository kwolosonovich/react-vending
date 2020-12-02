import React from 'react';
import { Link } from "react-router-dom";
import Chocolate from './Chocolate'
import Chips from "./Chips"
import "../styles/VendingMachine.css";
import "../images/1.jpg";


const VendingMachine = () => {
    
    return (
      <div className="main" >
        <h3>Options</h3>
        <div className="options">
          <h3>
            <Link to="Chocolate">Chocolate</Link>
          </h3>
          <h3>
            <Link to="Chips">Chips</Link>
          </h3>
          <h3>
            <Link to="Crackers">Crackers</Link>
          </h3>
        </div>
        <a href="https://www.freepik.com/vectors/design">
          Design vector created by macrovector - www.freepik.com
        </a>
      </div>
    );
}

export default VendingMachine;

