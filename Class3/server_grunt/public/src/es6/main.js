class Animal {
  constructor() {
    console.log('I\'m alive');
  }
  move(direction) {
    console.log(`moved ${direction}`);
  }
  walk(dir) {
    this.move(dir);
  }
}

var animal = new Animal();
animal.walk('right');
animal.walk('left');
