const productData = {
  "JACKETS": [
    { "name": "Leather Jacket Brown", "image": "Assets/jacket1.png" },
    { "name": "Leather Jacket Black", "image": "Assets/jacket2.png" },
    { "name": "Biker Jacket", "image": "Assets/jacket3.png" },
    { "name": "Winter Jacket", "image": "Assets/jacket4.png" }
  ],
  "GIFTS": [
    { "name": "Premium Gift Box", "image": "Assets/gift1.png" },
    { "name": "Leather Gift Set", "image": "Assets/gift2.png" },
    { "name": "Corporate Gift", "image": "Assets/gift3.png" },
    { "name": "Luxury Gift Set", "image": "Assets/gift4.png" }
  ],
  "BAGS": [
    { "name": "Office Bag", "image": "Assets/bag1.png" },
    { "name": "Travel Bag", "image": "Assets/bag2.png" },
    { "name": "Leather Handbag", "image": "Assets/bag3.png" },
    { "name": "Casual Bag", "image": "Assets/bag4.png" },
    { "name": "Casual Bag", "image": "Assets/bag5.png" },
    { "name": "Casual Bag", "image": "Assets/bag6.png" },
    { "name": "Casual Bag", "image": "Assets/bag7.png" },
    { "name": "Casual Bag", "image": "Assets/bag8.png" },
    { "name": "Casual Bag", "image": "Assets/bag9.png" }

  ],
  "Armyshoes": [
    { "name": "Office Bag", "image": "Assets/bag1.png" },
    { "name": "Travel Bag", "image": "Assets/bag2.png" },
    { "name": "Leather Handbag", "image": "Assets/bag3.png" },
    { "name": "Casual Bag", "image": "Assets/bag1.png" },
    { "name": "Casual Bag", "image": "Assets/bag3.png" }
  ],
  "Shoes": [
    { "name": "Office Bag", "image": "Assets/shoe1.png" },
    { "name": "Travel Bag", "image": "Assets/shoe2.png" },
    { "name": "Leather Handbag", "image": "Assets/shoe3.png" },
    { "name": "Casual Bag", "image": "Assets/shoe4.png" }
  ]
};

let cart = [];

// Load initial or selected category
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category') || 'JACKETS';
  loadCategory(category);
};

// Load products by category
function loadCategory(category) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';
  productData[category].forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button class="add-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
      </div>`;
  });
}

// Add product to cart (NO ALERT)
function addToCart(productName) {
  cart.push(productName);
  document.getElementById('cart-count').innerText = cart.length;
  showToast(`${productName} added to cart`);
}

// Toast function
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000); // Toast visible for 2 seconds
}


// Open popup and show cart items
function openPopup() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cart.forEach(item => {
    cartList.innerHTML += `<li>${item}</li>`;
  });
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Submit query with cart data
document.getElementById('popup-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    products: cart
  };

  console.log('Sending:', data);

  const response = await fetch('http://localhost:5500/submit-popup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    alert('Query submitted successfully!');
    this.reset();
    cart = [];
    document.getElementById('cart-count').innerText = '0';
    closePopup();
  } else {
    alert('Failed to submit.');
  }
});
