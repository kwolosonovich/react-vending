import React from "react";
import VendingMachine from "./VendingMachine"
import { Link } from "react-router-dom";


const Chips = () => {
  return (
    <div>
      <h3>
        <Link to="/">Back</Link>
      </h3>
      <h3>Chips</h3>
    </div>
  );
};

export default Chips;
