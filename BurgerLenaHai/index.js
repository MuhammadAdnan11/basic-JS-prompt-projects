//** */  Program to find if wallet balance is equal or greater than burger price so display that you can buy
// **    burger , otherwise can't

//! Terminal Method
// const burger_price=250;
// const wallet_balance=200;
// if(wallet_balance>=burger_price){
//     console.log("Hurrah! You can buy the Burger🍔")
// }else{
//     console.log("Sorry! You can't buy the burger..😢")
// }

//! Now through Prompt

const burger_price= prompt("Enter the price of Burger?")
const wallet_balance=prompt("Enter the amount in your wallet...")
if(wallet_balance>=burger_price){
    alert("Hurrah! You can buy the burger🍔")
}else{
    alert("Sorry! Your wallet amount is less than burger price...😢")
}