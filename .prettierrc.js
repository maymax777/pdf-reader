"use strict";

const esNextPaths = [
  // Internal forwarding modules
  "packages/*/*.js",
  // Source files
  "packages/*/src/**/*.js",
  "packages/events/**/*.js",
  "packages/shared/**/*.js",
  // Shims and Flow environment
  "scripts/flow/*.js",
  "scripts/rollup/shims/**/*.js",
];

module.exports = {
  parser: "babylon",
  printWidth: 100,
  bracketSpacing: true,
  singleQuote: false,
  jsxBracketSameLine: false,
  trailingComma: "es5",
  arrowParens: "avoid",
  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: "all",
      },
    },
  ],
};
