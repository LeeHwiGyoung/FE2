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

/* 
   생성자 호출 순서에서 parent가 먼저 호출되기 때문에 constructor에 parent가 들어가는것인가?
    => Object.create를 통해 prototype을 설정하게 되면 생성자를 포함하여 프로토타입 메서드를 상속받는다
    이 때 consturctor 가 덮어씌워진다.
  
   */
function Child() {
  Parent.call(this); // parent의 this가 child를 가리키게 됨
  this.gender = "male";
}

Child.prototype = Object.create(Parent.prototype); // 지정된 프로토타입 객체를 갖는 새 객체를 만듭니다.

Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};
