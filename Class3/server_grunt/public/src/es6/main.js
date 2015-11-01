class Animal {
  constructor() {
    console.log('I\'m alive');
  }

  move(direction) {
    console.log(`moved ${direction}`);
  }
}

var animal = new Animal();
animal.move('right');
