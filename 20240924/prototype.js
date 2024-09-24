function Robot(foodList) {
  this.foodList = [...foodList];
}

Robot.prototype.setFoodList = function (foodList) {
  this.foodList = [...foodList];
};

Robot.prototype.selectFood = function () {
  console.log(
    `선택된 음식은 ${
      this.foodList[Math.floor(Math.random() * this.foodList.length)]
    } 입니다.`
  );
};

function BasicRunner(name) {
  name = this.name;
  maxHp = 10;
  hp = 10;
  level = 1;
}

BasicRunner.prototype.rest = function () {
  this.hp = this.maxHp;
};

BasicRunner.prototype.running = function () {
  this.hp--;
  this.maxHp++;
  this.level++;
};
