/*
* Створити масив, довжину та елементи якого задає користувач.
* Відсортувати масив за зростанням.
* Видалити елементи з масиву з 2 по 4 (включно!).
* У міру змін виводити вміст масиву на сторінку.
* */
const program = () => {
  let array = [];
  const writeArray = (messages) => {
    document.write(`<h3>${messages}</h3>`);
    document.write('<ul>');
    document.write(`<li>${array.join(', ')}</li>`);
    document.write('</ul>');
  }

  const pushArray = (length) => {
    for (let i = 0; i < length; i++)
      array.push(prompt(`Введіть елемент масиву на позиції ${i}:`));
  }

  const sortArray = () => {
    let numbers = [],
      strings = [];
    for (let i = 0; i < array.length; i++)
      isNaN(array[i]) ? strings.push(array[i]) : numbers.push(Number(array[i]));

    strings.sort();
    numbers.sort((a, b) => {
      return a - b
    });
    array = numbers.concat(strings);
  }

  const removeElementArray = () => {
    array.splice(1, 3);
  }

  const lengthArray = parseInt(prompt('Введіть довжину масиву:'), 10);

  pushArray(lengthArray);
  writeArray('Основний масив: ');

  sortArray(array);
  writeArray('Відсортований масив за зростанням: ');

  removeElementArray();
  writeArray('Вміст масиву після видалення елементів з 2 по 4: ');
}

program();
