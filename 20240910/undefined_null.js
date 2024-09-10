let a;
console.log(a);
console.log(typeof a);
console.log(typeof b);

//null
//빈 값 , 명시적으로 사용하는 값

let isLoggedIn =  true;
let currentUser = {
    name : "licat",
    lever : 3,
};

//로그인이 해제
isLoggedIn = false;
currentUser = null;
currentUser = undefined; // 빈값 의미론적 부적절

console.log(`typeof null >> `, typeof null); // 오류 object
console.log(""===null);
console.log(Object.prototype.toString.call(null));
