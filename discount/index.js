//Program to find if a customer buy 10 items so give discount of 20%,
// if customer buy between 5 to 9 items so give discount of 10%, and if less than 5 items so give discount of 0

//! Here just showing to customer the discount percentage

// const itemsPurchased = parseInt(prompt('Enter the number of items purchased: '));
// let discount = 0;

// if (itemsPurchased >= 10) {
//     discount = 20;
// } else if (itemsPurchased >= 5) {
//     discount = 10;
// } else {
//     discount = 0;
// }

// alert(`You purchased ${itemsPurchased} items.`);
//  alert(`You get a discount of ${discount}%.`);

//! Here we will be showing the bill after discount deducted from total bill
// Program to apply discount based on the number of items purchased and calculate the final bill

const itemsPurchased = parseInt(prompt('Enter the number of items purchased: '));
const totalBillingAmount = parseFloat(prompt('Enter the total billing amount: '));
let discount = 0;

if (itemsPurchased >= 10) {
    discount = 20;
} else if (itemsPurchased >= 5) {
    discount = 10;
} else {
    discount = 0;
}

const discountAmount = (totalBillingAmount * discount) / 100;
const finalAmount = totalBillingAmount - discountAmount;

// console.log(`You purchased ${itemsPurchased} items.`);
// console.log(`Your total bill before discount: $${totalBillingAmount.toFixed(2)}`);
// console.log(`You get a discount of ${discount}%.`);
// console.log(`Your discount amount is: $${discountAmount.toFixed(2)}`);
// console.log(`Your total bill after discount: $${finalAmount.toFixed(2)}`);
alert(`You purchased ${itemsPurchased} items.`);
alert(`Your total bill before discount: $${totalBillingAmount.toFixed(2)}`);
alert(`You get a discount of ${discount}%.`);
alert(`Your discount amount is: $${discountAmount.toFixed(2)}`);
alert(`Your total bill after discount: $${finalAmount.toFixed(2)}`);
