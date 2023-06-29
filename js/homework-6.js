// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0.5.
function printNumbersWithStep() {
  let number = 20;
  while (number <= 30) {
    document.write(number + " ");
    number += 0.5;
  }
}
// printNumbersWithStep();

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
function printExchangeRate() {
  let exchangeRate = 27;
  for (let dollars = 10; dollars <= 100; dollars += 10) {
    let uah = dollars * exchangeRate;
    document.write(dollars + " доларів = " + uah + " гривень<br>");
  }
}
// printExchangeRate();

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує число N.
function printSquares(number) {
  for (let i = 1; i <= 100; i++) {
    let square = i * i;
    if (square <= number)
      document.write(i + " ");
  }
}
// const number1 = parseInt(prompt("Введіть ціле число N:"));
// printSquares(number1);

// 4. Дане ціле число. Визначити, чи є воно простим.
function isPrimeNumber(number) {
  if (number <= 1)
    return document.write(`Число ${number} не є простим.`);

  for (let i = 2; i < number; i++) {
    if (number % i === 0)
      return document.write(`Число ${number} не є простим.`);
  }
  return document.write(`Число ${number} є простим.`);
}
// const number2 = parseInt(prompt("Введіть ціле число:"));
// isPrimeNumber(number2);

// 5. Дане деяке число. Визначити, чи можна отримати його шляхом зведення числа 3 у деякий ступінь.
function isNumberCrunch(number) {
  if (number === 1)
    return true;

  let power = 1;
  let result = 3;

  while (result < number) {
    result = Math.pow(3, power);
    power++;
  }

  return result === number;
}
// const number3 = parseInt(prompt("Введіть деяке число:"));
// isNumberCrunch(number3) ?
//   document.write("Число " + number3 + " можна отримати шляхом зведення числа 3 у деякий ступінь.")
//   :
//   document.write("Число " + number3 + " не можна отримати шляхом зведення числа 3 у деякий ступінь.");

