//? Program to show if having 50 or above money in card so you can go otherwise can't go..
 //! Through Terminal
// const money=60;
// if(money>=50)
//     {
//         console.log("You can go in BRT Bus..🚇🚐")
//     }
//     else{
//         console.log("You can't go")
//     }

///////////////////////////////////////////////////////////////
//!  through Prompt method
const amount=parseInt( prompt('Enter the amount having in your BRT Card..'))
if(amount>50){
   alert("you can go , enjoy")
}
else{
   alert("Sorry! Your amount is insufficient, Plz recharge first...")
}
