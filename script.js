const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const productList = document.getElementById('product-list');
document.getElementById('category-title').innerText = category.toUpperCase();

function displayProducts() {
  productList.innerHTML = '';
  const maxPrice = priceRange.value;
  priceValue.innerText = maxPrice;

  const filtered = products.filter(p => 
    p.category === category && p.price <= maxPrice
  );

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="150">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    productList.appendChild(card);
  });
}

priceRange.addEventListener('input', displayProducts);
window.onload = displayProducts;
card.innerHTML = `
  <img src="${product.image}" alt="${product.name}">
  <h3>${product.name}</h3>
  <p>$${product.price}</p>
  <button class="buy-btn">Buy Now</button>
`;
