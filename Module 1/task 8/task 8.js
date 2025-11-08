'use strict'
const startYear = parseInt(prompt("Enter the start year:"), 10);
const endYear = parseInt(prompt("Enter the end year: "), 10);

let output = "<ul>";

for (let year = startYear; year <= endYear; year++) {

      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        output += `<li>${year}</li>`;
      }
    }

    output += "</ul>";


    document.querySelector("#result").innerHTML = output;