import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendingMachine from '../components/VendingMachine';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';

// smoke test
test('renders VendingMachine component', () => {
    <MemoryRouter>
      render(<VendingMachine />);
    </MemoryRouter>;
})

// snapshot test
test('renders a message', () => {
    <MemoryRouter>
        expect(VendingMachine(container.innerHTML)).toMatchInlineSnapshot()
    </MemoryRouter>
})