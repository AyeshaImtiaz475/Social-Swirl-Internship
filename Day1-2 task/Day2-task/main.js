//alert("Hello world!");

//Javasript is case sensitive 
//Contain many standards that end with semicolon
//not sensitive for line breaks & white spaces 
//Javascript run from top to bottom 

//Second alert
/*
alert("HELLO WORLD!!");
*/

//JS Variables 
// var myVariableShaun;
// myVariableShaun = 10;
// console.log("Value :" + myVariableShaun);

// var myVar2 = "hello Duniya";
// myVar2 = "hELLO wORLD";
// myVar2 = "hello again";
// console.log(myVar2);

// var customerAge = 32;
// customerAge = 42;
// console.log("Customer age is:" + customerAge );

//JS is weakly type language 
//Operators 
// =, +, -, /, *

// var myVar = 5;
// myVar + 10;
// console.log(myVar);
// myVar = 25;
// console.log(myVar);
// myVar =myVar - 10;
// console.log(myVar);
// myVar = myVar * 10;
// console.log(myVar);
// myVar = myVar / 10;
// console.log(myVar);


//we can't multiple the number with string 

//logging on console
// var myVar3 = "ayesha"
// document.write(myVar3);
// console.log(myVar3);

// console.log(20 * 5);
// console.log(100 + 7);


// //Booleans 
// var ilikeMeat = true;
// console.log(ilikeMeat);

// var num1 = 7;
// var num2 = 9;
// console.log(7> 9);
// console.log(9 < 7);
// console.log(9 == 7);

//conditional statments 
// var youLikeMeat = true;
// if(youLikeMeat)
// {
//     document.write("Here is the meaty menu...");
// }

// var myNum = 10;
// if(myNum > 10)
// {
//     document.write("myNum is greater than 10");
// }

// var mynum = 8;
// if(mynum == 10)
// {
//     document.write("mynum is equal to 10");
// }
// else{
//     document.write("myNum is not equal to 10");
// }

//else-if statments
// var myAge = 69;
// if(myAge > 30){
//     document.write("you are over 30!!");
// }
// else if(myAge > 20)
// {
//   document.write("you are over 20!");    
// }
//  else if(myAge > 10)
//  {
//     document.write("you are not over 10");
//  }

 //Comparison operators
//  let x = 5;
//  if(x > 6)
//  {
//     console.log("X is greater than 5");
//  }
//  else{
//     console.log("x is less than an 5 ");
//  }

//  if( x === 6)
//  {
//     console.log("x is equal to 6");
//  }
//  else{
//     console.log("x is not equal to 6");
//  }

//  if( x !== 5)
//  {
//     console.log("Yes");
//  }
//  else{
//     console.log("No");
//  }

 //logical operators
 
 var myAge = 15;
 if(myAge >=18 && myAge <= 30) //AND operator (both statments should be true)
 {
    document.write("You can come, to movie");
 }
 else{
    document.write("You can't join");
 }

 myCurrAge = 25;
 if(myCurrAge < 18 || myCurrAge > 30 || myCurrAge === 25) //(||) All operators one condition should be true
 {
    document.write("You are active and energtic");
 }
 else{
    document.write("You are not energtic ");
 }

var links = document.getElementsByTagName("a");
for(i=1; i<links.length; i++)
{
   console.log("this is link number" + i);
}
console.log("all links now stopped");


