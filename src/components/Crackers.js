import React from "react";
import VendingMachine from "./VendingMachine";
import { Link } from "react-router-dom";
import "../images/crackers.jpg";
import "../styles/Crackers.css";

const Crackers = () => {
  return (
    <div className="crackers">
      <h3>
        <Link to="/">Back</Link>
      </h3>
      <h3>Crackers</h3>
      <div>
        <a
          className="attribute"
          href="https://www.freepik.com/photos/background"
        >
          Background photo created by topntp26 - www.freepik.com
        </a>
      </div>
    </div>
  );
};

export default Crackers;
