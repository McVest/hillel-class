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
  const product = getProductByName(productItems);
  
  const productInfo = document.createElement('div');
  productInfo.innerHTML = '<p>Назва: ' + product.name + '</p>' +
    '<p>Категорія: ' + product.category + '</p>' +
    '<p>Ціна: ' + product.price + ' грн</p>' +
    '<button id="buy-button">Купити</button>';
  document.getElementById('product-details').innerHTML = '';
  document.getElementById('product-details').appendChild(productInfo);
  
  const buyButton = document.getElementById('buy-button');
  buyButton.addEventListener('click', function () {
    showOrderForm(product);
  });
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

function showOrderForm(product) {
  const orderForm = document.getElementById('order-form');
  orderForm.style.display = 'block';
  
  const confirmOrderButton = document.getElementById('confirm-order-button');
  confirmOrderButton.addEventListener('click', function () {
    confirmOrder(product);
  });
}
function confirmOrder(product) {
  const customerName = document.getElementById('customer-name').value;
  const city = document.getElementById('city').value;
  const novaPoshta = document.getElementById('nova-poshta').value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked');
  const quantity = document.getElementById('quantity').value;
  const comment = document.getElementById('comment').value;
  
  if (!customerName || !city || !novaPoshta || !paymentMethod || !quantity) {
    alert('Заповніть всі обов’язкові поля перед підтвердженням замовлення.');
    return;
  }
  
  const orderInfo = {
    productName: product.name,
    category: product.category,
    price: product.price,
    customerName: customerName,
    city: city,
    novaPoshta: novaPoshta,
    paymentMethod: paymentMethod.value,
    quantity: quantity,
    comment: comment,
  };
  
  displayOrderInfo(orderInfo);
}
function displayOrderInfo(orderInfo) {
  const orderDetails = document.getElementById('product-details');
  orderDetails.innerHTML = '<h3>Інформація про замовлення</h3>' +
    '<p>Назва товару: ' + orderInfo.productName + '</p>' +
    '<p>Категорія: ' + orderInfo.category + '</p>' +
    '<p>Ціна: ' + orderInfo.price + ' грн</p>' +
    '<p>ПІБ покупця: ' + orderInfo.customerName + '</p>' +
    '<p>Місто: ' + orderInfo.city + '</p>' +
    '<p>Склад Нової пошти: ' + orderInfo.novaPoshta + '</p>' +
    '<p>Спосіб оплати: ' + (orderInfo.paymentMethod === 'cash-on-delivery' ? 'Післяплата' : 'Оплата банківською карткою') + '</p>' +
    '<p>Кількість: ' + orderInfo.quantity + '</p>' +
    '<p>Коментар до замовлення: ' + orderInfo.comment + '</p>';
}
