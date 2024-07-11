const proto = {
    sayHello() {
      return 'Hello';
    }
  };
  
  const obj = Object.create(proto);
  obj.sayHello = function() {
    return 'Hi';
  };
  
  console.log(obj.sayHello()); 
  delete obj.sayHello;
  console.log(obj.sayHello()); 
  