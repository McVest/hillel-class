/*
* Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
* */
const program = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const writeArray = (item, messages,) => {
    document.write(`<h3>${messages}</h3>`);
    document.write('<ul>');
    document.write(`<li>${item}</li>`);
    document.write('</ul>');
  }

  const generateKey = (length, element) => {
    let key = '';

    for (let i = 0; i < length; i++)
      key += element[Math.floor(Math.random() * element.length)];

    return key;
  }

  const key = generateKey(16, characters);
  writeArray(key, `Рядок випадкових символів із набору "${characters}"`)
}
program();
