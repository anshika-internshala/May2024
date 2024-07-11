function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.year = 2020;
  
  const myCar = new Car('Toyota', 'Camry');
  console.log(myCar.year); 
  
  myCar.year = 2021;
  console.log(myCar.year); 
  