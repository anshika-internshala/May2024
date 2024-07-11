function Animal(name) {
    this.name = name;
}

Animal.prototype.species = 'Mammal';

const dog = new Animal('Dog');

console.log(dog.species); // Mammal

delete Animal.prototype.species;

delete dog.species;

console.log(dog.species); // Mammal 

dog.species = 'Canine';

console.log(dog.species); // canine

delete dog.species;

console.log(dog.species); //Mammal

// console.log(~(0)); // tilde