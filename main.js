function toggleCart() {
    var cart = document.getElementById('shopping-cart');
    if (cart.style.display === 'none') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
    document.querySelector('#shopping-cart').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

var cart = {};

// Function to add products to the cart
function addToCart(name, price, image) {
    if (cart[name]) {
        cart[name].quantity += 1;
    } else {
        cart[name] = { price: price, quantity: 1, image: image };
    }
    saveCart();
    displayCart();
    updateCartIcon();

}

function increaseQuantity(name) {
    cart[name].quantity += 1;
    saveCart();
    displayCart();
    updateCartIcon();

}
function decreaseQuantity(name) {
    if (cart[name].quantity > 1) {
        cart[name].quantity -= 1;
    } else {
        delete cart[name];
    }
    saveCart();
    displayCart();
    updateCartIcon();

}
function deleteItem(name) {
    delete cart[name];
    saveCart();
    displayCart();
    updateCartIcon();

}

function sophay(number) {
    return number.toLocaleString();
}
function displayCart() {
    var cartItems = document.getElementById('cart-items');
    var totalPrice = 0;
    cartItems.innerHTML = '';
    var header = document.createElement('li');
    header.innerHTML = `
          <div><strong>Ảnh</strong></div>
          <div><strong>Tên sản phẩm</strong></div>
          <div><strong>Đơn giá</strong></div>
          <div class="quantity-buttons">
              <strong>Số lượng</strong>
          </div>
          <div><strong>Thành tiền</strong></div>
      `;
    cartItems.appendChild(header);
    for (var name in cart) {
        var li = document.createElement('li');
        li.innerHTML = `   
            <div> <img src="${cart[name].image}" alt="${name}" width="50" height="50"></div>
            <div>  <span>${name}</span></div>
            <div>  <span>${sophay(cart[name].price)}₫</span></div>
            <div class="quantity-buttons">           
                <button onclick="increaseQuantity('${name}')">+</button>
                <div>   <span>${cart[name].quantity}</span> </div>
                <button onclick="decreaseQuantity('${name}')">-</button>
            </div>
            <div>  <span>${sophay(cart[name].price * cart[name].quantity)}₫</span></div>
            <div class="delete-button"> <button onclick="deleteItem('${name}')">Xóa</button> </div>
        `;
        cartItems.appendChild(li);
        totalPrice += cart[name].price * cart[name].quantity;
    }
    document.getElementById('total-price').innerText = sophay(totalPrice) + '₫';
}
document.getElementById('close-cart').addEventListener('click', function () {
    document.getElementById('shopping-cart').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}
// Function to load the cart from localStorage
function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};
    displayCart();
    updateCartIcon();
}
// Load the cart from localStorage when the document is ready
document.addEventListener('DOMContentLoaded', loadCart);

// Hàm hiển thị số lượng sp dc add
function updateCartIcon() {
    var totalQuantity = 0;
    for (var name in cart) {
        totalQuantity += cart[name].quantity;
    }
    document.getElementById('totalQuantity').innerHTML = totalQuantity;
}
function checkout() {
    // Save the cart to localStorage
    saveCart();

    // Redirect to the checkout page
    window.location.href = 'checkout.html';
}
