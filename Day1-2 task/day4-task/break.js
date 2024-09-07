//break and continue 
// const obj = {
//     a: 1,
//      b:2, 
//      c:3
// };
// for (let key in obj)
// {
//     if(key === 'c')
//     {
//         break;
//     }
//     console.log(obj[key]);
// }

// const arr = [1,2,3,4,5,6];
// for(let element of arr)
// {
//     if(element === 3)
//     {
//         break;
//     }
//     console.log(element);
// }

//continue 
// for (let i=0; i<10; i++)
// {
//     if(i % 2 === 0)
//     {
//         continue; //skip
//     }
//     console.log(i);
// }

// let i=0; 
// while(i<10)
// {
//     i++;
//     if(i % 2 === 0)
//     {
//         continue;
//     }
//     console.log(i);
// }

// let j=0;
// do{
//     i++;
//     if(j % 2 === 0)
//     {
//         continue;
//     }
//     console.log(i);
// }
// while(i<10)


// const obj = {
//     a : 1,
//     b: 2, 
//     c: 3,
//     d: 4
// };
// for(let key in obj)
// {
//     if(obj[key] % 2 == 0)
//     {
//         continue;
//     }
//     console.log(obj[key]);
// }

// const arr = [1,2,3,4,5];
// for(let element of arr)
// {
//     if(element % 2 === 0)
//     {
//         continue;
//     }
//     console.log(element);
// }

//QUIZ: WHat is the break keyword used for?
//to break the loop at some instance to exit the further execution of code(value)

//What is the continue keyword used for?
//The continue keyword is used to skip the code execution under curtain consition

//Implement a function to accept two numbers and returns the maximum number

// function MaximumFun(a, b)
// {
//     if(a > b)
//     {
//         console.log(a + "is the maximum number");
//     }
//     else{
//         console.log(b + "is macimum number");
//     }
// }
// MaximumFun(9,8);

//q2.
// function fizzBuzz(number)
// {
//     if(number % 3 === 0 && number % 5 === 0)
//     {
//         return 'FizzBuzz';
//     }
//     else if(number % 3 === 0)
//     {
//         return 'Fizz';
//     }
//     else if(number % 5 === 0)
//     {
//         return 'Buzz';
//     }
//     else{
//         return number;
//     }
// }
// console.log(fizzBuzz(25));


//q3.
// function EvenFunction(arr)
// {
//     for(let element of arr)
//         {
//             if(element % 2 === 0)
//             {
//                 console.log("Even number" + element);
//             }
//         }
// }
// EvenFunction([12, 56, 34, 67,89,100,22]);

//q4.
// function OddFunction(array)
// {
//     for(const element of array)
//         {
//             if(element % 2 != 0)
//             {
//                 console.log("Even number" + element);
//             }
//         }
// }
// OddFunction([12, 56, 34, 67,89,100,22]);


//Object literal 
// const dog = {
//     name: 'Max',
//     breed: 'Dachshund',
//     age: 5,
//     weightInPound : 12,
//     eat: function()
//     {
//         console.log('Chomp');
//     },
//     brak()
//     {
//         console.log("Woof");
//     }
// }

//QUIZ: what is the purpose of objects?
//it store the key value pairs & behaviours 

// const anotherdog = {
//     name: 'Marley',
//     breed: 'Choco Lab',
//     age: 3,
//     weightInPound : 60,
//     eat: function()
//     {
//         console.log('Chomp');
//     },
//     brak()
//     {
//         console.log("Woof");
//     }
// }

//used the function to return objects

// function getDog(name, breed, age, weightinpounds)
// {
//     return{
//         name,
//         breed, 
//         age,
//         weightinpounds,
//         eat()
//         {
//             console.log('chomp');
//         },
//         bark()
//         {
//             console.log('woof');
//         }
//     }
// }
// const anotherDog = getDog('Marley', 'Chocolate-lab', 3, 60);
// console.log(anotherDog);

//QUIZ: What are factory functions?
//the factory function return the objects values & key and also help us to create the objects

function Dog(name, breed, age, weightinpounds)
{
    this.name = name;
    this.breed= breed,
    this.age = age;
    this.weightinpounds = weightinpounds;
    this.eat = function()
    {
        console.log(this.name + 'chomp');
    }
    this.bark = function()
    {
        console.log(this.name + ': Woof');
    }
}

const anotherDog = new Dog('Marley', 'Lab', 3, 60);
console.log(anotherDog);

//QUIZ: what are the constructor fucntion?
//initilially declare the parameter 
