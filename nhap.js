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
        cart[name] = {price: price, quantity: 1, image: image};
    }
    saveCart();
    displayCart();
}

function increaseQuantity(name) {
    cart[name].quantity += 1;
    saveCart();
    displayCart();
}

function decreaseQuantity(name) {
    if (cart[name].quantity > 1) {
        cart[name].quantity -= 1;
    } else {
        delete cart[name];
    }
    saveCart();
    displayCart();
}

// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Function to load the cart from localStorage
function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};
    displayCart();
}

// Function to display the cart
function displayCart() {
    var cartItems = document.getElementById('cart-items');
    var totalPrice = 0;
    cartItems.innerHTML = '';
    for (var name in cart) {
        var li = document.createElement('li');
        li.innerHTML = '<img src=\"' + cart[name].image + '\" alt=\"' + name + '\" width=\"50\" height=\"50\">' +
            name + ' - $' + cart[name].price  +
            ' <button onclick=\"increaseQuantity(\'' + name + '\')\">+</button> ' +cart[name].quantity +
            ' <button onclick=\"decreaseQuantity(\'' + name + '\')\">-</button>';
        cartItems.appendChild(li);
        totalPrice += cart[name].price * cart[name].quantity;
    }
    document.getElementById('total-price').innerText = totalPrice;
}

function checkout() {
    alert('Checkout - Total: ' + document.getElementById('total-price').innerText);
}

document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('shopping-cart').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none'; 
});

// Load the cart from localStorage when the document is ready
document.addEventListener('DOMContentLoaded', loadCart);
