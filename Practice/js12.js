const price = 2500;
const discount = 12;
const gst = 18;

const discountAmount = (price * discount) / 100;

const gstAmount = (price * gst) / 100;

const finalAmount = price - discountAmount + gstAmount;

console.log(finalAmount);
