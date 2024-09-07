// const person = {
//     name: 'Steven'
// };

// console.log(person);

// person.favoriteFood = 'tacos';
// console.log(person);

// person['favouriteIcecream'] = 'chocolate';
// delete person.favouriteIcecream;

// console.log(person);

// person.eat = function()
// {
//     console.log('start eating');
// }
// person.eat();


//objects are dynamic becuse we can chnage the property & value of objects after initilize 

//THE CONSTRUCTOR PROPERTY

// const person = {
//     name: 'ayesha'
// };
// console.log(person.constructor);

//let obj = new obj{};

//function as objects
// function add(num1, num2)
// {
//     return num1 + num2;
// }
// const n = add;
// console.log(n (2,2));

//console.log(add.length)

// function programmer(name)
// {
//     this.name = name;
//     this.writeCode = function()
//     {
//         console.log("code in js");
//     }
// }
// console.log(programmer.length);
// console.log(programmer.constructor);


const programmer = new Function('name', `
    this.name = name;
    this.writeCode = function()
    {
       console.log("Code in JS");
    }
    `);
const newProgrammer = new programmer('steven');
newProgrammer.writeCode();

//How functions are objects in js?
//functions are presented as objects in js as property & method 

//primitive vaues are pass by copy not by reference


//BUILD IN FUNCTIONS
//Math.round()
//Math.ceil()
//Math.power()
//Math.sqrt(6)
//Math.max()
//Math.min()

//const randomNum = Math.round(Math.random() * (100 -1) + 1);

//String Method
let sentence = "A new sentence.";
const doesIncludeNew = sentence.includes('new');
console.log(doesIncludeNew);
console.log(sentence[3]); //e

const startWithA = sentence.startsWith('A');
console.log(startWithA);

const endWithA = sentence.endsWith('A');
console.log(endWithA);

let updatedSentence = sentence.replace('new', 'short');
console.log(updatedSentence);

trimmedSentences = sentence.trim();
console.log(trimmedSentences);

const wordsInSentences = sentence.split('');
console.log(wordsInSentences);

let email = 'TestEmail@Gmail.com';
let lowerCaseEmail = email.toLocaleLowerCase();
console.log(lowerCaseEmail);

let uppercaseEmail = email.toUpperCase();
console.log(uppercaseEmail);

//.replace()
//trim()
//tolowercase()
//toUppercase
//split()
//endsWith()
//startsWith()


//TEMPLATE LITERALS
//It is the more advance method then string created by back ticks
let firstName = 'Steven';
let lastName = 'Garcia';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

//THE DATE OBJECTS

