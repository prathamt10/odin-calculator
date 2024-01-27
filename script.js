let num1 = '';
let num2 = '';
let operator = '';

const cur_number_screen = document.querySelector('.cur-number');
const last_number_screen = document.querySelector('.last-number');
const clear_button = document.querySelector('.clear');
const delete_button = document.querySelector('.delete');
const number_buttons = document.querySelectorAll('.number');
const decimal_button = document.querySelector('.decimal');
const operator_buttons = document.querySelectorAll('.operator');
const equals_button = document.querySelector('.equals');

function add() {
    return parseFloat(num1) + parseFloat(num2);
}

function subtract() {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply() {
    return parseFloat(num1) * parseFloat(num2);
}

function divide() {
    return parseFloat(num1) / parseFloat(num2);
}

function operate() {
    if (num1 != '' && num2 == '') {
        return num1;
    }
    let res = '';
    if (num1 != '' && num2 != '') {
        switch (operator) {
            case '+':
                res = add();
                break;
                
            case '-':
                res = subtract();
                break;

            case 'x':
                res = multiply();
                break;
                
            case '/':
                res = divide();
                break;
        
            default:
                break;
        }
    }
    return res;
    
}

function addNumber(num) {
    if (operator == '') {
        num1 += num;
        cur_number_screen.textContent = num1;
    } else {
        num2 += num;
        last_number_screen.textContent = `${num1} ${operator}`;
        cur_number_screen.textContent = num2;
    }
}

operator_buttons.forEach((operator_button) => {
    operator_button.addEventListener('click', (e) => {
        operator = e.target.textContent;
        last_number_screen.textContent = `${num1} ${operator}`;
    });
});

equals_button.addEventListener('click', () => {
    last_number_screen.textContent = `${num1} ${operator} ${num2} =`;
    const res = operate();
    cur_number_screen.textContent = res;
    num1 = res;
    num2 = '';
    operator = '';
});

number_buttons.forEach((number_button) => {
    number_button.addEventListener('click', (e) => {
        addNumber(e.target.textContent);
    });
});

clear_button.addEventListener('click', () => {
    cur_number_screen.textContent = '';
    last_number_screen.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
});

delete_button.addEventListener('click', () => {
    cur_number_screen.textContent = cur_number_screen.textContent.slice(0, -1);
    if (num2 == '') {
        num1 = cur_number_screen.textContent;
    } else {
        num2 = cur_number_screen.textContent;
    }
});