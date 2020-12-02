import React from "react";
import { MemoryRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import Crackers from "../components/Crackers";
import { render, screen } from "@testing-library/react";

// smoke test
test("renders Chocolate component", () => {
  <MemoryRouter>
    render(
    <Crackers />
    );
  </MemoryRouter>;
});

// snapshot test
test("renders a message", () => {
  <MemoryRouter>
    const asFragment = render(
    <Crackers />) expect(asFragment()).toMatchStapshot();
    expect(Crackers(container.innerHTML)).toMatchInlineSnapshot()
  </MemoryRouter>;
});
