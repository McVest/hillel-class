/*
* Створити масив, довжину та елементи якого задає користувач.
* Відсортувати масив за зростанням.
* Видалити елементи з масиву з 2 по 4 (включно!).
* У міру змін виводити вміст масиву на сторінку.
* */
const program = () => {
  const array = [];
  const writeArray = (messages) => {
    document.write(`<h3>${messages}</h3>`);
    document.write('<ul>');
      document.write(`<li>${array.join(', ')}</li>`);
    document.write('</ul>');
  }

  const pushArray = (length) => {
    for (let i = 0; i < length; i++) {
      const element = parseInt(prompt(`Введіть елемент масиву на позиції ${i}:`), 10);
      array.push(element);
    }
  }

  const sortArray = () => {
    array.sort(function (a, b) {
      return a - b;
    });
  }
  const removeElementArray = ()=>{
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
