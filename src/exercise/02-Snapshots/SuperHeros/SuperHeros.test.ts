/* Exercise 2: Test using snapshots */

/* Mock the function using jest.fn().
Write three tests inside a describe block. You should import the superHeros[] and getFlyingSuperHeros function.

1. First Test: 
Test should return an empty array if no superheros have the 'Fly' power
2. Second Test:
Test should return an array of superheros that have the 'Fly' power
3. Third Test:
Test should match the snapshot of flying superheros.
The snapshot file should contain the expected output of the test.
The snapshot should be saved in a __snapshots__ directory next to the test file.
The snapshot file should be named SuperHeros.test.ts.snap.
*/

import { getFlyingSuperHeros } from "./getFlyingSuperHeros";
import { superHeros } from "./superHeros";

describe("SuperHeros tests", () => {
  it("should return an empty array if no superheros have the 'Fly' power", () => {
    const result = getFlyingSuperHeros([]);
    expect(result).toEqual([]);
  });

  it("should return an array of superheros that have the 'Fly' power", () => {
    const result = getFlyingSuperHeros(superHeros);
    // Building the expected array using the same logic that getFlyingSuperHeros uses
    const expected = superHeros.filter(hero => hero.power.includes("Fly"));
    expect(result).toEqual(expected);
  });

  it("should match the snapshot of flying superheros", () => {
    const result = getFlyingSuperHeros(superHeros);
    expect(result).toMatchSnapshot();
  });
});

