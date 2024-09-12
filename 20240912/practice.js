function plus(a = 0 , b = 0 ) {
    return a + b; 
}

function subtract(a = 0 , b= 0 ){
    return a-b;
}

function mul(a = 1, b = 1) {
    return a * b;
}

function divide(a=1, b=1){
    return a / b;
}


function calculate (operator , operand_1, operand_2 ) {
    let result;
    if(operator === "+"){
        result = plus(operand_1, operand_2);
    }
    else if(operator === '-'){
        result = subtract(operand_1 , operand_2);
    }
    else if(operator === '/'){
        result = divide(operand_1, operand_2);
    }
    else if(operator === "*"){
        result = mul(operand_1, operand_2);
    }else{
        return console.log('유효한 연산자를 입력해주세요. 유효 연산자 : + - / *');
    }
    return console.log(`${operand_1} ${operator} ${operand_2} = ${result}`);
}
