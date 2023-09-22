const PRODUCT = [
  { name: 'Пенал', category: 'Категорія 1', price: 300 },
  { name: 'Ручка', category: 'Категорія 1', price: 15 },
  { name: 'Тости', category: 'Категорія 2', price: 24 },
  { name: 'Молоко', category: 'Категорія 2', price: 35 },
];

const productDetails = document.getElementById('product-details');
const productList = document.getElementById('product-list');
const orderForm = document.getElementById('order-form');
const orderFormFields = document.getElementById('order-form-fields');
const orderDetails = document.getElementById('order-details');

let orders = [];

if (localStorage.getItem('orders')) {
  orders = JSON.parse(localStorage.getItem('orders'));
}
function saveOrder(order) {
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function getOrders() {
  return orders;
}

function deleteOrder(index) {
  orders.splice(index, 1);
  localStorage.setItem('orders', JSON.stringify(orders));
  showMyOrders();
}

function showCategory(category) {
  productList.innerHTML = '';
  productDetails.innerHTML = '';
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
  productDetails.innerHTML = '';
  
  const productInfo = document.createElement('div');
  productInfo.innerHTML = `
    <p><strong>Назва:</strong> ${productItems.name}</p>
    <p><strong>Категорія:</strong> ${productItems.category}</p>
    <p><strong>Ціна:</strong> ${productItems.price} грн</p>
    <button onclick="showOrderForm('${productItems.name}', '${productItems.category}', ${productItems.price})">Купити</button>`;
  productDetails.appendChild(productInfo);
}

function showOrderForm(productName, productCategory, productPrice) {
  orderForm.style.display = 'block';
  orderForm.dataset.productName = productName;
  orderForm.dataset.productCategory = productCategory;
  orderForm.dataset.productPrice = productPrice;
}

orderFormFields.addEventListener('submit', function (e) {
  e.preventDefault();
  const orderDetails = {
    name: '',
    city: '',
    post_office: '',
    payment_method: '',
    quantity: '',
    comment: ''
  };
  
  const formData = new FormData(orderFormFields);
  
  for (const [key, value] of formData.entries()) {
    orderDetails[key] = value;
  }
  orderDetails.productName = orderForm.dataset.productName;
  orderDetails.productCategory = orderForm.dataset.productCategory;
  orderDetails.productPrice = orderForm.dataset.productPrice;
  saveOrder(orderDetails);
  orderDetailsContent(orderDetails);
  
  orderForm.style.display = 'none';
  orderFormFields.reset();
})
function showMyOrders() {
  productList.innerHTML = '';
  productDetails.innerHTML = '';
  orderDetails.style.display = 'none';
  
  const myOrders = getOrders();
  const ulItem = document.createElement('ul');
  myOrders.forEach(function (order, index) {
    const listItem = document.createElement('li');
    listItem.innerHTML =
      `<div>
          <a href="#" onclick="showOrderDetails(${index})">${order.productName} - ${order.productPrice} грн</a>
          <button type="button" onclick="deleteOrder(${index})">Видалити замовлення</button>
      </div>`;
    ulItem.appendChild(listItem);
  });
  productList.appendChild(ulItem);
}
function showOrderDetails(index) {
  const order = getOrders()[index];
  console.log(order);
  orderDetailsContent(order);
}

function orderDetailsContent(order){
  const orderDetailsContent = document.getElementById('order-details-content');
  orderDetailsContent.innerHTML = `
      <p><strong>Назва товару:</strong> ${order.productName}</p>
      <p><strong>Категорія:</strong> ${order.productCategory}</p>
      <p><strong>Ціна:</strong> ${order.productPrice} грн</p>
      <p><strong>ПІБ покупця:</strong> ${order.name}</p>
      <p><strong>Місто:</strong> ${order.city}</p>
      <p><strong>Склад Нової пошти для надсилання:</strong> ${order.post_office}</p>
      <p><strong>Спосіб оплати:</strong> ${order.payment_method}</p>
      <p><strong>Кількість продукції, що купується:</strong> ${order.quantity}</p>
      <p><strong>Коментар до замовлення:</strong> ${order.comment}</p>
    `;
  orderDetails.style.display = 'block';
}