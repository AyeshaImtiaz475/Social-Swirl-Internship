//Array Method 
//adding elements 
const numbers = [5,4,3,2,1,3];

//add at last
numbers.push(7,8,9);
//console.log(numbers);

//add at start
numbers.unshift(25, 78);
//console.log(numbers);

//add at middle
numbers.splice( 6);
//console.log(numbers);

const indexOfThree = numbers.indexOf(3);
//console.log(numbers[indexOfThree]);

//check the last index of array element 
const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree);

//if the element not found in the array 
const indexOfTen = numbers.lastIndexOf(10);
if(indexOfTen === -1)
{
    console.log("10 not found");
}
if(!numbers.includes[10])
{
    console.log("10 not found");
}

const employees = [
    {
        id: 1, 
        name: 'Jim'
    },
    {
        id: 2, 
        name: 'Jack'
    },
    {
        id: 3, 
        name: 'Pan'
    },
];
//find method & callback() function 
const employee = employees.find(function(e) {
    return e.name === 'Jim'
});
console.log(employee);

