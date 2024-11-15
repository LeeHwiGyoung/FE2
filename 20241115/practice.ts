// 여기에 알맞은 타입을 지정하세요
let userName : string = "김개발";
let userAge : number = 25;
let isStudent : boolean = true;
let numbers : number[] = [1, 2, 3, 4, 5];
let tuple : [string , number] = ["typescript", 100];

let value : string|number = "Hello";
value = 42;
 
let numberes : (number | string)[] = [1, 2, 3];
numberes.push("4");
 
let mixed : (unknown)[]= [1, "two", 3];
mixed.push(true);

// 적절한 반환 타입을 지정하세요
function logMessage(message : string) : void{
    console.log(message);
}
 
function throwError(message : string ) : never {
    throw new Error(message);
}
 
function infiniteLoop() : never {
    while (true) {
        console.log("무한 루프");
    }
}

const fruits : string[] = ['apple' ,'banana','mango'];

for(const fruit of fruits) {
    console.log(fruit)
}

fruits.forEach((fruit)=> {
    console.log(fruit)
})


function toLowerCase(str : string) : string {
    return str.toLowerCase();
}


function add(a:number , b?:number) : number {
    return a + b;
}