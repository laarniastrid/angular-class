interface Vehicle {
  make: string;
  syear: number:
  type: string;
  go(): void;
}

class Car implements Vehicle {f  
  contructor(public make: string, public year: number) {
    this.make = make;
  }
  go(): void {}
}
