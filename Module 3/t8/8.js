'use strict';

document.addEventListener("DOMContentLoaded", function() {

    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operation = document.getElementById('operation');
    const calculateBtn = document.getElementById('start');
    const resultP = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultP.textContent = 'Please enter valid numbers';
            return;
        }

        let result;

        switch(operation.value) {
            case 'add':
                result = num1 + num2;
                break;
            case 'sub':
                result = num1 - num2;
                break;
            case 'multi':
                result = num1 * num2;
                break;
            case 'div':
                result = num2 === 0 ? 'Error: Division by zero' : num1 / num2;
                break;
            default:
                result = 'Invalid operation';
        }

        resultP.textContent = result;
    });

});
