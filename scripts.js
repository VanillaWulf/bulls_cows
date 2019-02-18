"use strict";

let effort = 0;

function generateNumber() {
  let numberArray = [];
  while (numberArray.length < 4) {
    let generatedNumber = Math.floor(Math.random() * 10);
    if (!numberArray.includes(generatedNumber.toString())) {
      numberArray.push(generatedNumber.toString());
    }
  }
  return numberArray;
}

function askNumber() {
  return parseInt(prompt("Угадайте число"));
}

function checkCow(bulls, generatedNumbers, userNumbers) {
  let count = 0;
  for (let i = 0; i < generatedNumbers.length; i++) {
    if (generatedNumbers.includes(userNumbers[i])) {
      count++;
    }
  }
  return count;
}

function checkBull(generatedNumbers, userNumbers) {
  let count = 0;
  for (let i = 0; i < generatedNumbers.length; i++) {
    if (generatedNumbers[i] === userNumbers[i]) {
      count++;
    }
  }
  return count;
}

function check(generatedNumbers) {
  let userNumbers = askNumber()
    .toString()
    .split("");
  if (generatedNumbers.join() === userNumbers.join()) {
    alert("Ты угадал. Количество попыток: " + effort);
    return true;
  } else {
    console.log(
      "Количество попыток: " +
        effort +
        ", " +
        "Количество быков: " +
        checkBull(generatedNumbers, userNumbers) +
        ", " +
        "Количество коров: " +
        checkCow(
          checkBull(generatedNumbers, userNumbers),
          generatedNumbers,
          userNumbers
        )
    );
    console.log("Попробуй еще разок!");
    effort++;
    return false;
  }
}

function work() {
  let generatedNumbers = generateNumber();
  console.log("загаданное число", generatedNumbers);
  check(generatedNumbers);
  while (check(generatedNumbers) === false) {
    check(generatedNumbers);
  }
}

work();
