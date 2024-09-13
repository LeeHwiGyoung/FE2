console.log("=== 함수의 기본값 ===");
function defaultFunc(a = 10, b = 20, c = 30) {
  console.log(a, b, c);
  return a + b + c;
}

console.log(`>> `, defaultFunc()); // undefined undefined undefined
console.log(`>> `, defaultFunc(20));
console.log(`>> `, defaultFunc(100, undefined, 200));

console.log(`>> `, defaultFunc((b = 300), (c = 200))); // 530

console.log("===== 구조 분해 할당 =====");
function printUser(name, grade, company) {
  console.log(`이름: ${name}, 등급: ${grade}, 회사: ${company}`);
}
printUser("Licat", 3, "Weniv");

function printUser2({ name, grade, company } = {}) {
  console.log(`이름: ${name}, 등급: ${grade}, 회사: ${company}`);
}
printUser2({ name: "Licat", grade: 3, company: "Weniv" });
printUser2({ name: "Binky" });
printUser2();

console.log("RORO패턴");
function createUser({ name, email }) {
  let id = "100000";
  let grade = 0;
  return { id, name, grade, email };
}

const user = createUser({
  name: "licat",
  email: "licat@weniv.co.kr",
  type: "cat",
});
console.log(user);

function func(obj) {
  // obj에 대한 예외처리
  const { name, age } = obj;
  console.log(name, age);
  console.log(obj.level);
}

func({ name: "licat", age: 20, grade: 3, level: 20 });

console.log("=== 나머지 문법 ===");
function func1(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}
func1(10, 20, 30, 40, 50, 60, 70);

function func2({ name, age, ...rest }) {
  console.log(name, age, rest);
}
func2({ name: "wade", age: 20, company: "weniv", level: 3 });

console.log("=== spread vs rest ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr = [...arr1, ...arr2];
console.log(arr);

console.log("=== 콜백함수 ===");
function func1() {
  return 100;
}
console.log(func1()); // 함수가 값으로 평가될 수 있다.

let x = func1();

console.log("=== 재귀함수 ===");
// factorial(n) = n * (n-1)* ... * 1 = n * factorial(n-1)
// !0 == 1 ,!1 == 1
// f(3) = 3*f(2)
// f(2) = 2*f(1)
// f(1) = 1*f(0)
// f(0) = 0*f(-1)

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

// sigma(n) = n + sigma(n-1)

function sigma(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sigma(n - 1);
}
console.log(sigma(5));
// sigma(5) == 15
// sigma(4) == 10
// sigma(3) == 6
// sigma(2) == 3
// sigma(1) == 1

console.log("=== 3. 즉시 실행 함수 ===");
// let, const

// 즉시 실행 함수
const result = (function funcIIFE() {
  let a = 1;
  let b = 2;
  return a + b;
})();
// funcIIFE();
console.log(result);

console.log("=== 4. 생성자 함수 ===");
const book = {
  title: "JavaScript Essentials",
  price: 15000,
  author: ["wade", "hati"],
};

function Book(title, price, author) {
  this.title = title;
  this.price = price;
  this.author = author;
  this.publish = "위니북스";
}
const book1 = new Book("JS", 15000, ["wade", "hati"]);
const book2 = new Book("HTML/CSS", 20000, ["rosy", "zeezee"]);

console.log(book1);
console.log(book2);

const book3 = Book("React", 18000, ["wade"]);
console.log(book3); // undefined
console.log(title, price, author, publish);
// window.title
// window.price
// window.author
// window.publish
