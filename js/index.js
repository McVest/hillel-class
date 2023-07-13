const program = () => {
  const writeArray = (messages) => {
    document.write(`<h3>${messages}</h3>`);
    document.write('<ul>');
    document.write(`<li>${array.join(', ')}</li>`);
    document.write('</ul>');
  }
  const removeElement = (array, item) => {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  const array = [1, 2, 3, 4, 5, 6, 7];
  writeArray('Основний масив');

  removeElement(array, 5);
  writeArray('Масив після видалення "5"');
}
program();
