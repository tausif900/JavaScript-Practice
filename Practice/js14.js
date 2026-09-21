const products = [
  {
    name: "Oil Filter",
    price: 2500,
    discount: 10,
    cgst: 9,
    sgst: 9,
  },
  {
    name: "Air Filter",
    price: 1800,
    discount: 5,
    cgst: 9,
    sgst: 9,
  },
  {
    name: "Compressor Part",
    price: 3200,
    discount: 15,
    cgst: 9,
    sgst: 9,
  },
];

const result = products.map((p) => {
  const discountAmount = (p.price * p.discount) / 100;
  const cgstAmount = (p.price * p.cgst) / 100;
  const sgstAmount = (p.price * p.sgst) / 100;
  const totalAmount = p.price - discountAmount + cgstAmount + sgstAmount;
  return { ...p, totalAmount };
});

console.log(result);

const subTotal = products.reduce((total, p) => {
  return total + p.price;
}, 0);
console.log(subTotal);

const gst = products.reduce((total, p) => {
  return total + (p.price * p.cgst) / 100 + (p.price * p.sgst) / 100;
}, 0);

console.log(gst);

const discountAmount = products.reduce((total, p) => {
  return total + (p.price * p.discount) / 100;
}, 0);
console.log(discountAmount);

const amountAfterDiscount = subTotal - discountAmount;
console.log(amountAfterDiscount);

const grandTotal = amountAfterDiscount + gst;
console.log(grandTotal);
