const path = require("path");

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'jest-transform-stub',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { configFile: './babel.config.cjs' }],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
}
  //testEnvironment: "jest-environment-jsdom",
  //transform: {
    //"^.+\\.tsx?$": "ts-jest",
  //},
  //setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  //moduleNameMapper: {
    //"\\.(css|less|sass|scss)$": "identity-obj-proxy",
  //},
  // collectCoverageFrom: ["src/**/*.{ts,tsx, js,jsx}"],
  // collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //     branches: 70,
  //     functions: 70,
  //     lines: 70,
  //     statements: 70,
  //   },
  // },
  //testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
