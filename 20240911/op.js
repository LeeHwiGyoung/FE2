//산술 할당 연산
// 산술 + 할당

let x = 10;
// x  =  x + 10;
x += 10;
console.log(x)

x-= 5;
console.log(x)

x *= 2;
console.log(x)

x /= 3;
console.log(x)

x **= 2;
console.log(x)

x %= 8;
console.log(x)// 4

console.log("====비교 연산====")
console.log("1. 동등과 부등")
let y = 10;
console.log(x == y);
console.log(x == 4); //true
console.log(x == '4'); // true
// 동등 연산은 암묵적 형 변환이 일어난다

console.log(x != y); // true
console.log(x != "4"); // false


console.log("====객체 비교====");

const obj = {name : 'weniv' , age : 20}
const obj2 = {name : 'weniv' , age : 20}

console.log(obj === obj2); //동등비교에 있어 참조값 비교

const obj3 = obj2;

console.log(obj2 == obj3); // true
console.log({}=={}); //false

console.log("일치와 불일치");
console.log(x === 4)

console.log(x !== y); //true
console.log(x !== "4"); //true
console.log(x !== 4); //false

console.log("==== 논리 연산과 단축 평가 ====")
//논리 연산자 : and(&&) , or (||) , not (!)

console.log("1.논리곱 연산")
//논리곱 -> 피연산자가 모두 true일 때 true
console.log("Licat" && false && 23 && "wade"); // 단축평가 왼쪽에서 false를 만나 그 다음 조건은 확인 하지 않고 false 를 출력
console.log("Licat" && 23 && "Wade");//Truthy , Falsy 

//모든 값이 Truthy -> 모든 피연산자를 평가 / 마지막 Truthy 값을 반환

console.log("Licat" &&  null && "Wade"); //가장 첫번째로 만나는 Falsy 값 반환

let isLoggedIn = false;
isLoggedIn && console.log("사용자님 안녕하세요!")


console.log("2. 논리합 연산")
//논리합 -> 피연산자가 모두 false일 때 false
console.log(null||false||23||"Wade"); //23에서 평가 종료

//가장 처음 나온 Truthy 반환

console.log(null || undefined || false || 0);
//0 반환

let name = "";
name = name || "사용자";  // 사용자
name = "라이켓"
name = name || "사용자"; //라이캣
console.log(`${name}님 안녕하세요!`)

console.log("==== nullish 병합 연산자====");
// ?? -> 논리합 연산의 단축평가와 유사
// null 과 undefined 인지를 평가
console.log("Licat" ?? "Wade"); //Licat
console.log(null ?? "Wade"); //Wade
console.log(null ?? undefined);//undefined
console.log("" ?? "Wade"); //""
console.log(false ?? "Wade"); // false

console.log("====옵셔널체이닝====")

//?.

const user2 = {
    name : "licat",
    company : "weniv",
    address : {
        city : "Jeju"
    }
}

console.log(user2.address)

console.log("단축 평가 사용", user2 && user2.address&& user2.address.city)

console.log("옵셔널 체이닝 사용", user2?.address?.city);

console.log("====쉼표 연산====");

let a= 1, b = 2 , c = 3;

console.log(a ,b, c)

let result = (a + 1 , b+2, c+3 );
console.log(a , b , c)
console.log(result)


console.log("그룹 연산자")
// () 묶는 역할 우선순위 변경
a = 10;
b = 20;
c = 30;
console.log(a + b * c)
console.log((a + b) * c)