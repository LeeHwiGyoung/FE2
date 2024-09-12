// key 문자열(변수명 작성 규칙을 만족하면 따옴표 생략 가능) , Symbol
//value 어떤 자료형이든 사용 가능
const obj = {name : "licat", age : 30  }; //프로퍼티
console.log(obj); 

const company = 'weniv';
const user = {
    name : "licat",
    company,
    location : {
        country : "korea",
        city : "jeju",
    },
    greeting () {
        console.log("Hello, I am licat!");
    }
}

//객체의 속성에 접근
// 1. 대괄호 표기법
console.log(user["company"]);
console.log(user["location"])
console.log(user["greeting"]())

//2. 점 표기법
console.log(user.company)
console.log(user.location)
console.log(user.greeting())

console.log(user.friend); //undefined

user['job'] = "CEO"; //추가

user['location'] = "jeju";  // 수정

delete user.job; // 삭제

//객체 속성 확인

console.log('job' in user); //false
console.log('name' in user); //true

//객체의 중첩
const user = {
    name : "licat",
    company,
    location : {
        country : "korea",
        city : "jeju",
    },
    greeting () {
        console.log("Hello, I am licat!");
    },
    "co-worker" : ["binky" , "mura" , "soulgom"],
};

console.log(user["location"]['city']);

//객체 순회

for (const key in user) {
    console.log(key , user[key]);
}
//fon in 순서를 보장 X

const weniv = {
    ceo : "Licat",
    manager: "Mura",
    designer : "Soulgom",
};

console.log("Object.keys", Object.keys(weniv));
console.log("Object.values", Object.values(weniv));
console.log("Object.entries", Object.entries(weniv));