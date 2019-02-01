# Broken Webpack Bundle Test

This repository contains a minimal test case demonstrating how JavaScript bundles created with Webpack may be broken when using the `useBuiltins` option of `@babel/preset-env`.

This issue commonly manifests itself (amongst others) as:

```
ReferenceError: exports is not defined
```


## About

This test case is intended to create a bundle including two CommonJS modules and target a recent browser. The only polyfills that should be injected into the bundle from the `core-js` library are for the `String.prototype.padStart` and `String.prototype.padEnd` methods.


## Installation

After cloning this repository:

1. Run `npm install` to install of the required dependencies.
2. Build the test bundle with `npm run build` or `webpack`
3. Open `index.html`
