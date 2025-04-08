/* Exercise 0: Test the function by using a mock function */
/* Mock the function using jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
The mock function receives a prop of type number. The mocked function adds a 6 to the number.
1. First Test: 
The forEach function should be called 3 times
2. Second Test:
The forEach function should be called with the correct arguments.
3. Third Test:
Test the first argument of the first call to the function was 0 and the result is 6.
Test the first argument of the second call to the function was 1  and the result is 7.
4. Forth Test:
Test the first argument of the third call to the function was 4 and the result is not 9.
*/

describe("forEachFn tests", () => {
  let mockFn: jest.Mock<number, [number]>;
  let numbers: number[];

  beforeEach(() => {
    mockFn = jest.fn((num: number) => num + 6);
    numbers = [0, 1, 4];
  });

  // A simple forEach function that applies the callback to each element.
  function forEach(arr: number[], callback: (num: number) => number) {
    arr.forEach(callback);
  }

  test("First Test: The forEach function should be called 3 times", () => {
    forEach(numbers, mockFn);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  test("Second Test: The forEach function should be called with the correct arguments", () => {
    forEach(numbers, mockFn);
    // Compare only the first argument of each call
    const firstArgs = mockFn.mock.calls.map(call => [call[0]]);
    expect(firstArgs).toEqual([[0], [1], [4]]);
  });

  test("Third Test: Check arguments and return values for first two calls", () => {
    forEach(numbers, mockFn);
    // First call: argument 0 and result 6
    expect(mockFn.mock.calls[0][0]).toBe(0);
    expect(mockFn.mock.results[0].value).toBe(6);
    // Second call: argument 1 and result 7
    expect(mockFn.mock.calls[1][0]).toBe(1);
    expect(mockFn.mock.results[1].value).toBe(7);
  });

  test("Forth Test: Check third call argument is 4 and result is not 9", () => {
    forEach(numbers, mockFn);
    expect(mockFn.mock.calls[2][0]).toBe(4);
    expect(mockFn.mock.results[2].value).not.toBe(9);
  });
});
