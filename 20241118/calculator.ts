let displayValue:string = '0';
let oneNum:string = '';
let twoNum:string = '';
let opertaor:string = '';


const display = document.querySelector('.display') as HTMLInputElement;
const buttons = document.querySelector('.buttons') as HTMLDivElement;

function updateDisplay() : void {
    display.value = displayValue;
}

function inputNumber(num:string) : void { 
    displayValue = num;
    updateDisplay();
}

function inputCalculate(op : string ) : void {
    opertaor = op;
    updateDisplay();
}

function handlerButtonClick(event : Event) : void {
    const target  = event.target as HTMLButtonElement;
    if(target.tagName !== "BUTTON"){
        return;
    }

    const value  = target.textContent!;

    if('0123456789'.includes(value)) {
        inputNumber(value);
    } else ('+-*/'.includes(value)){

    } else {

    }
}

buttons.addEventListener('click' , handlerButtonClick);