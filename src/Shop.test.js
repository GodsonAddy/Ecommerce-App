import React from 'react';
import {render} from '@testing-library/react';
import App from './App.js';
import Filter from './components/Filter.js';
import ReactDOM from 'react-dom';
import Products from './components/Products.js';


test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<App />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Filter />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Products />, root)
})


test('renders the correct content', () => {
    const {getByText} = render(<App/>);
    getByText("Ecommerce Shopping");
})

test('renders the correct content', () => {
  const {getByText, getByLabelText} = render(<Filter/>);
  getByText("products found");
  getByLabelText("Order by");
  getByLabelText("Filter size")
})


