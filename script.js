let num1 = '';
let num2 = '';
let operator = '';
let isNumFloat = false;

const cur_number_screen = document.querySelector('.cur-number');
const last_number_screen = document.querySelector('.last-number');
const clear_button = document.querySelector('.clear');
const delete_button = document.querySelector('.delete');
const number_buttons = document.querySelectorAll('.number');
const decimal_button = document.querySelector('.decimal');
const operator_buttons = document.querySelectorAll('.operator');
const equals_button = document.querySelector('.equals');

function add() {
    return (parseFloat(num1) + parseFloat(num2)).toFixed(3);
}

function subtract() {
    return (parseFloat(num1) - parseFloat(num2)).toFixed(3);
}

function multiply() {
    return (parseFloat(num1) * parseFloat(num2)).toFixed(3);
}

function divide() {
    return (parseFloat(num1) / parseFloat(num2)).toFixed(3);
}

function operate() {
    if ((num1 != '' && num2 == '') || (num1 == '' && num2 == '')) {
        return num1;
    }
    let res = '';
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
    return res;
    
}

function addNumber(num) {
    if (num == '.' && isNumFloat) {
        return;
    }
    if (operator == '') {
        num1 += num;
        cur_number_screen.textContent = num1;
    } else {
        num2 += num;
        last_number_screen.textContent = `${num1} ${operator} `;
        cur_number_screen.textContent = num2;
    }
    if (num == '.') {
        isNumFloat = true;
    }
}

operator_buttons.forEach((operator_button) => {
    operator_button.addEventListener('click', (e) => {
        if (num1 != '' && num2 != '') {
            equals_button.click();
        }
        operator = e.target.textContent;
        last_number_screen.textContent = `${num1} ${operator} `;
        isNumFloat = false;
    });
});

equals_button.addEventListener('click', () => {
    if (parseFloat(num2) == 0) {
        alert("C'mon Man");
        return;
    }
    last_number_screen.textContent = `${num1} ${operator} ${num2} = `;
    const res = operate();
    cur_number_screen.textContent = res;
    num1 = res;
    num2 = '';
    operator = '';
    isNumFloat = false;
    if (!Number.isInteger(parseFloat(num1))) {
        isNumFloat = true;
    }
});

number_buttons.forEach((number_button) => {
    number_button.addEventListener('click', (e) => {
        addNumber(e.target.textContent);
    });
});

decimal_button.addEventListener('click', (e) => {
    addNumber(e.target.textContent);
})

clear_button.addEventListener('click', () => {
    cur_number_screen.textContent = '0';
    last_number_screen.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
    isNumFloat = false;
});

delete_button.addEventListener('click', () => {
    if (cur_number_screen.textContent[-1] == '.') {
        isNumFloat = false;
    }
    cur_number_screen.textContent = cur_number_screen.textContent.slice(0, -1);
    if (operator == '') {
        num1 = cur_number_screen.textContent;
    } else {
        num2 = cur_number_screen.textContent;
    }
});