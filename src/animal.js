class Animal {
  constructor(noise) {
    this._noise = noise;
  }

  noise() {
    console.log(this._noise);
  }
}

exports.Animal = Animal;
