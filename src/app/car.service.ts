export class Car {
  brand: string;
  color: string;

  constructor(carBrand:string, carColor:string) {
    this.brand = carBrand;
    this.color = carColor;
    console.log('Купили', this.color, this.brand);
  }

  beep() {
    console.log(this.brand + 'бип-бип!')
  }
}

const myCar = new Car('Toyota', 'красная');
myCar.beep();

const wifeCar = new Car('BMW', 'чёрная')
wifeCar.beep()
