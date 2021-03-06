import React from "react";
import { MemoryRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import Chocolate from "../components/Chocolate";
import { render, screen } from "@testing-library/react";

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
    const asFragment = render(<Chocolate />)
    expect(asFragment()).toMatchStapshot();
    expect(Chocolate(container.innerHTML)).toMatchInlineSnapshot()
  </MemoryRouter>;
});
