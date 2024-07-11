const proto = {
    getValue() {
      return this.value;
    }
  };
  
  const obj1 = Object.create(proto);
  obj1.value = 1;
  
  const obj2 = Object.create(proto);
  obj2.value = 2;
  
  console.log(obj1.getValue()); 
  console.log(obj2.getValue()); 
  