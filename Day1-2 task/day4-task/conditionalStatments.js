//if-else statments 
let priceOfChocolate = 5;
let hasAmountInCash = 1;
const canBuyChocolate = hasAmountInCash >= priceOfChocolate;
console.log(typeof canBuyChocolate);

if(canBuyChocolate)
{
    console.log("Enjoy your purchases");
}
else {
    console.log("Sorry, you do not have enough");
}

let hours = 10;
if(hours >= 17 && hours <= 12)
{
   console.log("serving breakfast");
}
else if(hours > 12 && hours <= 14)
{
   console.log("Serving lunch");
}
else{
    console.log("Serving dinner");
}

//quiz: What is if-else statments?
//it is run the piece of code in the {...} if the condition is true otherwise the other part of code if the condition is false
//using different comparison & logical operator

//SWITCH CASE STATEMENTS 
//it is simple and clean syntax to used to write the conditional stataments on the bases of cases
let job = 'Software developer';
// if(job === 'software Developer'){
//     console.log("Writes code");
// }
// else if(job === 'designer'){
//   console.log("Make user interface good");
// }
// else if(job === 'cloud Engineer')
// {
//     console.log("Manages and deploys cloud resources");
// }
// else{
//     console.log("Works direcly with customers");
// }

switch(job)
{
    case 'Software developer':
        console.log("write code");
    break;
    case 'Designer':
        console.log("Make user interface documents");
    break;
    case 'cloud Engineer':
        console.log("Manages and deploys cloud resources");
    break;
    default:
        console.log("Work directly with customers");
}