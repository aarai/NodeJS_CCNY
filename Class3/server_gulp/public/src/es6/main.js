class Animal {
  constructor(name = 'rai') {
    this.name = name;
  }
  sayName() {
    console.log(`my name is ${this.name}`);
  }
  callHome() {
    console.log('Calling home now');
  }
  move(dir="left") {
    console.log(`moving ${dir}`)
  }
}

var a = new Animal('Bill');
a.sayName();
a.callHome();
a.move();
