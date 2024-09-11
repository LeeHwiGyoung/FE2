// 조건문
let isGreen = false;
if (isGreen) {
  console.log("횡단보도를 건너세요!");
} else {
  console.log("멈추세요!");
}

console.log("--- if  ---");

// if 조건문
if (true) {
  console.log("이 코드는 항상 실행됩니다!");
}
if (false) {
  console.log("이 코드는 실행되지 않습니다.");
  console.log("이 코드는 실행되지 않습니다.");
  console.log("이 코드는 실행되지 않습니다.");
  console.log("이 코드는 실행되지 않습니다.");
}

let age = 24;
if (age > 20) {
  console.log("입장이 가능합니다.");
}

let name = "";
if (name) {
  console.log(`${name}님 안녕하세요`);
}

console.log("--- if - else ---");
name = "";
if (name) {
  console.log(`${name}님 안녕하세요`);
} else {
  console.log("이름을 입력하세요");
}

let x = 5;
let y = 10;

if (x === y) {
  console.log("x와 y가 같습니다");
} else {
  console.log("x와 y가 다릅니다");
}

x = 20;
y = 10;
if (x === y) {
  console.log("x와 y가 같습니다");
} else {
  if (x > y) {
    console.log("x가 y보다 큽니다");
  } else {
    console.log("x가 y보다 작습니다");
  }
}

console.log("---- else if ----");
if (x === y) {
  console.log("x와 y가 같습니다");
} else if (x > y) {
  console.log("x가 y보다 큽니다");
} else {
  console.log("x가 y보다 작습니다");
}

let score = 80;
let grade;

if (score > 90) {
  grade = "A";
} else if (score > 80) {
  // score가 90보다 작거나 같다
  grade = "B";
} else if (score > 70) {
  // score가 80보다 작거나 같다
  grade = "C";
} else if (score > 60) {
  // score가 70보다 작거나 같다
  grade = "D";
} else {
  // score가 60보다 작거나 같다
  grade = "F";
}
console.log(`점수는 ${grade}`);

let month;

if(3 <= month && month <= 5 ){
    console.log("봄");
}else if(6 <= month  && month <= 8){
    console.log("여름");
}else if( 9 <= month && month <= 11){
    console.log("가을");
}else {
    console.log("겨울");
}