/* Mock Modules */

/* Mock the function using jest.mock() and jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
Mock the functions in the utils files, they are being used in the convertCase function.
Set up the mock functions before each test.

1. Test cases for the reverseString function
2. Test cases for the toLowerCase function
3. Test cases for the toUpperCase function
4. Test cases for the default case when it is unknown
5. Test cases for the empty string
*/
import { convertCase } from "./convertCase";
import * as utils from "./utils";

describe("convertCase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should use reverseString for reverse case", () => {
    const reverseMock = jest.spyOn(utils, "reverseString").mockImplementation(
      (str: string) => `reversed:${str}`
    );
    const input = "hello";
    const result = convertCase(input, "reverse");
    expect(reverseMock).toHaveBeenCalledWith(input);
    expect(result).toBe(`reversed:${input}`);
  });

  test("should use toLowerCase for lower case", () => {
    const lowerMock = jest.spyOn(utils, "toLowerCase").mockImplementation(
      (str: string) => `lower:${str}`
    );
    const input = "HeLLo";
    const result = convertCase(input, "lower");
    expect(lowerMock).toHaveBeenCalledWith(input);
    expect(result).toBe(`lower:${input}`);
  });

  test("should use toUpperCase for upper case", () => {
    const upperMock = jest.spyOn(utils, "toUpperCase").mockImplementation(
      (str: string) => `upper:${str}`
    );
    const input = "hello";
    const result = convertCase(input, "upper");
    expect(upperMock).toHaveBeenCalledWith(input);
    expect(result).toBe(`upper:${input}`);
  });

  test("should return string unchanged for unknown case", () => {
    const input = "hello";
    const result = convertCase(input, "unknown");
    expect(result).toBe(input);
  });

  test("should handle empty string input", () => {
    const upperMock = jest.spyOn(utils, "toUpperCase").mockImplementation(
      (str: string) => str.toUpperCase()
    );
    const input = "";
    const result = convertCase(input, "upper");
    expect(upperMock).toHaveBeenCalledWith(input);
    expect(result).toBe("");
  });
});
