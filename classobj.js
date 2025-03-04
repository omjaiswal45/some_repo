/* class is a blueprint for creating objects. An object is an instance of 
a class that contains properties (variables) and methods (functions). */
class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log("hi my car  "+this.brand + this.model +this.year );
    }

  }
  const myCar = new Car("Toyota  ", "Camry  ", 2022);
  const mycar1 = new Car("Honda ", "Civic ", 2021);
   const mycar2 = new Car("Ford ", "Mustang ", 2023);
  myCar.start();
  mycar1.start();
  mycar2.start();