import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chips from "../components/Chips";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";

// smoke test
test("renders Chocolate component", () => {
  <MemoryRouter>
    render(
    <Chips />
    );
  </MemoryRouter>;
});

// snapshot test
test("renders a message", () => {
  <MemoryRouter>
    expect(Chips(container.innerHTML)).toMatchInlineSnapshot()
  </MemoryRouter>;
});
