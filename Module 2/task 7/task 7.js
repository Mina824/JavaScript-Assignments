'use strict';

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function startRolling() {
    const sides = Number(prompt("Enter the number of sides on the dice:"));

    if (isNaN(sides) || sides < 2) {
        alert("Please enter a valid number (2 or more).");
        return;
    }

    const list = document.getElementById("rollList");
    list.innerHTML = "";
    let roll = 0;


    while (roll !== sides) {
        roll = rollDice(sides);

        const li = document.createElement("li");
        li.textContent = roll;
        list.appendChild(li);
    }
}
