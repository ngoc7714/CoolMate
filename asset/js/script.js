// Mock product database (expanded to 24 products)
const products = {
  1: { id: 1, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product1.jpg" },
  2: { id: 2, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product2.jpg" },
  3: { id: 3, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product3.jpg" },
  4: { id: 4, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product4.jpg" },
  5: { id: 5, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product5.jpg" },
  6: { id: 6, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product6.jpg" },
  7: { id: 7, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product7.jpg" },
  8: { id: 8, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product8.jpg" },
  9: { id: 9, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product9.jpg" },
  10: { id: 10, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product10.jpg" },
  11: { id: 11, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product11.jpg" },
  12: { id: 12, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product12.jpg" },
  13: { id: 13, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product13.jpg" },
  14: { id: 14, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product14.jpg" },
  15: { id: 15, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product15.jpg" },
  16: { id: 16, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product16.jpg" },
  17: { id: 17, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product17.jpg" },
  18: { id: 18, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product18.jpg" },
  19: { id: 19, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product19.jpg" },
  20: { id: 20, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product20.jpg" },
  21: { id: 21, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product21.jpg" },
  22: { id: 22, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product22.jpg" },
  23: { id: 23, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product23.jpg" },
  24: { id: 24, name: "Áo Thun Nam Cotton 220GSM", material: "100% Cotton", price: 159000, originalPrice: 179000, image: "images/product24.jpg" },
};

// Cart storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Update cart count in header
function updateCartCount() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.querySelector('#cart-count');
  if (cartCountElement) {
      cartCountElement.setAttribute('number', cartCount);
  }
}

// Slider functionality
const sliderItems = document.querySelectorAll(".slider-item");
if (sliderItems.length) {
  for (let index = 0; index < sliderItems.length; index++) {
      sliderItems[index].style.left = index * 100 + "%";
  }

  const sliderContainer = document.querySelector(".slider-items");
  const arrowRight = document.querySelector(".ri-arrow-right-line");
  const arrowLeft = document.querySelector(".ri-arrow-left-line");
  let currentIndex = 0;

  if (arrowRight) {
      arrowRight.addEventListener("click", () => {
          if (currentIndex < sliderItems.length - 1) {
              currentIndex++;
              sliderMove(currentIndex);
          }
      });
  }

  if (arrowLeft) {
      arrowLeft.addEventListener("click", () => {
          if (currentIndex > 0) {
              currentIndex--;
              sliderMove(currentIndex);
          }
      });
  }

  function autoSlider() {
      if (currentIndex < sliderItems.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      sliderMove(currentIndex);
  }

  function sliderMove(index) {
      sliderContainer.style.left = -index * 100 + "%";
  }

  setInterval(autoSlider, 3000);
}

// Responsive menu
const menuBar = document.querySelector('.header-bar-icon');
const headerNav = document.querySelector('.header-nav');
if (menuBar && headerNav) {
  menuBar.addEventListener('click', () => {
      headerNav.classList.toggle('active');
  });
}

// Sticky header
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header');
  if (header) {
      if (window.scrollY > 50) {
          header.classList.add('active');
      } else {
          header.classList.remove('active');
      }
  }
});

// Show More functionality
const showMoreButtons = document.querySelectorAll('.show-more-btn');
showMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
      const section = button.getAttribute('data-section');
      const hiddenItems = document.querySelectorAll(`#${section} .hot-products-item.hidden`);
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      button.style.display = 'none'; // Hide button after showing all products
  });
});

// Product detail page
if (window.location.pathname.includes('product.html')) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const product = products[productId];

  if (product) {
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-material').textContent = product.material;
      document.getElementById('product-price').innerHTML = `${product.price.toLocaleString()} đ <span>${product.originalPrice.toLocaleString()}đ</span>`;
      document.getElementById('product-img').src = product.image;
      document.querySelector('.add-to-cart-btn').setAttribute('data-id', product.id);
  }

  // Size selection
  let selectedSize = '';
  const sizeButtons = document.querySelectorAll('.size-btn');
  sizeButtons.forEach(button => {
      button.addEventListener('click', () => {
          sizeButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          selectedSize = button.getAttribute('data-size');
      });
  });

  // Add to cart
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
          if (!selectedSize) {
              alert('Vui lòng chọn kích thước!');
              return;
          }
          const id = addToCartBtn.getAttribute('data-id');
          const existingItem = cart.find(item => item.id === id && item.size === selectedSize);
          if (existingItem) {
              existingItem.quantity += 1;
          } else {
              cart.push({
                  id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  size: selectedSize,
                  quantity: 1
              });
          }
          saveCart();
          alert('Đã thêm vào giỏ hàng!');
      });
  }
}

// Cart page
if (window.location.pathname.includes('cart.html')) {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');

  function renderCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;

      cart.forEach((item, index) => {
          total += item.price * item.quantity;
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="cart-item-info">
                  <p>${item.name}</p>
                  <span>Kích thước: ${item.size}</span>
              </div>
              <div class="cart-item-quantity">
                  <input type="number" value="${item.quantity}" min="1" data-index="${index}">
              </div>
              <div class="cart-item-price">${(item.price * item.quantity).toLocaleString()} đ</div>
              <div class="cart-item-remove">
                  <i class="ri-delete-bin-line" data-index="${index}"></i>
              </div>
          `;
          cartItemsContainer.appendChild(cartItem);
      });

      cartTotalElement.textContent = `${total.toLocaleString()} đ`;

      // Quantity update
      const quantityInputs = document.querySelectorAll('.cart-item-quantity input');
      quantityInputs.forEach(input => {
          input.addEventListener('change', (e) => {
              const index = e.target.getAttribute('data-index');
              const value = parseInt(e.target.value);
              if (value > 0) {
                  cart[index].quantity = value;
                  saveCart();
                  renderCart();
              }
          });
      });

      // REMOVE item
      const removeButtons = document.querySelectorAll('.cart-item-remove i');
      removeButtons.forEach(button => {
          button.addEventListener('click', (e) => {
              const index = e.target.getAttribute('data-index');
              cart.splice(index, 1);
              saveCart();
              renderCart();
          });
      });
  }

  renderCart();
}

// Checkout form
if (window.location.pathname.includes('checkout.html')) {
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
          e.preventDefault();
          if (cart.length === 0) {
              alert('Giỏ hàng trống!');
              return;
          }
          alert('Đơn hàng đã được đặt thành công!');
          cart = [];
          saveCart();
          window.location.href = 'index.html';
      });
  }
}

// Initialize cart count
updateCartCount();