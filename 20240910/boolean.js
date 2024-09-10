// 비교 연산의 결과
let x  = 10;
let y = 20;

console.log(x>y)
console.log(x=="10")
console.log(x==="10")

// 논리 연산
 //   and or not
//  1. and 논리곱 &&
 console.log("===논리곱===");

 console.log(`true && true >> ${true&&true}`);
 console.log(`true && false >> ${true&&false}`);
 console.log(`fasle && true >> ${false&&true}`);
 console.log(`false && false >> ${false&&false}`);

 let isRaining = true;
 let hasUmbrella = true;
 
 if(isRaining && hasUmbrella) {
    console.log("외출을 한다")
 }else{
    console.log("외출을 안한다")
 }

 // 2 or 논리합

 console.log("===논리곱===");

 console.log(`true && true >> ${true||true}`);
 console.log(`true && false >> ${true||false}`);
 console.log(`fasle && true >> ${false||true}`);
 console.log(`false && false >> ${false||false}`);

 isRaining = false;
 let isSnowing = true;

 if(isRaining || isSnowing) {
    console.log('외출을 하지 않는다')
 }else{
    console.log('외출을 한다.')
 }
