/*
 * This is a pointer file to the compiled version of e2e/src/index.ts
 *
 * The cucumber.js file is the entry point, it defines the test configuration
 * and the file read directly by Cucumber.
 *
 * As the cucumber.js file does not support es6 or Typescript. Using Babel, we can compile
 * e2e/src/index.ts to es5 so that cucumber is happy and we can consistently use es6 & Typescript.
 */

module.exports = require('./dist');
