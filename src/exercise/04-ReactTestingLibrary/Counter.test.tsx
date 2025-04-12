/* Introduction React Testing Library */

/*
## Background

React Testing Library is a lightweight solution for testing React components.
It provides a simple API for rendering components, firing events, and asserting
on the output. It encourages you to test your components in a way that
resembles how the end user will interact with them. This means that you should
be testing the output of your components, not the implementation details. This
is a good thing! It means that you can change the implementation of your
components without having to change your tests. It also means that you can
test your components in a way that resembles how the end user will interact
with them.

[React Testing Library](https://testing-library.com/react) is the React
implementation of the [DOM Testing Library](https://testing-library.com)
(there's also a
[React Native Testing Library](https://testing-library.com/react-native) and
many others). 
Here's a simple example of how to use this:
*/
/*
React Testing Library has the following automatic features:
- It automatically cleans up the DOM after each test. This means that you
  don't have to worry about cleaning up the DOM after each test. This is a
  good thing!
- It automatically wraps your tests in `act`. This means that you don't
    have to worry about wrapping your tests in `act`. This is a good thing!
- It automatically provides you with a `screen` object that contains
  methods for querying the DOM. This means that you don't have to worry
  about querying the DOM. This is a good thing!
- It automatically provides you with a `fireEvent` object that contains
  methods for firing events. This means that you don't have to worry about
  firing events. This is a good thing!

## Exercise

In this exercise, we're going to refactor the test of exercise 03 using React
Testing Library does for us. The emoji should guide you pretty well on this one
so I'll let you have at it!

*/
import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../03-ReactDom/Counter"; // adjust the path as needed

describe("Counter component", () => {
  test("renders the counter and its buttons, increments and decrements correctly", () => {
    render(<Counter />);
    
    // Find the heading that displays the count using getByRole
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Counter: 0");

    // Get the buttons by their accessible name
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    // Simulate a click on the Increment button and assert
    fireEvent.click(incrementButton);
    expect(heading).toHaveTextContent("Counter: 1");

    // Simulate a click on the Decrement button and assert
    fireEvent.click(decrementButton);
    expect(heading).toHaveTextContent("Counter: 0");
  });
});
