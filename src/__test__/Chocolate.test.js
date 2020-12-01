import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chocolate from "../components/Chocolate";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom/cjs/react-router-dom.min";

// smoke test
test("renders Chocolate component", () => {
  <MemoryRouter>
    render(
    <Chocolate />
    );
  </MemoryRouter>;
});

// snapshot test
test("renders a message", () => {
  <MemoryRouter>
    expect(Chocolate(container.innerHTML)).toMatchInlineSnapshot()
  </MemoryRouter>;
});
