'use strict';
function getNames() {
    let dogs = [];

    for (let i = 0; i < 6; i++) {
        let name = prompt(`Enter dog name ${i + 1}:`);
        dogs.push(name);
    }


    dogs.sort().reverse();


    const list = document.getElementById("dogList");
    list.innerHTML = "";

    dogs.forEach(dog => {
        const li = document.createElement("li");
        li.textContent = dog;
        list.appendChild(li);
    });
}
