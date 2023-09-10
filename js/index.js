const PRODUCT = [
  { name: 'Пенал', category: 'Категорія 1', price: 300 },
  { name: 'Ручка', category: 'Категорія 1', price: 15 },
  { name: 'Тости', category: 'Категорія 2', price: 24 },
  { name: 'Молоко', category: 'Категорія 2', price: 35 },
];

const productList = document.getElementById('product-list');
const productDetails = document.getElementById('product-details');
const orderForm = document.getElementById('order-form');
const orderFormFields = document.getElementById('order-form-fields');

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
  
  const form = document.getElementById('order-form-fields')
  const formData = new FormData(form);
  
  for (const [key, value] of formData.entries()) {
    orderDetails[key] = value;
  }
  const productName = orderForm.dataset.productName;
  const productCategory = orderForm.dataset.productCategory;
  const productPrice = orderForm.dataset.productPrice;
  
  document.getElementById('order-details-content').innerHTML = `
      <p><strong>Назва товару:</strong> ${productName}</p>
      <p><strong>Категорія:</strong> ${productCategory}</p>
      <p><strong>Ціна:</strong> ${productPrice} грн</p>
      <p><strong>ПІБ покупця:</strong> ${orderDetails.name}</p>
      <p><strong>Місто:</strong> ${orderDetails.city}</p>
      <p><strong>Склад Нової пошти для надсилання:</strong> ${orderDetails.post_office}</p>
      <p><strong>Спосіб оплати:</strong> ${orderDetails.payment_method}</p>
      <p><strong>Кількість продукції, що купується:</strong> ${orderDetails.quantity}</p>
      <p><strong>Коментар до замовлення:</strong> ${orderDetails.comment}</p>
    `;
  
  document.getElementById('order-details').style.display = 'block';
  orderForm.style.display = 'none';
  form.reset();
})
