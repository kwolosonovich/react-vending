import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./styles/App.css";
import VendingMachine from "./components/VendingMachine";
import Chocolate from "./components/Chocolate";
import Chips from "./components/Chips";
import Crackers from "./components/Crackers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vending Machine</h1>
      </header>
      <BrowserRouter className="body">
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/chocolate">
            <Chocolate />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/crackers">
            <Crackers />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
