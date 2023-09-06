'use strict';

/** @type {import('jest').Config} */
var config = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  verbose: true
};

module.exports = config;
