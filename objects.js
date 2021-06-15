class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('sueeeeak');
  }
  eatFood() {
    console.log('munch munch');
  }
  getPrice() {
    return this.price;
  }
}
 
