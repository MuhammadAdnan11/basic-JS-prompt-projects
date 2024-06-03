const bankBalance=parseInt(prompt("Enter your Bank Balance: "))
const withDrawAmount=parseInt(prompt("Enter the amount to be withdraw"))

if(bankBalance>=withDrawAmount)
    {
        alert("You can withdraw the amount from bank")
    }
    else{
        alert("Your bank balance is less than withdraw amount")
    }