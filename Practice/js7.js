let products = [];

async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    products = await response.json();

    // Most expensive products
    const expensiveProduct = products.reduce((max, p) => {
      if (p.price > max.price) {
        max = p;
      }
      return max;
    }, products[0]);
    console.log(expensiveProduct);

    // Only electronic category wale products
    const electronicProducts = products.filter((p) => {
      return p.category === "electronics";
    });
    console.log(electronicProducts);

    // Average Price
    const totalPrice = products.reduce((avg, p) => {
      const sum = avg + p.price;
      return sum;
    }, 0);
    const avgPrice = totalPrice / products.length;
    console.log(avgPrice);
    
  } catch (error) {
    console.log(error);
  }
}

getProducts();
