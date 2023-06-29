// 1. Функція для виведення на сторінку в один рядок через кому чисел від 10 до 20.
function printNumbers() {
  let output = "";
  for (let i = 10; i <= 20; i++) {
    output += i + ", ";
  }
  output = output.slice(0, -2);
  document.write(output);
}
// printNumbers();

// 2. Функція для виведення квадратів чисел від 10 до 20.
function printSquares() {
  for (let i = 10; i <= 20; i++) {
    let square = i * i;
    document.write(square + " ");
  }
}
// printSquares();

// 3. Функція для виведення таблиці множення на 7.
function printMultiplicationTable() {
  for (let i = 1; i <= 10; i++) {
    let product = 7 * i;
    document.write("7 x " + i + " = " + product + "<br>");
  }
}
// printMultiplicationTable();

// 4. Функція для знаходження суми всіх цілих чисел від 1 до 15.
function sumIntegers() {
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
    sum += i;
  }
  document.write("Сума: " + sum);
}
// sumIntegers();

// 5. Функція для знаходження добутку усіх цілих чисел від 15 до 35.
function calculateProduct() {
  let product = 1;
  for (let i = 15; i <= 35; i++) {
    product *= i;
  }
  document.write("Добуток: " + BigInt(product));
}
// calculateProduct();

// 6. Функція для знаходження середнього арифметичного всіх цілих чисел від 1 до 500.
function calculateAverage() {
  let sum = 0;
  let count = 1;
  for (; count <= 500; count++) {
    sum += count;
  }
  const average = sum / count;
  document.write( sum);
  document.write("Середнє арифметичне: " + average);
}
// calculateAverage();

// 7. Функція для виведення суми лише парних чисел в діапазоні від 30 до 80.
function sumEvenNumbers() {
  let sum = 0;
  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  document.write("Сума парних чисел: " + sum);
}
// sumEvenNumbers();

// 8. Функція для виведення всі числа в діапазоні від 100 до 200 кратні 3.
function printMultiplesOfThree() {
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      document.write(i + " ");
    }
  }
}
// printMultiplesOfThree();

// 9. Функція для знаходження і виведення на сторінку всіх дільників заданого числа.
function printDivisors(number) {
  document.write("Дільники числа " + number + ": ");
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      document.write(i + " ");
    }
  }
}
// const number1 = parseInt(prompt("Введіть натуральне число:"));
// printDivisors(number1);

// 10. Функція для знаходження кількості парних дільників заданого числа.
function countEvenDivisors(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      count++;
    }
  }
  document.write("Кількість парних дільників: " + count);
}
// const number2 = parseInt(prompt("Введіть натуральне число:"));
// countEvenDivisors(number2);

// 11. Функція для знаходження суми парних дільників заданого числа.
function sumEvenDivisors(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
      sum += i;
    }
  }
  document.write("Сума парних дільників: " + sum);
}
// const number3 = parseInt(prompt("Введіть натуральне число:"));
// sumEvenDivisors(number3);

// 12. Функція для виведення повної таблиці множення від 1 до 10.
function printMultiplicationTableTen() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let product = i * j;
      document.write(i + " x " + j + " = " + product + "<br>");
    }
    document.write("<br>");
  }
}
// printMultiplicationTableTen();

