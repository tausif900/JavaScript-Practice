// Fetched using fetch function
const products = fetch("https://fakestoreapi.com/products").then((response) =>
  response.json().then((products) => console.log(products)),
);
console.log(products);

console.log(
  "-----------------------------------------------------------------",
);

// Fetch using async await
const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response.ok); //true
    if (!response.ok) {
      throw new Error("Something went Wrong");
    }
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};

getProducts();
