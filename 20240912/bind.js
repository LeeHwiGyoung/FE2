const licat = {
    name : 'licat',
    age : 30,
    greeting(bf1 , bf2) {
        console.log(`Hello ${bf1} and ${bf2}, I'm ${this.name}`);
    }
}

const wade = {
    name : 'wade',
    age : 30,
}

licat.greeting('binky' , 'mura');
licat.greeting.call(wade , 'binky' , 'mura'); //this를 wade로 설정

licat.greeting.apply(wade , ['binky' , 'mura']); //인자의 형태가 다름

console.log('===bind===');

const wadeGreeting = licat.greeting.bind(wade);

wadeGreeting()