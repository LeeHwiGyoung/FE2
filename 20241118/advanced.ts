interface Person {
    name: string;
    age: number;
}
const data = '{"name": "Jane", "age": 25}';
const person = JSON.parse(data) as Person;
console.log(person.name, person.age);

interface Car {
    brand: string;
    model: string;
    year: number;
}
 
function getCarProperty(car: Car, property: keyof Car) {
    return car[property];
}
 