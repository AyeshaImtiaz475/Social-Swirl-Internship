//Functions in JS
//Block of code which perform some specific function
console.log("Hello!");

//function Definition
//function functionName() { //do some work }

//functionCall
//functionName();

//function functionName(param1, param2) { //do somthings }

function myFunction()
{
    console.log("Welcome to JS");
    console.log("We are learning JS");
}
myFunction();
myFunction();

function myfun(msg)
{
    //parameter -> input
    console.log(msg);
}
myfun("I love JS"); //argument

//sum of two number
// function Sum(a, b)
// {
//     console.log(a+b);
// }
// Sum(235,5676);

// function multiple(x, y)
// {
//     //local variables -> Block scope
//     result = x * y;
//     return result; 
// }
// let value = multiple(3,5);
// console.log(value);

//Arrow functions
//compact way of writing function 
//const functionName = (param1, param2) => {}

// function addition(a, b)
// {
//     return a + b;
// }
// //Modern JS
// const arrowSum = (a,b) => {
//     console.log(a + b);
// }
// arrowSum(3,4);

// function multiplication(p,q)
// {
//     return p* q;
// }

// const arrowmultiple = (p,q) => {
//     return (p * q);
// }
// let v1 = arrowmultiple(9, 3);
// console.log(v1);

// const printHello = () => {
//     console.log("Hello");
// }
// printHello();

//practice questions
//1.Create a function using the function keyword that takes a string as an 
//argumnet & returns the number of vowels in the string 

// function PrintVowel(str)
// {
//     let count =0;
//     for(const char of str)
//     {
//         if(char == "a" || char == "e" || char == "i" || char == 'o' || char == "u")
//         {
//             count++;
//         }
//     }

//     return count;
// }
// let val =PrintVowel("ayeshaimtiaz");
// console.log(val);

// const PrintVowel = (str)  => {
//     let count =0;
//         for(const char of str)
//         {
//             if(char == "a" || char == "e" || char == "i" || char == 'o' || char == "u")
//             {
//                 count++;
//             }
//         }
    
//         return count;
// }

// let val =PrintVowel("ayeshaimtiaz");
// console.log(val);

// const Printeven= (num1) => {
//     let val ;
//     if(num1 % 2 == 0)
//     {
//         val = num1;
//         console.log("even number" + val);
//     }
//     return val;
// }
// let v2 = Printeven(4);
// console.log(v2);

//forEach Loop in Arrays
//arr.forEach(callBackFunction)
//A callback is a fucntion which pass as an argument 

// let arr = [1,2,3,4,5,6];
// arr.forEach(function printValue(val){
//      console.log(val);
// })

// let cities = ["lahore", "city", "karachi", "quetta"];
// cities.forEach(function PrintCities(v){
//     console.log(v.toUpperCase());
// });

// let names = ["ayesha", "saba", "ali", "ahmed"];
// names.forEach(function printNames(e) {
//     console.log(names);
// })

//practice question
//For a given array of numbers, print the sequences of each value using forEach loop.

// let Square = [8,4,6,12,9, 67, 89];
// Square.forEach(function PrintSquare(p) {

//     console.log("Square values are:" + p*p);
// });

//Some More Array Methods
//Map is used to generate the new array

// let myNums = [67,89,34,56];
// let newArr = myNums.map((val) => {
//     return val*val;
// });

// console.log(newArr);
// let calcSquare = (num) => {
//     console.log(num * num);
// };

//filter
// let arr = [1,2,3,4,5,6,7,8,9];
// let evenArr = arr.filter((val) => {
//     return val%2 == 0;
// });
// console.log(evenArr);

//reduce 
// let arr = [1,2,3,4,5,6,7,8,9];
// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output);

//find the largest element
// let myArr = [5,2,9,10,25];
// const result = myArr.reduce((prev,curr) => {
//       return prev > curr ? prev: curr
// });
// console.log("Largest element :" + result);


//practice questions 
//q1.
let score = [100, 56, 41, 69, 79, 83, 91];
let FindScore = score.filter((ele) => {
    return ele > 90;
});
console.log(FindScore);

//q2.

// let Sum = [7,4,2,5,2,9,11,3,4];
// const Sumresult = Sum.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log("Sum of all number :" + Sumresult);

let n = prompt("enter a number :");
let arr=[];
for(let i=1; i<=n; i++)
{
    arr[i-1] = i;
}
console.log(arr);
let findProduct = arr.reduce((prev, curr) => {
     return prev * curr;
});
console.log(findProduct);



