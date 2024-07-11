function Person(name) { 
    this.name = name; 
} 
Person.prototype.greet = function() {
     console.log(`Hello, my name is ${this.name}`);
     } 
function greetPerson(person, greet) { 
    greet(); 
    person.greet();
} 
const john  = new Person('John'); 
greetPerson(john, john.greet);