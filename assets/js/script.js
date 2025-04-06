const productContainer = document.getElementById('product');
const sidebar = document.querySelector('.sidebar ul');
const sidebarTitle = document.querySelector('.sidebar h2');
const goToCart = document.getElementById('.cart');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const sortSelect = document.getElementById('sort');

let priceArr = JSON.parse(localStorage.getItem('price')) || [];
let counter = 0;


fetch('https://fakestoreapi.com/products/categories')
  .then(res => res.json())
  .then(categories => {
    const categoryElements = categories.map(category => {
      return `<li>${capitalizeFirstLetter(category)}</li>`;
    }).join('');
    sidebar.innerHTML = `<li>All</li>${categoryElements}`; 
  })
  .catch(err => console.error('Error fetching categories:', err));


let allProducts = [];
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    allProducts = products; 
    displayProducts(products); 
  })
  .catch(err => console.error('Error fetching products:', err));


function displayProducts(products) {
  const productElements = products
    .map((product) => {
      return `
        <div class="product-card">
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-price">$${product.price}</p>
          <p class="product-description">${product.description}</p>
          <button class="add-to-cart-btn" onclick="addToCart(${product.price})">Add to Cart</button>
        </div>
      `;
    })
    .join('');
  productContainer.innerHTML = productElements;
}


function addToCart(price) {
  priceArr.push(price); 
  localStorage.setItem('price', JSON.stringify(priceArr)); 
  alert('Product added to cart!');
}
sidebarTitle.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open'); 
});


sidebar.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selectedCategory = e.target.textContent.toLowerCase();
    if (selectedCategory === 'all') {
      displayProducts(allProducts); 
    } else {
      const filteredProducts = allProducts.filter(product => 
        product.category.toLowerCase() === selectedCategory
      );
      displayProducts(filteredProducts);
    }
  }
});


getProductData = (e) => {    
    counter++;
    let inp = Number(e.parentElement.children[2].innerText);
    if(counter > 0){
        goToCart.style.display = 'inline-block';
    }
    priceArr.push(inp);
    COUNTER.innerText = counter;
    let priceStr = JSON.stringify(priceArr);
    localStorage.setItem('price', priceStr);

}

function filterByPrice() {
  const minPrice = parseFloat(minPriceInput.value) || 0;
  const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

  const filteredProducts = allProducts.filter(product => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  displayProducts(filteredProducts);
}

function sortProducts() {
  const sortValue = sortSelect.value;

  let sortedProducts = [...allProducts];

  if (sortValue === 'asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
}

