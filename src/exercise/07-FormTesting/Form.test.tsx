import * as React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "../sharedComponent/Login";

import { build, perBuild } from "@jackfranklin/test-data-bot";
import { faker } from "@faker-js/faker";

describe("Login Form", () => {
  let onSubmitMock = jest.fn();
  let container: HTMLElement;

  const userBuilder = build<{ name: string; password: string }>({
    // Within perBuild, call your faker library directly.
    fields: {
      name: perBuild(() => faker.person.fullName()),
      password: perBuild(() => faker.internet.password()),
    },
  });

  beforeEach(() => {
    onSubmitMock = jest.fn();

    const renderRes = render(<Login onSubmit={onSubmitMock} />);
    container = renderRes.container;
  });

  test("renders all form elements correctly", async () => {
    // Find the heading that shows the counter

    const inputField = container.querySelector("#username-field");
    expect(inputField).toBeInTheDocument();

    const passwordField = container.querySelector("#password-field");
    expect(passwordField).toBeInTheDocument();

    const submitButton = container.querySelector("button[type='submit']");
    expect(submitButton).toBeInTheDocument();
  });

  test("submits the form with correct values", async () => {
    const inputField = container.querySelector(
      "#username-field",
    ) as HTMLInputElement;
    const passwordField = container.querySelector(
      "#password-field",
    ) as HTMLInputElement;
    const submitButton = container.querySelector(
      "button[type='submit']",
    ) as HTMLButtonElement;

    const { name, password } = userBuilder();

    await userEvent.type(inputField, name);
    await userEvent.type(passwordField, password);
    await userEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith({ username: name, password });
  });

  test("does not submit the form when fields are empty", async () => {
    const submitButton = container.querySelector(
      "button[type='submit']",
    ) as HTMLButtonElement;

    await userEvent.click(submitButton);

    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  test("password field is of type password", () => {
    const passwordField = container.querySelector(
      "#password-field",
    ) as HTMLInputElement;
    expect(passwordField.type).toBe("password");
  });
});
