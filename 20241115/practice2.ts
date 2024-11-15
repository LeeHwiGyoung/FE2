function add(x : number, y : number) {
    return x + y
}

function printMessage(message : string) : void {
    console.log(message)
}

function add(num1 : number) {
    return num1;
}

function add(num1 : number, num2 : number) {
    return num1 + num2
}

function add(num1 : number,  num2 : number ,num3 : number) {
    return num1 + num2 + num3
}

type product = {
    name : string,
    price : number,
}

function filterAndSortedPrice (products : product[] , minPrice : number = 0) : string[] {
    const filteredProducts = products.filter((product)=>(product.price >= minPrice)).sort((a, b) => a.name.localeCompare(b.name)).map(product => product.name);
    return filteredProducts;
}


/* type User  = {
    readonly id : number,
    name : string,
    email ?: string
} */

type Product = {
    name : string,
    price : number
}

type Discount  = {
    discountRate : number,
}

type DiscountedProduct = Product & Discount;



