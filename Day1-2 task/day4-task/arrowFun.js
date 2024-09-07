const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(9,8));

//remove an arrays
//remove from last
//const numbers = [1,2,3,4,5];
//const lastElement = numbers.pop();
//console.log(`lastElement : ${lastElement}`);
//console.log(numbers);

//remove the first element
//const firstElement = numbers.shift();
//console.log(`firstElement: ${firstElement}`);
//console.log(numbers);

//remove from middle
//const middleElement = numbers.splice();
//console.log(middleElement);
//console.log(numbers);

//empty an array
//const deletedNumbers = numbers.splice(0, numbers.length);
//console.log(`deletedNumbers: ${deletedNumbers}`);

// //combining an array
// const exampleNumbersA = [1,2,3];
// const exampleNumbersB = [4,5,6];
// const combinedArray = exampleNumbersA.concat(exampleNumbersB);
// console.log(combinedArray);

// //spread operator
// let combined = [...exampleNumbersA,  ...exampleNumbersB];
// console.log(combined);

//iteration through array 

// const numbers = [1,2,3,4,5,6];
// for(let number of numbers)
// {
//     console.log(number);
// }

//const numbers = [1,2,3,4,5,6,7,8,9,10];
// const joinednumber = numbers.join(',');
// console.log(joinednumber);

// const courseName = 'javaScript for begineers';

// const part = courseName.toLowerCase().split('');
// console.log(part);

// const parts = courseName.split('');
// console.log(parts);

// const url = parts.join('-');
// console.log(url);

// //sorting array elements
// // let characters = ['c', 'd', 'b', 'a'];
// // characters.sort();
// // console.log(characters);

// //reverse 
// characters.reverse();
// console.log(characters);

// let employees = [
//     {
//         id: 1,
//         name: 'Jim'
//     },
//     {
//         id: 2,
//         name: 'Pim'
//     },
//     {
//         id: 3,
//         name: 'Aim'
//     },
//     {
//         id: 4,
//         name: 'Bim'
//     },
// ]

// employees.sort((a,b) => {
//     const toLowerCaseA = a.name.toLowerCase();
//     const toLowerCaseB = a.name.toLowerCase();

//     if(toLowerCaseA < toLowerCaseB) return -1;
//     if(toLowerCaseA > toLowerCaseB) return 1;
//     return 0;
// });
// console.log(employees);

//every() method 
// const numbers = [2,4,6,8,10];
// const areAllEven = numbers.every(number => {
//     return number % 2 === 0;
// })

// console.log(`areAllEven: ${areAllEven}`);

//some() method 
// const numbers = [1,3,5,7,8,9];
// const hasEvenNumber = numbers.some(number => number % 2 === 0)
// console.log(`hasOneEvenNumber : ${hasEvenNumber}`);

//filter method()

// const numbers = [1,2,3,4,5,6];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(`evennumbers: ${evenNumbers}`);

//mapping an arrays 
const characters = ['a', 'b', 'c', 'd', 'e'];
const upperCaseCharacters = characters.map(char => char.toUpperCase());
console.log(upperCaseCharacters);

const emplooyees = [
    {
        id:1,
        name:"ayesha",
        email:"ayesha@gmail.com"
    },
    {
        id:2,
        name:"saba",
        email:"saba@gmail.com"
    },
    {
        id:3,
        name:"imtiaz",
        email:"imtiaz@gmail.com"
    },
];
const uppdatedEmployees = emplooyees.map(emplooyee => ({
    ...emplooyee,
    email: emplooyee.email.toLowerCase()
}))

console.log(uppdatedEmployees);

//reducer function
const myArray = [1,10,5,14];
const sum = myArray.reduce((accumulator, currentValue) => {
       return accumulator + currentValue;
},0);
console.log(sum);

//function declaration 
// function sayHI()
// {
//     console.log('Hi');
// }
// sayHI();
//It include the function keyword , function name, declaration and invoking function

//function expression
// let sayHi = function()
// {
//     console.log('Hi');
// };
// sayHi();

let greeting = function sayHi()
{
    console.log('Hi');
};
greeting();
//assigning the functions to the varaible 


//what is hoisting?
//function declaration are moved at the starting point to be acess easily.
//Function cannot break even if it has fewer arguments 
//the arguments are assign with default value if our arguments has fewer value then we declare 

//rest operator
//it allow to assign the variable number arguments 
let course = {
    name: 'Js for begineers',
    duration: '3 hours'
};
let newCourse = {
    ...course, //rest operators
    name: 'javascript pro'
};
console.log(newCourse);


function multiply(multiplier, ...numbers)
{
    return numbers.map(number => number * multiplier);
}
console.log(multiply(2,1,2,3,4));


