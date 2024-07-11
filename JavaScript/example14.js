class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
  };
  
  const animal = new Animal('Simba');
  animal.speak(); 
  
  animal.speak = function() {
    console.log(`${this.name} roars.`);
  };
  
  animal.speak(); 
  