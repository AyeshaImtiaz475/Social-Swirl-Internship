let message = "Hello";
message = "World!";
console.log(message);
//let= varaible value can be changed.

//Quiz: What is a variable? 
//A varaible is container which store some value in it when ever we run the program 
//and want to get the value we call the varaible to get the particular value

//How to declare a variable?
//datatype varaiblename = value_wanttostore
//declare the variable through let keyword 

const fname = "ayesha";
console.log(fname);

//Quiz: What was the purpose of const?
//we used const to assign the value to variable that cannot modified

//What is the difference between a constant and a varaible?
//Constant defined the data cannot be changed and variable assign the data can be changed


//Datatypes:
//Primitive:Simple,fundamental-data(string, number, BigInt, boolean, undefined, null, symbol)
//reference data types 

//1.string
let favouriteFruit = 'strawberries';
let favouriteIceCream = "chocolate";
let favouriteProgrammingLanguage = "Javascript";
//number
let numberOfDonouts = 12;
let pi = 3.142;
//BigInt
let veryLargeNumber = 543267891234;
//boolean
letlovesCoding = true;
//undefined
let favouritecolor;
console.log(favouritecolor);
//sybmol
const uniqueKey = Symbol();
//objects
let course = {
   name: 'JavaScript for Begineers',
   hours: 3
};
//inorder to find the datatype of variable we used the typeof

//Quiz: What are the primitive data types in js?
//Primitive data types are simple and fundamental value which contain single value

//What are the 7 primitive dataypes in js?
//string, number, bigint,undefined symbol, null and boolean

//Dynamically typed 

let firstname = "Steven";
console.log(typeof firstname);

firstname = 100;
console.log(firstname);

firstname = true;
console.log(firstname);

//Quiz: what is dynamic typing in javascript?
//variables are not bound to assign to only one datatype


//OBJECTS 
let Course = {
    title: 'Javascript for begineers',
    hours:3
};
//1st approach
console.log(Course);
console.log(Course.title);
console.log(Course.hours);
//2nd approach
console.log(Course['title']);
Course['title'] = 'Javascript 101';
console.log(Course['title']);

//Quiz: What are objects in javascript?
//Objects are fundamental data type which store key value pair (name, place and things)
//it used the {} and defined the key value pairs inside of it

//Are objects a reference type or a primitive data types?
//reference types

//ARRAYS

let productColors = ['blue', 'green'];
console.log(productColors[0]);
console.log(productColors[1]);

productColors[1] = 42;
console.log(productColors[1]);
console.log(typeof productColors);
console.log(productColors.length);

//QUIZ: What are arrays?
//arrays are used to stored the multiple data and defined inside []

//how would you determine the length of an array?
//By using the property called length

//How would you access the first element of an array?
//through index like productColors[0] -> return teh 0th index values











