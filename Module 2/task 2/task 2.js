'use strict';

function getNames() {
    let count = parseInt(prompt("Enter the number of participants:"));

    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number!");
        return;
    }

    let names = [];

    for (let i = 0; i < count; i++) {
        let name = prompt(`Enter name ${i + 1}:`);
        names.push(name);
    }


    names.sort();


    const output = document.getElementById("output");
    output.innerHTML = "";

    names.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        output.appendChild(li);
    });
}
