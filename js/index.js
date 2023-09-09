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
    '<button id="buy-button">Купити</button>';
  document.getElementById('product-details').appendChild(productInfo);
  const buyButton = document.getElementById('buy-button');
  buyButton.addEventListener('click', function () {
    showOrderForm(productItems);
  });
}

function showOrderForm(product) {
  console.log(product);
  const orderForm = document.getElementById('order-form');
  orderForm.style.display = 'block';
  
  const form = document.getElementById('order-details-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const customerName = document.getElementById('customer-name').value;
    const city = document.getElementById('city').value;
    const novaPoshta = document.getElementById('nova-poshta').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;
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
    console.log(orderInfo);
    displayOrderInfo(orderInfo);
    orderForm.style.display = 'none';
    document.getElementById('product-list').innerHTML = '';
    document.getElementById('product-details').innerHTML = '';
  })
}

function displayOrderInfo(orderInfo) {
  const orderDetails = document.createElement('div');
  const store = document.querySelector('.store');
  
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
  store.appendChild(orderDetails);
}