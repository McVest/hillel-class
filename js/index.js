function generateList(array) {
  const ul = document.createElement('ul');
  
  for (const item of array) {
    const li = document.createElement('li');
    
    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      const textNode = document.createTextNode(item);
      li.appendChild(textNode);
    }
    
    ul.appendChild(li);
  }
  
  return ul;
}

const inputArray = [1, 2, [2.1, 2.2, 2.3], 3, [1.1, 1.2, 1.3], 4];
const result = generateList(inputArray);
document.body.appendChild(result);
