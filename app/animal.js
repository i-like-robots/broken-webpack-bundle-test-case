class Animal {
  constructor(noise) {
    // Force the inclusion of the padStart and padEnd polyfills from core-js
    this._noise = noise.padStart(4).padEnd(4)
  }

  noise() {
    console.log(this._noise);
  }
}

// Note: This is a CJS module
exports.Animal = Animal;
