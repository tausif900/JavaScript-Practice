const productContainer = document.querySelector("#productContainer");
const resetBtn = document.querySelector("#resetBtn");
const search = document.querySelector("#searchInput");
const msg = document.querySelector("#message");

let products = [];

// fetch products
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();
    console.log(products);
    renderProducts(products);
  } catch (error) {
    console.log(error);
  }
};

// Call the function
fetchProducts();

// rendering products card function
const renderProducts = (products) => {
  productContainer.innerHTML = "";
  const cards = products.map((p) => {
    return `<div class="product-card">
  <img src="${p.image}" alt="Product Image">

  <h3>${p.title}</h3>

  <p>Price: ₹ ${p.price}</p>

  <p>Category: ${p.category}</p>

  <p>Description: ${p.description}</p>

  <button class="delete-btn">Delete</button>
</div>`;
  });
  productContainer.innerHTML = cards.join(" ");
};

resetBtn.addEventListener("click", () => {
  fetchProducts();
});

// Search Function
search.addEventListener("input", (e) => {
  console.log(e.target.value);
  const searchProducts = products.filter((p) =>
    p.title.toLowerCase().includes(e.target.value.toLowerCase()),
  );
  console.log(searchProducts);
  if (searchProducts.length === 0) {
    productContainer.innerHTML = "";
    msg.innerHTML = `No Products Found`;
  } else {
    msg.innerHTML = "";
    renderProducts(searchProducts);
  }
});
