function showCategory(category) {
  document.getElementById('product-list').innerHTML = '';
  document.getElementById('product-details').innerHTML = '';
  const products = getProductsByCategory(category);
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const listItem = document.createElement('li');
    listItem.innerHTML = '<a href="#" onclick="showProductDetails(\'' + product.name + '\')">' + product.name + '</a>';
    document.getElementById('product-list').appendChild(listItem);
  }
}

function getProductsByCategory(category) {
  return [
    {name: 'Товар 1', category: 'Категорія 1', price: 100},
    {name: 'Товар 2', category: 'Категорія 1', price: 150},
    {name: 'Товар 3', category: 'Категорія 2', price: 200},
  ];
}

function showProductDetails(productName) {
  document.getElementById('product-details').innerHTML = '';
  
  const product = getProductByName(productName);
  
  const productInfo = document.createElement('div');
  productInfo.innerHTML = '<p>Назва: ' + product.name + '</p>' +
    '<p>Категорія: ' + product.category + '</p>' +
    '<p>Ціна: ' + product.price + ' грн</p>' +
    '<button onclick="buyProduct(\'' + product.name + '\')">Купити</button>';
  document.getElementById('product-details').appendChild(productInfo);
}

function getProductByName(productName) {
  return {
    name: productName,
    category: 'Категорія 1',
    price: 100
  };
}

function buyProduct(productName) {
  alert('Товар ' + productName + ' куплений!');
  document.getElementById('product-list').innerHTML = '';
  document.getElementById('product-details').innerHTML = '';
}
