const cartLink = document.getElementById('cart-link');
let cart = [];

// Function to update cart quantity in the navbar
function updateCartCount() {
  cartLink.textContent = `Cart (${cart.length})`;
}

// Simulate adding products to cart (replace with actual product data)
const productData = [
  { id: 1, name: "T-Shirt", price: 20, image: "tshirt.jpeg" },
  { id: 2, name: "Jeans", price: 50, image: "pant.jpeg" },
  { id: 3, name: "Jeans", price: 150, image: "p.jpeg" },
  { id: 4, name: "Jeans", price: 100, image: "tt.jpeg" },
  { id: 5, name: "Jeans", price: 50, image: "ti.jpeg" },
  { id: 6, name: "Jeans", price: 10, image: "pt.jpeg" },
  { id: 7, name: "Jeans", price: 50, image: "pi.jpeg" },
  { id: 7, name: "Jeans", price: 150, image: "ot.jpeg" },
  { id: 7, name: "Jeans", price: 250, image: "ll.jpeg" },
  { id: 7, name: "Jeans", price: 250, image: "oo.jpeg" },
 

];

productData.forEach(product => {
  const productContainer = document.createElement('div');
  productContainer.classList.add('product');
  productContainer.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h4>${product.name}</h4>
    <p>$${product.price}</p>
    <button data-product-id="${product.id}">Add to Cart</button>
  `;

  productContainer.querySelector('button').addEventListener('click', () => {
    const productId = parseInt(event.target.dataset.productId);
    cart.push(productId);
    updateCartCount();
  });

  document.querySelector('.products').appendChild(productContainer);
});
