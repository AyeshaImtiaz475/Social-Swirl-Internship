//declare the button & heading 
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;
//onclick funcionality 
//this button show the number of count (for hpw many time i click on button)
// buttonA.onclick=() => {
//     buttonA.textContent = "Try again!"; //it show the content on the button
//     headingA.textContent = `${count} clicks so far`;
//     // `` template literals
//     count = count + 1;
// };

//if we perform this function without variable then it end up with error 

//Declaring a variables
let myName; 
let myAge;
//Initializing a variable
myName = "Ayesha";
myAge = 37;
function logName()
{
    console.log("My name is " + myName);
}
//calling the function
logName();
//var myName; SyntaxError: Identifier 'myName' has already been declared 
//this error came because hositing doesn't work in var when we convert let into var

//hosting: When a variable can appear to be used before it's declared. This behaviour is called hositing

function doSomething()
{
    console.log(bar);  //undefined
    var bar = 111; //variable declaration and initilization
    console.log(bar);   //111
}

function dosomething()
{
    var hoist;             //variable declaration undefined
    console.log(hoist);
    hoist = 111;            //initilization  111
    console.log(hoist);
    
}

//var redeclarations
var a = 1;
var a = 2;
console.log(a); //2
var a;
console.log(a); //2 

//scope of variable
var x= 0;
console.log(typeof z); //undefined becuase z was not declare

function myfun()
{
   var y = 2;
   console.log(x,y); //y was declare inside the function scope
   //x=0, y=2

   function myfun2()
   {
    p=3;
    q=4;
    r=5;
    
    myfun2(); 
    console.log(p,q,r); //myfun2() was not declare
   }

   myfun(); 
   console.log(p,q);
   console.log(typeof q); 
    // calling the function multiple time through an error
}

//it is decommended to use let then var 
//we can't use the var, function, let and for for the variable name 

// age, myAge, initialColor, finaloutputValue, audio1, audio2

//daatypes in javascript
//integer
let myCurrentAge = 17;
console.log(myCurrentAge);

//strings
let dolphinGoodbye = "So long and thanks for all the fish";
console.log(dolphinGoodbye);

//boolean either true & false
let iAmLive = true;
console.log(iAmLive);

let test = 6< 3;
console.log(true);

//float
let mydecimal = 3.456;
console.log(mydecimal);

//Arrays 
let myNameArray = ['chris', 'Bob','Jim','sara'];
let myNumberArray = [10,15,40];
myNameArray[0]; //oth index 


console.log(myNameArray);
console.log(myNameArray[2]);

console.log(myNameArray);
console.log(myNumberArray[0]);

//objects
let dog = {
    dogName: "Spot",
    breed: "Dalmatian"
};
console.log("Name of dog is :" + dog.dogName + " & breed of dog is :" + dog.breed );

//Dynamix typing 
//Javascript is dynamically typed language we don't need to specify the data type of variable

let myNumber = "600";
console.log(typeof myNumber);
myNumber = 500;
console.log(typeof myNumber);

//Test your skill
//q1. 
let myNewName;
myNewName = "ayesha_imtiaz";
let myNewAge =21;

myNewName = "robina";
console.log("My new Name is :" + myNewName);

myNewAge = 23;
console.log("My new Age is :" + myNewAge);

//Basic Math in JS - numbers and operators 
//decimal types -> integers, floating point numbers , binary, octial, hexadecimal

//we cannot redeclare the variable with const 
const myInt = 5;
const myFloat = 88.99;
console.log("My Integer value is :" + myInt);
console.log("Myfloat value is: " + myFloat);

//tyeof tell us the datatypes 
console.log(typeof myInt);
console.log(typeof myFloat);
//both datatype are number


const lotsOfDecimal = 1.76543289765;
console.log(lotsOfDecimal);
const twoDecimalsPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalsPlaces);

//arithmetic operators
const num1 = 10;
const num2 = 50;
 let result1 = 9 * num1;
console.log(result1);
 result1 = num1 **3;
console.log(result1);
 result1 = num2/num1;
console.log(result1);
console.log(num2);

//increment + decrement operators

let MyNumber=4;
MyNumber ++;
console.log(MyNumber);
MyNumber --;
console.log(MyNumber);


//machine start & stop logic 
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}

//test your skills 
//q1. 
const Num1 = 9;
const Num2 = 5;
const Num3 = 9.2;
const Num4 = 2;

let answer1 = Num1 + Num2;
console.log("Result 1 is :" + answer1);
let answer2 = Num3 - Num4;
console.log("Result 2 is :" + answer2);

let finalResult = answer1 * answer2;
console.log("Final result is :" + finalResult );
//q2. part 
finalResult = finalResult.toFixed(2);
let evenOddResult;

if(finalResult % 2 == 0)
{
        evenOddResult = true;
        console.log("Even number is:" + finalResult);
}
else{
    evenOddResult = false;
    console.log("Odd number is :" + finalResult);
}

//q3.
const eleWeight = 1000;
const mouseWeight = 2;

const weightComparsion = eleWeight > mouseWeight;
const weightTest = weightComparsion ? 'True - elephants weight is greater than mouse weight' : 'Fale - Mouse weight is greater than elephant weight';

console.log("Weight test result :" +weightTest);

const onstrictHeight = 2;
const duckHeight = 0.3;
const heightComparsion = onstrictHeight > duckHeight;
const heighTest = heightComparsion ? 'true - onstrict height is greater than duck height' : 'False - duck height is greater than onstrict';
console.log("HeighTest result" +heighTest);

//match passowrd 
const pwd1 = 'stromboli';
const pwd2 = 'stromBoli';
const matchComparsion = pwd1 == pwd2;
const matchTest = matchComparsion ? 'true- the password match': 'False- passowrd doesnot match';
console.log("Match test result :" + matchTest);

