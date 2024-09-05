//Loops in JS

//loops are used to run the code again and again
//for loop (initilzation, stopping condition, updation)
//print 1 to 5
for(let count = 1; count<=10; count=count+1)
{
   console.log("Apna College"); //execute for 5 times
}
console.log("Loop for printin (1----5)has ended...");

//calculate sum of 1 to 5
let sum =0;
let n=7;
for(let i = 1; i<=7; i++)
{
    sum = sum+i;
}
console.log("Sum is:" +sum);
console.log("Loop for sum (1---n ) ended...");

//for loop 
let i = 1;
while(i<=6)
{
    console.log("i =",i,  "Apna College");
    i++;
}

//do while loop at least run one time 
let j = 1;
do{
    console.log("j=" ,j, "I am learning JS");
    j++;
}while(j<=5)


//for of loop used for array cannot used for objects
let str = "ApnaCollege";
for(let i of str)
{
    console.log("i =" + i);
}

let Name="ayeshaimtiaz";
for(let j of Name)
{
    console.log("j =" + j);
}

//for in loop used for objects 

let student = {
    name: "Karan shah",
    age: 20,
    cgpa: 7.5,
    isPass: true
};
for(let key in  student)
{
    console.log("key :" + key);
}

//q1.Print all even numbers from 0 to 100
for(let i=0; i<=100; i++)
{
    if(i%2 == 0)
    {
        console.log("i =" + i + " " + "even number");
    }
}
console.log("Loop ended....");

//q2. game guessing number
let userNum = prompt("Enter the random guessing number.....");
let correctNum = 25;
while(userNum != correctNum)
{
    userNum = prompt("You entered wrong number. Guess again...");
}
console.log("Congradulations, you entered the right number");




