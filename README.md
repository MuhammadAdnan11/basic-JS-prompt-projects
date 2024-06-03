# Basic Javascript Mini Prompt Projects 
## Follow me for more udpates⭐✅✨💻

#ATM
```

const bankBalance=parseInt(prompt("Enter your Bank Balance: "))
const withDrawAmount=parseInt(prompt("Enter the amount to be withdraw"))

if(bankBalance>=withDrawAmount)
    {
        alert("You can withdraw the amount from bank")
    }
    else{
        alert("Your bank balance is less than withdraw amount")
    }
```

### Write program to show that, if it's cloudy so it's going to rain otherwise not raining . 
```
const badal = true;

if (badal) {
    console.log("It's going to be raining 🌧☔🌂");
} else {
    console.log("It's not going to be raining 🌞🔆⛱");
}
```

### Program to show if having 50 or above money in BRT card so you can go otherwise can't go..
```
const amount=parseInt( prompt('Enter the amount having in your BRT Card..'))
if(amount>50){
   alert("you can go , enjoy")
}
else{
   alert("Sorry! Your amount is insufficient, Plz recharge first...")
}
```

### Program to find if wallet balance is equal or greater than burger price so display that you can buy burger , otherwise can't
```
const burger_price= prompt("Enter the price of Burger?")
const wallet_balance=prompt("Enter the amount in your wallet...")
if(wallet_balance>=burger_price){
    alert("Hurrah! You can buy the burger🍔")
}else{
    alert("Sorry! Your wallet amount is less than burger price...😢")
}
```

### Program to apply discount based on the number of items purchased and calculate the final bill
```
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
```

### Program to find the Number entered is Odd or Even
```
const number=prompt('Enter the number')
if(number%2==0){
    alert(`The number ${number} is an Even number`)
}
else{
    alert(`The number ${number} is an Odd number`)
}

```

### Program to display the total bill after buying fruits
```
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
```
### Program to show if a person enter the traffic light color so it display a message according to traffic lights
```
const traffic_light = prompt("Enter the Traffic Light color: ");

switch(traffic_light.toLowerCase()) {
    case 'red':
        alert("Please Stop:🤚🛑");
        break;
    case 'green':
        alert("You can go💨🚗");
        break;
    case 'yellow':
        alert("Get Ready");
        break;
    default:
        alert("Please Enter correct words");
}
```
