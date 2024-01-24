const numbers_div = document.querySelector('.numbers');

const decimal_button = document.createElement('button');
decimal_button.textContent = '.';
numbers_div.appendChild(decimal_button);

const zero_button = document.createElement('button');
zero_button.textContent = '0';
numbers_div.appendChild(zero_button);

const equals_button = document.createElement('button');
equals_button.textContent = '=';
numbers_div.appendChild(equals_button);

let num = 1;
for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < 3; j++) {
        const num_button = document.createElement('button');
        num_button.textContent = num;
        num++;
        row.appendChild(num_button);
    }
    numbers_div.insertBefore(row, numbers_div.firstChild);
}

const opearations_div = document.querySelector('.operations');

const divide_button = document.createElement('button');
divide_button.textContent = "/";
opearations_div.appendChild(divide_button);

const multiply_button = document.createElement('button');
multiply_button.textContent = "x";
opearations_div.appendChild(multiply_button);

const subtract_button = document.createElement('button');
subtract_button.textContent = "-";
opearations_div.appendChild(subtract_button);

const add_button = document.createElement('button');
add_button.textContent = "+";
opearations_div.appendChild(add_button);

const block_1 = document.querySelector('.block-2');
const block_2 = document.querySelector('.block-2');
const display_div = document.querySelector('.display');

block_1.style.width = block_2.offsetWidth + 'px';
display_div.style.width = (block_2.offsetWidth-4) + 'px';