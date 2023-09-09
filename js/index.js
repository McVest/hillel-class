const PRODUCT = [
  { name: 'Пенал', category: 'Категорія 1', price: 300 },
  { name: 'Ручка', category: 'Категорія 1', price: 15 },
  { name: 'Тости', category: 'Категорія 2', price: 24 },
  { name: 'Молоко', category: 'Категорія 2', price: 35 },
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
  productInfo.innerHTML = `
    <p><strong>Назва:</strong> ${productItems.name}</p>
    <p><strong>Категорія:</strong> ${productItems.category}</p>
    <p><strong>Ціна:</strong> ${productItems.price} грн</p>
    <button onclick="showOrderForm('${productItems.name}', '${productItems.category}', ${productItems.price})">Купити</button>`;
  document.getElementById('product-details').appendChild(productInfo);
}

function showOrderForm(productName, productCategory, productPrice) {
  const orderForm = document.getElementById('order-form');
  orderForm.style.display = 'block';
  
  orderForm.querySelector('#customer-name').value = '';
  orderForm.querySelector('#city').selectedIndex = 0;
  orderForm.querySelector('#post-office').value = '';
  orderForm.querySelector('#quantity').value = '';
  orderForm.querySelector('#comment').value = '';
  
  orderForm.dataset.productName = productName;
  orderForm.dataset.productCategory = productCategory;
  orderForm.dataset.productPrice = productPrice;
}

function confirmOrder() {
  const orderForm = document.getElementById('order-form');
  const productName = orderForm.dataset.productName;
  const productCategory = orderForm.dataset.productCategory;
  const productPrice = orderForm.dataset.productPrice;
  const customerName = orderForm.querySelector('#customer-name').value;
  const city = orderForm.querySelector('#city').value;
  const postOffice = orderForm.querySelector('#post-office').value;
  const paymentMethod = document.querySelector('input#payment-cash-on-delivery[name="payment-method"]:checked').value;
  const quantity = orderForm.querySelector('#quantity').value;
  const comment = orderForm.querySelector('#comment').value;
  
  if (customerName && city && postOffice && paymentMethod && quantity) {
    document.getElementById('order-details-content').innerHTML = `
      <p><strong>Назва товару:</strong> ${productName}</p>
      <p><strong>Категорія:</strong> ${productCategory}</p>
      <p><strong>Ціна:</strong> ${productPrice} грн</p>
      <p><strong>ПІБ покупця:</strong> ${customerName}</p>
      <p><strong>Місто:</strong> ${city}</p>
      <p><strong>Склад Нової пошти для надсилання:</strong> ${postOffice}</p>
      <p><strong>Післяплати або оплата банківської картки:</strong> ${paymentMethod}</p>
      <p><strong>Кількість продукції, що купується:</strong> ${quantity}</p>
      <p><strong>Коментар до замовлення:</strong> ${comment}</p>
    `;
    document.getElementById('order-details').style.display = 'block';
    orderForm.style.display = 'none';
  } else {
    alert('Будь ласка, заповніть всі обов\'язкові поля.');
  }
}

