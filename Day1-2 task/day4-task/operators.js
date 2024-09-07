//INTRO TO OPERATORS
//Arithemetic opaerators 

//QUIZ:WHAT ARITHMATIC OPERATORS ARE VAIALBLE IN JS?
//*, +, -, /, %, increment, decrement, exponential 

//If i Declared let num=1, how would I increment it? 
//num = num + 1, num +=1, num++; ++num;

//ASSIGNMNET OPERATOR

let programmingLanaguges = "Javascript";
//QUIZ: What does the single equal sign stand for in javascript?
//Assignment operator

//COMPARISON OPERATORS
let num1 = 14;
let num2 = 10;
let isNumlessthan = num1 < num2;
console.log(isNumlessthan);

//Quiz: What are the compariosn operators in JS?
//it compare two varaibles data types(<,>,<=,>=) and values to return true /false


//EQUALITY OPERATOR
let a = 2;
let b= '2';
console.log(a == b); //loose equality 
//truthy

console.log(a === b);  //strick equality 

//QUIZ: what is the assignmnet operator?
//Assignmnet operator use single equal sign to assign the value

//What is loose equality?
//in loose equality we check the == varaibles values only '2' == 2

//What is strict equality?
//in strict equality === the javascript check the datatypes + varaibles values also to ceheck the similarity


//Ternay operator 
let age = 16;
const canDrive = age >=16 ? true: false;
console.log(canDrive);

let points= 110;
const customerType = points > 100 ? 'gold':'silver';
console.log(customerType);

//QUIZ: What is the ternary operator?
//conditional operator to write the simple code and to compare the value

//LOGICAL OPERATOR
// ||(or operator)
// && (and operator)
// ! (not operator)
// ?? (null coalescing)

// console.log(true || true); //one of the operand is true then true
// console.log(false || true); //true
// console.log(true || false);  //true
// console.log(false || false); //false

let hasReservation = true;
let acceptingWalkIns = false;

const hasAccessToTable = hasReservation || acceptingWalkIns;
console.log(hasAccessToTable);

console.log(true && true);  //true 
console.log(false && true);  //false
console.log(true && false);   //false
console.log(false && false);   //false

//!
//console.log(!true);

// let isClosedOnSunday = true;
// const isRestaurantOpen = !isClosedOnSunday;
// console.log(isRestaurantOpen);
console.log("hello");

let last = null;
const result = (last !== null && last !== undefined) ? last : false;
console.log(result);

//QUIZ: What are logical operator?
//The operator which are used to do the comparison on the bases on some conditions to check either its true & false

//What are the four main logical operator in js?
// ||(or operator)
// && (and operator)
// ! (not operator)
// ?? (null coalescing)

//What is this operator || ? 
//it is called logical  OR operator and among the 2 conditions if any one condition is true then the condition is true
//it is also known as pipe operator 

//what is this operator &&?
//it is called logically AND operator and it compare two operand if the two operands (conditional statments) are true 
//then only it return true  otherwise false

//what is this operator !?
//it is called not operator. it opposite the condition if it is true then false if false then true

//What is the operator ?? ?
//it is called null coalescing operator it is used to assign the default value in the variable used in front of ?

//LOGICAL OPERATOR WITH NON-BOOLEAN 
let userChosenColor = 'blue';
let defultColor = '';
const currentWebsiteColor = userChosenColor || defultColor;
console.log(currentWebsiteColor);

//QUIZ: What does falsy mean in JavaScript?
//when we used the logical operator in non-boolean value then js convert the boolean value into boolean value and execute the code on the bases of falsy and truy

//what are the falsy values?
//NAN , null, 0, '', false, undefined  

//How do logical operators function when applied to non-boolean values?
//logical operator are evaluated from left to right if the value is truthy then js assign the value in the last variable

//consider the example?
//let name = 'test';
//let result = false || name;
//answer: 'test'

//OPERATOR PRECEDENCE
let n = 5 + 5 * 4; //5 * 4 = 20 + 5 = 25 
console.log(n);

let another = 5 + (5 *4);
console.log(another);