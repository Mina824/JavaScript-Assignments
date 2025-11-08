const name = prompt("What is your name?");


if (name && name.trim() !== "") {

  const number = Math.floor(Math.random() * 4) + 1;

  let house;
  
  if (number === 1) {
    house = "Gryffindor";
  } else if (number === 2) {
    house = "Slytherin";
  } else if (number === 3) {
    house = "Hufflepuff";
  } else {
    house = "Ravenclaw";
  }

  document.querySelector("#result").textContent = `${name}, you are ${house}!`;
} else {
  document.querySelector("#result").textContent = "You must enter your name to be sorted!";
}