const person = {
    name: 'John',
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  };
  
  const anotherPerson = Object.create(person);
  anotherPerson.name = 'Jane';
  anotherPerson.greet(); 
  
  delete anotherPerson.name;
  anotherPerson.greet(); 
  