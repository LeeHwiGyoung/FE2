class Sausage {
  constructor(ingredient1, ingredient2) {
    this.ingredient1 = ingredient1;
    this.ingredient2 = ingredient2;
  }

  taste() {
    console.log(`${this.ingredient1}와 ${this.ingredient2} 맛이 난다!`);
  }
}

class FiresSausage extends Sausage {
  constructor(ingredient1, ingredient2) {
    super(ingredient1, ingredient2);
  }
  taste() {
    console.log(`${this.ingredient1}와 ${this.ingredient2} 맛과 불맛이 난다!`);
  }
}
