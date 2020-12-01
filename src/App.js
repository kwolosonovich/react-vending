import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import "./App.css";
import VendingMachine from './components/VendingMachine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vending Machine</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <VendingMachine />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
