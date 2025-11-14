const numbers = [];


    for (let i = 0; i < 5; i++) {
      const num = Number(prompt(`Enter number ${i + 1}:`));
      numbers.push(num);
    }

    const outputList = document.getElementById("output");


    for (let i = numbers.length - 1; i >= 0; i--) {
      const li = document.createElement("li");
      li.textContent = numbers[i];
      outputList.appendChild(li);
    }