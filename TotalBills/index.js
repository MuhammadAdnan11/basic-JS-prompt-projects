const fruit1 = prompt('Enter the amount of first fruit: ');
const fruit2 = prompt('Enter the amount of second fruit: ');

// Check if the inputs are valid numbers
if (isNaN(fruit1) || fruit1.trim() === "" || isNaN(fruit2) || fruit2.trim() === "") {
    alert("Please enter valid amounts for both fruits.");
} else {
    const fruit1Amount = parseInt(fruit1);
    const fruit2Amount = parseInt(fruit2);
    const totalBilling = fruit1Amount + fruit2Amount;
    alert(`Your total bill to be paid is: ${totalBilling}`);
}
