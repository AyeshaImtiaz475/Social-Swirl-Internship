//getter & setters in JS
//it is used to create the objects and we used it for form validation, authetication

// const course = {
//     name: 'Js for begineers',
//     duration: '3 hours',
//     get details()
//     {
//         return `${this.name} is ${this.duration}`;
//     },
//     set details(value)
//     {
//         let parts = value.split(' is ');
//         this.name = parts[0];
//         this.duration = parts[1];
//     }
// };

//console.log(`${course.name} is ${course.duration}`);

// console.log(course.details);
// course.details = 'JS PRO 10 HOURS';
// console.log(course.details);


//try & catch 
//it is used to test the error and then catch the error 
// const course = {
//     name: 'Js for begineers',
//     duration: '3 hours',
//     get details()
//     {
//         return `${this.name} is ${this.duration}`;
//     },
//     set details(value)
//     {
//         if(typeof value !== 'string') 
//         {
//             throw new Error(`Value , ${value} is not a string`);
//         }
//         let parts = value.split(' is ');
//         this.name = parts[0];
//         this.duration = parts[1];
//     }
// };
// try{
//     course.details = 42;
// }
// catch(e)
// {
//     console.log(`caught an error: ${e.message}`);
// }


//local VS global scope 
//variable declare outside the functions globally so that it was acess easily
//local varaible are access only within its scope
// {
//     const name = 'Steven';
//     console.log(name); 
// }
// // console.log(name); //error 

// function greet()
// {
//     const message = 'Hello world!';
//     console.log(message);
// }
// greet();
// console.log(message); //error 

//var keyword declare with in the scope can be access outside the function block 
//let wkyword declare within scope of function cannot access outside return an error


//this keyword
//refer to the object which is currently executing within the function

function startVideo()
{
    console.log(this);
}
startVideo();

