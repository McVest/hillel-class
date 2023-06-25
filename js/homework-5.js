function printNumbers() {
  let output = "";
  for (let i = 10; i <= 20; i++) {
    output += i + ", ";
  }
  output = output.slice(0, -2); // Видаляємо останню кому
  document.write(output);
}
function printSquares() {
  for (let i = 10; i <= 20; i++) {
    let square = i * i;
    document.write(square + " ");
  }
}
function printMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    let product = 7 * i;
    document.write("7 x " + i + " = " + product + "<br>");
  }
}
function sumIntegers() {
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
    sum += i;
  }
  document.write("Сума: " + sum);
}
function calculateProduct() {
  let product = 1;
  for (let i = 15; i <= 35; i++) {
    product *= i;
  }
  document.write("Добуток: " + product);
}
function calculateAverage() {
  let sum = 0;
  let count = 0;
  for (let i = 1; i <= 500; i++) {
    sum += i;
    count++;
  }
  let average = sum / count;
  document.write("Середнє арифметичне: " + average);
}
function sumEvenNumbers() {
  let sum = 0;
  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  document.write("Сума парних чисел: " + sum);
}
function printMultiplesOfThree() {
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      document.write(i + " ");
    }
  }
}
function printDivisors(number) {
  document.write("Дільники числа " + number + ": ");
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      document.write(i + " ");
    }
  }
}
function countEvenDivisors(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      count++;
    }
  }
  document.write("Кількість парних дільників: " + count);
}
function sumEvenDivisors(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      sum += i;
    }
  }
  document.write("Сума парних дільників: " + sum);
}
function printMultiplicationTableTen() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let product = i * j;
      document.write(i + " x " + j + " = " + product + "<br>");
    }
    document.write("<br>");
  }
}

// Функція для виведення на сторінку в один рядок через кому чисел від 10 до 20.
// printNumbers();

// Функція для виведення квадратів чисел від 10 до 20.
// printSquares();

// Функція для виведення таблиці множення на 7.
// printMultiplicationTable();

// Функція для знаходження суми всіх цілих чисел від 1 до 15.
// sumIntegers();

//Функція для знаходження добутку усіх цілих чисел від 15 до 35.
// calculateProduct();

// Функція для знаходження середнього арифметичного всіх цілих чисел від 1 до 500.
// calculateAverage();

//Функція для виведення суми лише парних чисел в діапазоні від 30 до 80.
// sumEvenNumbers();

//Функція для виведення всіх чисел в діапазоні від 100 до 200 кратних 3.
// printMultiplesOfThree();

//Функція для знаходження і виведення на сторінку всіх дільників заданого числа.
// const number1 = parseInt(prompt("Введіть натуральне число:"));
// printDivisors(number1);

//Функція для знаходження кількості парних дільників заданого числа.
// const number2 = parseInt(prompt("Введіть натуральне число:"));
// countEvenDivisors(number2);

//Функція для знаходження суми парних дільників заданого числа.
// const number3 = parseInt(prompt("Введіть натуральне число:"));
// sumEvenDivisors(number3);

//Функція для виведення повної таблиці множення від 1 до 10.
// printMultiplicationTableTen();

