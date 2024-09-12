//'use strict'; //this=> undefined
console.log('===1. 전역 범위 ===');
console.log(this); //전역 객체 window

function func1() {
    console.log(this);
}

console.log("=== 2. 일반 함수 호출 ===");
func1(); // 일반 함수 호출 =>  this 가 전역 객체

const obj = {
    name : 'obj',
    type : 'object',
    func1 : func1,
};


obj.func1();


const obj2 = {
    name : 'obj2',
    type : 'object',
    func1: function() {
        console.log('func1', this); //객체


        function func2() {
            console.log("func2" , this); // 전역
        }
        
        func2();
    }
}


const func3 = obj2.func1
func3();

const obj3 ={
    name : 'obj3',
    func1 : function () {
        const arrowFunc = () => {
            console.log('arrow',this);
        }
        function innerFunc ( ) {
            console.log('func' , this);
        } 
        arrowFunc();
        innerFunc();
    }
}
obj3.func1();

const button = document.querySelector('.btn-click');
/* 
button.addEventListener('click', function () {
    console.log('이벤트 등록된 객체' , this);
    this.style.background = 'pink';
}) */

button.addEventListener('click' , (e)=> {
    console.log('이벤트가 등록된 객체' , this); //window
})


function Person ( name ) {
    this.name = name;
    console.log('this' , this)
}

const person = new Person('Hwigyoung'); 