import React from 'react';
import { Link } from "react-router-dom";
import Chocolate from './Chocolate'

const VendingMachine = () => {
    
    return (
      <div>
        <h3>Options</h3>
        <div className="options">
            <h3><Link to="Chocolate">Chocolate</Link></h3>
        </div>
      </div>
    );
}

export default VendingMachine;

