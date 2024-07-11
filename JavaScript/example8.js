const obj = {
    prop: 42
  };
  
  Object.defineProperty(obj, 'prop', {
    value: 43,
    writable: false
  });
  
  obj.prop = 44;
  
  console.log(obj.prop); 
  