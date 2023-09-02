const PRODUCT = [
  {name: 'Пенал', category: 'Категорія 1', price: 100},
  {name: 'Ручка', category: 'Категорія 1', price: 150},
  {name: 'Тости', category: 'Категорія 2', price: 200},
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
  
  const product = getProductByName(productItems);
  
  const productInfo = document.createElement('div');
  productInfo.innerHTML = '<p>Назва: ' + product.name + '</p>' +
    '<p>Категорія: ' + product.category + '</p>' +
    '<p>Ціна: ' + product.price + ' грн</p>' +
    '<button onclick="buyProduct(\'' + product.name + '\')">Купити</button>';
  document.getElementById('product-details').appendChild(productInfo);
}

function getProductByName(productItems) {
  return {
    name: productItems.name,
    category: productItems.category,
    price: productItems.price
  };
}

function buyProduct(productName) {
  alert('Товар ' + productName + ' куплений!');
  document.getElementById('product-list').innerHTML = '';
  document.getElementById('product-details').innerHTML = '';
}
