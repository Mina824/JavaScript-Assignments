'use strict';

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollSix() {
    const list = document.getElementById("rollList");
    list.innerHTML = "";

    let roll = 0;

    while (roll !== 6) {
        roll = rollDice();

        const li = document.createElement("li");
        li.textContent = roll;
        list.appendChild(li);
    }
}
