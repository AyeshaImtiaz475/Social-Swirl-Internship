 //while loop
 var age = 5; //initilization
 while(age < 10) //condition
 {
      console.log("Your age is less than 10");
    //print + increment + decrement
 }
 document.write("You are now over 10");
 // // //break & continue 
// // for( i=0; i<10; i++)
// // {
// //   if(i === 5 || i === 3)
// //   {
// //     continue;
// //   }
// //   console.log(i);
// //   if(i == 7)
// //   {
// //     break;
// //   }
// // }
// // console.log("I have broken out of the loop");


// // //functions
// // function getAverage(a,b)
// // {
// //   var average = (a + b)/2;
// //   console.log(average);
// // }
// // getAverage(2,3);

// // function sum(x,y)
// // {
// //   var mysum = (x + y);
// //   console.log("Sum value is :" + mysum);
// // }
// // //calling the function
// // sum(3,4);

// // function multiplication(p , q)
// // {
// //   var mymultiply = (p * q);
// //   console.log("Multiplication value :" + mymultiply);
// // }
// // multiplication(34,56);

// // function divide(c,d)
// // {
// //   var divideresult = (c/d);
// //   console.log("divide result:" + divideresult);
// // }
// // var result = divide(6,3);

// // //console.log(divideresult); error
// // function logResult()
// // {
// //   console.log("The average is" + result);
// // }
// // logResult();

// // //scope variable
// // var foo = 20 //global variable
// // function myfun()
// // {
// //   var myvalue = 10; //local variable
// // }
// // //console.lg(myvalue);  error
// // console.log(foo);

// // //working with numbers 
// // var myVariableName = 3.12;
// // console.log(myVariableName);

// // //we can't write the number in quotes
// // var g = "7";
// // var h = 5;
// // console.log(g + h);
// // console.log(typeof (g + h)); //String

// // console.log(Math.max(7,8));
// // console.log(Math.floor(6.78));
// // console.log(Math.PI);
// // console.log(Math.ceil(7.2));

// // //NaN
// // //var myvalue1 = "apple";
// // var myvalue1 = 6;
// // var myvalue2 = 6;
// // console.log(myvalue1 + myvalue2);

// // if(isNaN(myvalue1))
// // {
// //   console.log("that aint even a number, thickie");
// // }
// // else
// // {
// //   console.log("meaning of life is" +
// //   (myvalue1 * myvalue2));
// // }

// //string 
// // var myString = 'I\'m a "fun" string';
// // console.log(myString.length);
// // console.log(myString);
// // console.log(myString.toUpperCase());
// // console.log(myString.toLowerCase());
// // console.log(myString.indexOf("string"));
// // if(myString.indexOf("ninja") === -1)
// // {
// //   console.log("the word ninja is not in the string");
// // }
// // else
// // {
// //   console.log("The word ninja starts at positions");
// //   myString.indexOf("ninja");
// // }

// // var string1 = "abc";
// // var string2 = "Abc";
// // console.log(string1.toLowerCase() === 
// // string2.toLowerCase());
// // console.log(string1 > string2);

// //splitting & slice in string
// // var str = "hello world";
// // console.log(str);

// // var str2 = str;
// // str2= str.slice(2,9); //paramter (start,end)
// // console.log(str2);

// // var str3 = str.slice(2);
// // console.log(str3);

// // var tags = "meat, chicken, beef";
// // var tagsArray = tags.split(",");
// // console.log(tagsArray);

// //Arrays 
// // var myArray = [100, 25,67,false, "hello"];
// // console.log(myArray[0]);
// // console.log(myArray[1]);
// // console.log(myArray[2]);
// // console.log(myArray.length);

// // var newArray = [9,4,2,6,1];
// // console.log(newArray.sort());
// // console.log(newArray.reverse());

// //objects 
// // var myCar = {
// //   maxSpeed: 70,
// //   driver: "Net ninjas",
// //   drive: 
// //   function(speed, time)
// //   {
// //     console.log(speed * time);
// //   }
// // };

// // console.log(myCar.maxSpeed);
// // myCar.drive(50,7);

// // // console.log(this); 

// // //'This' KEYWORD
// // var student = {
// //   fname: "ayesha",
// //   age: 21,
// //   degree: "BS Software engineering",
// //   marks:
// //   function(totalmarks, obtainedmarks)
// //   {
// //     console.log(totalmarks + " =" + obtainedmarks);
// //   },
// //   test: function(){
// //     console.log(this);
// //   },
// //   logStudent: function()
// //   {
// //     console.log("name of student is:" +
// //     this.fname);
// //   }
// // };

// // student.logStudent();
// // console.log(student.fname);
// // student.marks(1100,876);
// // student.test();

// //constructor function

// // var Car = function(maxSpeed, driver)
// // {
// //   this.maxSpeed = maxSpeed;
// //   this.driver = driver;
// //   this.drive = function(speed, time)
// //   {
// //     console.log(speed + time);
// //   };
// //   this.logDriver = function()
// //   {
// //     console.log("driver name is:" + this.driver);
// //   }
// // };

// // var myCar = new Car(70, "Ninja Man");
// // var myCar2 = new Car(30, "Humpty Dumpty");
// // var myCar3 = new Car(10, "Shaun");

// // myCar.drive(30,5);
// // myCar.logDriver();

// //Date object
// var myPastDate = new Date(1545,11,5, 10, 30, 15);
// var myFutureDate = new Date(1545,11,5, 10, 30, 15);
// console.log(myPastDate);
// console.log(myFutureDate);

// var birthday = new Date(2003, 0, 13, 11, 15, 25);
// console.log(birthday.getMonth());

// console.log(birthday.getFullYear());

// console.log(birthday.getDate());
// console.log(birthday.getDay());
// console.log(birthday.getHours());
// console.log(birthday.getTime());

// if(myPastDate.getTime() == myFutureDate.getTime())
// {
//   console.log("birthday are equal");
// }
// else
// {
//   console.log("Birthdays are not equal");
// }
// // DOM 
// //document object model
// //document.getElementByTagName();
// //document.getElementById();
// //document.getElementByClassName();

//accessing and chanding attributes 
// var link = document.getElementById("#content");
// link.getAttribute("href");
// link.setAttribute("id", "pie");

// link.setAttribute("style", "positions: relative");
// link.setAttribute("style", "left: 10px;");

//link.style.backgrundColor = "red";

//event 
//alert('hello');