const PRODUCT = [
  {name: 'Пенал', category: 'Категорія 1', price: 300},
  {name: 'Ручка', category: 'Категорія 1', price: 15},
  {name: 'Тости', category: 'Категорія 2', price: 24},
  {name: 'Молоко', category: 'Категорія 2', price: 35},
];

function showCategory(category) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  document.getElementById('product-details').innerHTML = '';
  const products = getProductsByCategory(category);
  const ulItem = document.createElement('ul');
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = product.name;
    link.addEventListener('click', function (event) {
      event.preventDefault();
      showProductDetails(product);
    });
    listItem.appendChild(link);
    ulItem.appendChild(listItem);
  }
  productList.appendChild(ulItem);
}


function getProductsByCategory(category) {
  return PRODUCT.filter(item => item.category === category);
}

function showProductDetails(productItems) {
  document.getElementById('product-details').innerHTML = '';
  
  const productInfo = document.createElement('div');
  productInfo.innerHTML = '<p>Назва: ' + productItems.name + '</p>' +
    '<p>Категорія: ' + productItems.category + '</p>' +
    '<p>Ціна: ' + productItems.price + ' грн</p>' +
    '<button onclick="buyProduct(\'' + productItems.name + '\')">Купити</button>';
  document.getElementById('product-details').appendChild(productInfo);
}

function buyProduct(productName) {
  alert('Товар ' + productName + ' куплений!');
  document.getElementById('product-list').innerHTML = '';
  document.getElementById('product-details').innerHTML = '';
}