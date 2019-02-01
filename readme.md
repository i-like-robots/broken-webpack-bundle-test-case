# Broken Webpack Bundle Test

This repository contains a minimal test case demonstrating how Webpack bundles may be broken when using the `useBuiltins` option of `@babel/preset-env` which injects polyfills from `core-js`.

Specifically this test case demonstrates the bundling of two CommonJS modules for a recent browser. The only polyfills injected into the bundle are for `String.prototype.padStart` and `String.prototype.padEnd`.


## Installation

After cloning this repository:

1. Run `npm install` to install of the required dependencies.
2. Build the test bundle with `npm run build` or `webpack`
3. Open `index.html`
