//Sync in JS -> code run in a practicular manner
console.log("one");
console.log("two");
console.log("three");

//Ansync 
//some time in synchronous programming, importnat instructions get blocked due to some previous instructions, 
//which cause a delay in the UI. 
//Ansync code execution allows to execute next instructions immedialtely and doesn't block the flow.

function hello()
{
    console.log("hello");
}
setTimeout(hello, 4000); //4s = 4000 milliseconds
//settimeout() get the callback

// console.log("four");
// console.log("five");

// function MyName()
// {
//     console.log("ayesha");
// }
// setTimeout(MyName, 5000);

//Callback 
// function sum(a, b){
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback)
// {
//     sumCallback(a,b);
// }
// calculator(1,2, sum);

//callback hell 
// function getData(dataId) {
//     console.log("data is:" , dataId)
// }

// function getData(dataId) {
//     //2s
//     setTimeout(() => {
//         console.log("data is:" , dataId)
//     }, 2000);
// };

// function getData(dataId, getNextdata) {
//     //2s
//     setTimeout(() => {
//         console.log("data is:" , dataId);
//         if(getNextdata)
//         {
//             getNextdata();
//         }
//     }, 2000);
// };
// //callback hell
// getData(1, () => {
//     console.log("getting data2.......");
//     getData(2, () => {
//         console.log("getting data3.......");
//         getData(3, () => {
//             console.log("getting data4.......");
//             getData(4, () => {
//                 console.log("getting data5.......");
//                 getData(5, () => {
//                     console.log("getting data6.......");
//                     getData(6, () => {
//                         console.log("getting data7.......");
//                         getData(7);
//                     });
//                 });
//             });
//         });
//     });
// });

//Promises is for "eventual" completion of task. It is an object in jS.
//It is a solution to callback hell

//resolve -> successfully work , reject -> not successfully work
//pending , fullfilled, rejected

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success"); //created by javascript 
// })

// function getData(dataId, getNextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             //console.log("data", dataId);
//             //resolve("success");
//             reject("some error");
//             if(getNextdata)
//             {
//                 getNextdata();
//             }
//         },5000);
//     })
// }
//promise.then((res) => {....})
//promise.catch((err) => {....})

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         //reject("error");
//     });
// }
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// })


//promise chaining
function asyncFunc1()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        },3000);
    });
}
function asyncFunc2()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        },4000);
    });
}

// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// })
// console.log("fetching data2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })

//promise chaining
// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {});
// })

//promise chaining is diffiuclt to under
//asnycn await fun
//await pause the execution of surrrounding async function 

function api()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 2000);
    });
}

// async function getWeatherData()
// {
//     console.log("Getting data1 ......");
//     await api(); //1st call
//     console.log("Getting data2 ......");
//     await api();  //2nd call
//     console.log("Getting data3 ......");
//     await api();
//     console.log("Getting data4......");
//     await api();
//     console.log("Getting data5......");
//     await api();
//     console.log("Getting data6 ......");
//     await api();
// }


//IIFE:Immedialtely invoked function  Expression
//execute as soon as it is defined


(async function()
{
    console.log("Getting data1 ......");
    await api(); //1st call
    console.log("Getting data2 ......");
    await api();  //2nd call
    console.log("Getting data3 ......");
    await api();
    console.log("Getting data4......");
    await api();
    console.log("Getting data5......");
    await api();
    console.log("Getting data6 ......");
    await api();
})();
 













