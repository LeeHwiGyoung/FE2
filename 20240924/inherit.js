function Parent() {
  this.name = "라이캣";
  console.log("make Parent");
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child() {
  Parent.call(this);
  this.gender = "male";
}

Child.prototype = Object.create(Parent.prototype); // 지정된 프로토타입 객체를 갖는 새 객체를 만듭니다.

Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};
