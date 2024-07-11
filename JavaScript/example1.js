function Person(name) {
    this.name = name;
  }
  
  Person.prototype.getName = function() {
    return this.name;
  };

  console.log(Person);

  
  const john = new Person('John');
  const jane = new Person('Jane');
  
  console.log(john.getName()); 
  console.log(jane.getName());
  