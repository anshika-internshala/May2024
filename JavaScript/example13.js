const person = {
    name: 'Alice',
    sayName() {
      console.log(this.name);
    }
  };
  
  const anotherPerson = Object.create(person);
  
  console.log(anotherPerson.hasOwnProperty('name')); 
  console.log('name' in anotherPerson); 
  