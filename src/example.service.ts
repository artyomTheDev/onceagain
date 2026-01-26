interface mayBeWarmed {
  warm(): void
}

class Pizza implements mayBeWarmed {
  warm() {
    console.log(`Разогреваю пиццу в духовке`)
  }
}

class Soup implements mayBeWarmed {
  warm() {
    console.log('Грею суп на плите')
  }
}

class IAm {
  constructor(private food: mayBeWarmed) {}

    eat() {
      this.food.warm();
      console.log('Nyam-nyam');

  }
}

const IAm1 = new IAm(new Pizza());

IAm1.eat();

const IAm2 = new IAm(new Soup());

IAm2.eat();
