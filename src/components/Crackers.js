import React from "react";
import VendingMachine from "./VendingMachine";
import { Link } from "react-router-dom";


const Crackers = () => {
  return (
    <div>
      <h3>
        <Link to="/">Back</Link>
      </h3>
      <h3>Crackers</h3>
    </div>
  );
};

export default Crackers;
