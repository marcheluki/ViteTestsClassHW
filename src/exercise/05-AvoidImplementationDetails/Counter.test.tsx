import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../03-ReactDom/Counter"; // adjust the path as needed
import "@testing-library/jest-dom";

describe("Counter component", () => {
  test("renders the counter and its buttons, and increments/decrements correctly using userEvent", async () => {
    render(<Counter />);

    // Find the heading that shows the counter
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Counter: 0");

    // Get the buttons by role with accessible names
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    // Simulate clicking the increment button which fires a full sequence of events
    await userEvent.click(incrementButton);
    expect(heading).toHaveTextContent("Counter: 1");

    // Simulate clicking the decrement button
    await userEvent.click(decrementButton);
    expect(heading).toHaveTextContent("Counter: 0");
  });
});
