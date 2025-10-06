const products = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 100 + i * 10,
  image: `https://via.placeholder.com/200x150?text=Product+${i + 1}`
}));

const cart = [];

function renderProducts() {
  const container = document.getElementById('product-list');
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>৳${p.price}</p>
      <button onclick="addToCart(${p.id})">Add</button>
      <button onclick="removeFromCart(${p.id})">Remove</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function removeFromCart(id) {
  const index = cart.findIndex(p => p.id === id);
  if (index > -1) cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} - ৳${p.price}`;
    list.appendChild(li);
  });
  document.getElementById('total').textContent = cart.reduce((sum, p) => sum + p.price, 0);
}

renderProducts();