# jest_test

![](./ProofOfTestsWorking/testworking.png)

This project demonstrates several testing techniques using Jest, including:
- Testing React components using both ReactDOM's `createRoot` API and React Testing Library.
- Snapshot testing.
- Using mock functions and spies.
- Testing utility functions with module mocks.
- Mocking HTTP requests with MSW to simulate backend behavior.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Test Details](#test-details)
- [Exercise Parts](#exercise-parts)
- [Configuration](#configuration)
- [License](#license)

## Overview

This project provides examples for:
- **ReactDOM Testing:** Rendering a simple `Counter` component (which increments and decrements a count) using ReactDOM’s `createRoot` API and testing its behavior.
- **React Testing Library:** Simulating real user interactions to validate component behavior.
- **Snapshot Testing:** Verifying component output and utility function results using Jest snapshots.
- **Mock Functions and Spies:** Using `jest.fn()` and `jest.spyOn()` to test function calls and their outputs.
- **Mocking HTTP Requests:** Using MSW in conjunction with Jest and React Testing Library to simulate and test interactions with a backend API.

## Project Structure

Below is a simplified view of the project folder structure:

```
vite-project/
├── src/
│   ├── exercise/
│   │   ├── 00-MockFunctions/
│   │   │   ├── forEachFn.test.ts
│   │   │   └── forEachSpyOn.test.ts
│   │   ├── 01-MockModule/
│   │   │   └── mockModule.test.ts
│   │   ├── 02-Snapshots/
│   │   │   ├── SuperHeros/
│   │   │   │   ├── SuperHeros.test.ts
│   │   │   │   └── __snapshots__/SuperHeros.test.ts.snap
│   │   │   └── Snapshots-Explanation.test.ts
│   │   ├── 03-ReactDom/
│   │   │   ├── Counter.tsx
│   │   │   └── ReactDom.test.tsx
│   │   ├── 04-ReactTestingLibrary/
│   │   │   └── Counter.test.tsx
│   │   ├── 05-AvoidImplementationDetails/
│   │   │   ├── Users.test.tsx
│   │   │   └── Counter.test.tsx
│   │   ├── 07-FormTesting/
│   │   │   └── Form.test.tsx
│   │   └── 08-MockHTTPRequests/
│   │       ├── MockHttpRequests.test.jsx
│   │       └── handlers.ts
│   └── sharedComponent/
│       ├── Login.tsx
│       ├── LoginSubmission.jsx
│       └── spinner.jsx
├── jest.config.cjs
├── jest.setup.ts
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal.
3. Run the following command to install all dependencies:

   ```bash
   npm install
   ```

## Running the Tests

To run all tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

To generate a coverage report:

```bash
npm run test:coverage
```

## Test Details

### ReactDOM Testing (Exercise 03)
- **File:** `src/exercise/03-ReactDom/ReactDom.test.tsx`
- **Component Under Test:** `src/exercise/03-ReactDom/Counter.tsx`
- **Functionality Tested:** Rendering of the `Counter` component, presence of Increment/Decrement buttons, and updating of the count.

### React Testing Library (Exercise 04)
- **File:** `src/exercise/04-ReactTestingLibrary/Counter.test.tsx`
- **Functionality Tested:** Simulating user interactions with the `Counter` component, ensuring accessibility roles and actionable UI elements are correctly rendered.

### Snapshot Testing (Exercise 02)
- **Files:** `src/exercise/02-Snapshots/SuperHeros/SuperHeros.test.ts` & `src/exercise/02-Snapshots/Snapshots-Explanation.test.ts`
- **Functionality Tested:** Verifying that the output of functions and components match previously saved snapshot outputs.

### Mock Functions and Module Testing (Exercises 00 & 01)
- **Files:** `src/exercise/00-MockFunctions/forEachFn.test.ts`, `src/exercise/00-MockFunctions/forEachSpyOn.test.ts`, `src/exercise/01-MockModule/mockModule.test.ts`
- **Functionality Tested:** Using Jest mock functions (`jest.fn()`) and spies (`jest.spyOn()`) to track function calls and validate output.

### Avoiding Implementation Details (Exercise 05)
- **Files:** `src/exercise/05-AvoidImplementationDetails/Users.test.tsx` and `src/exercise/05-AvoidImplementationDetails/Counter.test.tsx`
- **Functionality Tested:** Testing components without relying on internal implementation details to ensure tests remain robust against refactoring.

### Form Testing & HTTP Request Mocking (Exercises 07 & 08)
- **Exercise 07 - Form Testing:**
  - **File:** `src/exercise/07-FormTesting/Form.test.tsx`
  - **Functionality Tested:** Validates a login form’s user interactions using React Testing Library with implementation detail-free tests.
- **Exercise 08 - Mock HTTP Requests:**
  - **File:** `src/exercise/08-MockHTTPRequests/MockHttpRequests.test.jsx` and associated `handlers.ts`
  - **Functionality Tested:** 
    - Simulating backend HTTP requests with MSW.
    - Verifying component behavior during successful submissions, server errors, and validation errors (e.g., missing password).
    - Ensuring inline snapshots (or external snapshots if inline snapshots are not supported) properly capture error messages.

## Exercise Parts

For exercises **04, 05, 07, and 08**, each consists of two parts, which for consistency purposes are implemented in a single file inside of each folder:
- **Part 1:** Initial setup and basic testing.
- **Part 2:** Advanced testing scenarios, such as externalizing mock handlers and using inline snapshots for error messages.

This division allows you to first build a foundational test and then extend it with more advanced testing techniques.

## Configuration

### Jest Configuration
- **File:** `jest.config.cjs`
  - Uses `ts-jest` and `babel-jest` for transforming TypeScript and modern JavaScript.
  - Uses `jest.Environment-jsdom` for simulating a browser-like environment.
  - Loads additional setup via `jest.setup.ts`.

### Babel Configuration
- **File:** `babel.config.cjs`
  - Configured with presets for env, React, and TypeScript.

### TypeScript Configuration
- **Files:** `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
  - These configuration files ensure proper resolution of modules, JSX, and other TypeScript features.

## License

This project is licensed under the ISC License.
