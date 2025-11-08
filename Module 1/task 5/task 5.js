'use strict'
const year = parseInt(prompt("Enter a year:"), 10);

let output = "";

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    output += `${year} is a leap year.<br>`;
  } else {
    output += `${year} is not a leap year.<br>`;
  }

document.querySelector("#result").innerHTML = output;
