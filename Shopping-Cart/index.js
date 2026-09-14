const productsArray = [
  {
    id: 1,
    name: "Laptop",
    price: 65000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 30000,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2500,
    category: "Accessories",
  },
  {
    id: 4,
    name: "T-Shirt",
    price: 999,
    category: "Clothing",
  },
  {
    id: 5,
    name: "Jeans",
    price: 1999,
    category: "Clothing",
  },
  {
    id: 6,
    name: "Watch",
    price: 4500,
    category: "Accessories",
  },
  {
    id: 7,
    name: "Keyboard",
    price: 1800,
    category: "Electronics",
  },
  {
    id: 8,
    name: "Shoes",
    price: 2999,
    category: "Footwear",
  },
  {
    id: 9,
    name: "Backpack",
    price: 1499,
    category: "Accessories",
  },
  {
    id: 10,
    name: "Mouse",
    price: 799,
    category: "Electronics",
  },
];

let cartProducts = [];

const product = document.querySelector("#products");
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const cart = document.querySelector("#cart");

// All Products Rendering through this fuction
const getProducts = (productsArray) => {
  product.innerHTML = "";
  const products = productsArray
    .map((p) => {
      return `   <div class="col-md-6 col-xl-4">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <span class="badge bg-primary mb-2">${p.category}</span>
                  <h5 class="card-title">${p.name}</h5>
                  <h6 class="text-success">₹ ${p.price}</h6>

                  <button class="btn btn-dark w-100 mt-3 add-cart" data-id="${p.id}">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>`;
    })
    .join("");

  product.innerHTML = products;
};

getProducts(productsArray);

// Search Products
search.addEventListener("input", (e) => {
  const searchProducts = productsArray.filter((p) => {
    return p.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  getProducts(searchProducts);
});

// Products based on Category
category.addEventListener("input", (e) => {
  const filterProductsByCategory = productsArray.filter((p) => {
    return p.category == e.target.value;
  });

  if (e.target.value === " ") {
    getProducts(productsArray);
  } else {
    getProducts(filterProductsByCategory);
  }
});

// render Cart Items
const renderCartItems = (cartProducts) => {
  if (cartProducts.length != 0) {
    const cartItems = cartProducts
      .map((cp) => {
        return `<div class="cart-item border-bottom pb-3 mb-3">

    <div class="d-flex justify-content-between align-items-center">

        <div>
            <h6 class="mb-1">${cp.name}</h6>
            <small class="text-muted">₹ ${cp.price} × 1</small>
        </div>

        <button class="btn btn-sm btn-outline-danger">
            Remove
        </button>

    </div>

    <div class="d-flex justify-content-between align-items-center mt-2">

        <div class="btn-group">
            <button class="btn btn-sm btn-outline-secondary">−</button>
            <button class="btn btn-sm btn-light" disabled>1</button>
            <button class="btn btn-sm btn-outline-secondary">+</button>
        </div>

        <strong>₹65,000</strong>

    </div>

</div>`;
      })
      .join("");
    cart.innerHTML = cartItems;
  } else {
    return ` <div class="text-center text-muted py-4">
                <p class="mb-0">Your cart is empty</p>
              </div>`;
  }
};

// Add to cart functionality
product.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    const productId = e.target.dataset.id;
    const productFound = productsArray.find((p) => {
      return p.id == productId;
    });
    cartProducts.push(productFound);
    renderCartItems(cartProducts);
  }
});
