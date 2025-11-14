function start() {
    let numbers = [];
    let input;

    while (true) {
        input = Number(prompt("Enter a number:"));

        if (numbers.includes(input)) {
            alert("This number has already been given! Program stops.");
            break;
        }

        numbers.push(input);
    }


    numbers.sort((a, b) => a - b);

    console.log("Numbers in ascending order:");
    console.log(numbers);
}
