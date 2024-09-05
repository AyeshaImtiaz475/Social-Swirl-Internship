//  Function is a subpraogram that can be called by the code external or internal
// in the case of recursion to the function. Like the program itself, a dunction is composed of a sequences
//of statments called function body and the parameters passed called the values of that functions
// The function will return the value 


//first class objects 
//In JavaScript, the concept of "first-class functions" means that 
//functions are treated as values, just like other types of data 
//(e.g., numbers, strings, objects). This allows you to manipulate 
//functions in the same ways you would manipulate other values.


//1.Assigning a function to a variable
const foo = () => {
    console.log("foobar");
};
foo();//calling the function 

//2.passing the function as a argument
function sayHello()
{
    //returning a function 

    return() => {
        console.log("hello");
    }
}

function greeting(helloMessage, name)
{
    console.log(helloMessage() + name);
}
//passing 'sayhello' as an argumnet to 'greeting' function
greeting(sayHello, "JavaScript");

//the function that we pass as an argument to another function is called a callback function.
//sayhello() is the callback function

function sayName()
{
    return "ayesha";
}
function helloGreet(myname, naam){
    console.log(myname() + naam);
}
helloGreet(sayName , "hello");

//Passing arguments 
function formatNumber(num)
{
    return num.toFixed(2);
}
formatNumber(2.45432);

//arguments & parameters 
//Arguments are always passed by value and never passed by reference. 
function Sum(addend1, addend2)
{
    let result = addend1 + addend2
    console.log(result);
}
Sum(4,5);

function updateBrand(obj)
{
    obj.brand = "Toyota";
    obj = null;
}

const car = {
    brand: 'Honda',
    model: "Accord",
    year: 1998,
};

console.log(car.brand + " " + car.model + " " + car.year);


//pass object reference to the fucntion
updateBrand(car);
console.log(car.brand);

function Studentinfo(myobj)
{
      myobj.fname = "saba";
      myobj = null;
}
const student = {
    fname: "ayesha",
    lname: "imtiaz",
    degree: "software engineering",
    birthday: 15,
};
console.log("Student info is:" + student.fname + " " + student.lname + " " + student.degree);

Studentinfo(student);
console.log(student.fname);

//function decalaration 
function calcRectArea(width, height)
{
    return width * height;
}
console.log(calcRectArea(5,10));

function a(b)
{
    console.log(b);
}
a(1);

//async function 
function resolveAfter2Seconds()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall()
{
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();

async function foof()
{
    const result1 = await new Promise((resolve) => 
        setTimeout(() => resolve("1")),
    );
    const result2 = await new Promise((resolve) => 
        setTimeout(() => resolve("1")),
    );
};
foof();


//arrow functions
const materials = ['hydrogen', 'helium', 'lithium', 'beryllium'];
console.log(materials.map((material) => material.length));

const fruits = ['apple', 'orange', 'banana', 'graphes'];
console.log(fruits.map((fruit) => fruit.length));

class C {
    a = 1;
    autoBoundMethod = () => {
        console.log(this.a);
    };
}
const c = new C();
C.autoBoundMethod; //1

//call()
function greet()
{
    console.log(this.animal, "typically sleep between", this.sleepDuration);
}
const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
};

greet.call(obj);

//bind()
const module= {
    x: 42,
    getX: function(){
        return this.x;
    },
};

const unboundGetX = module.getX;
console.log(unboundGetX);

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());

//default parameter
function multiply(a, b=1)
{
    return a * b;
}
console.log(multiply(5,2));
console.log(multiply(5));

function test(num =1 )
{
    console.log(typeof num);
}
test();

function Defaultpara(yourname, greeting, message = `${greeting} ${yourname}`)
{
    return [yourname, greeting, message];
}
console.log(Defaultpara("David", "Hi", "Birthday"));
