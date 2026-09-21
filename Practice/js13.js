const products = [
  {
    name: "Oil Filter",
    price: 2500,
    discount: 10,
    gst: 18,
  },
  {
    name: "Air Filter",
    price: 1800,
    discount: 5,
    gst: 18,
  },
  {
    name: "Compressor Part",
    price: 3200,
    discount: 15,
    gst: 18,
  },
];

const result = products.map((p) => {
  const discountAmount = (p.price * p.discount) / 100;
  const gstAmount = (p.price * p.gst) / 100;
  const finalAmount = p.price - discountAmount + gstAmount;
  return { ...p, finalAmount };
});

const r = result.filter((r) => {
  return r.finalAmount > 2500;
});

console.log(r);
