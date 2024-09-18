//traget the input field 
const inputFieldValue = document.getElementById("input");
//target the error paragraph
const errorElement = document.getElementById("error");
//target the result element 
const resultElement = document.getElementById("result");

let errorTime; //it show the error for specific period of time after that error message was remove
let resultTime; //it show the result for 10 second after that the result will be removed

//function to updateResult & check if the user input is valid or not
function updateResult()
{
    //if the user value is not a number, empty or less than equal to 0 
   if(inputFieldValue.value <= 0 || isNaN(inputFieldValue.value))
   {
      errorElement.innerText = "Please enter a valid number";
      clearTimeout(errorTime);
      errorTime = setTimeout(() => {
        errorElement.innerText = "";
        inputFieldValue.value = "";
      }, 2000);  //showing the error message atleast 2 seconds
   }
   else {
    //convert the pound into kg then fixed the decimal at 2
    resultElement.innerText = (+inputFieldValue.value /2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
        resultElement.innerText = "";
        inputFieldValue.value = "";
    }, 10000); //show the result atleast 10 seconds 
   }
}
//add eventlistener at the input field
inputFieldValue.addEventListener("input", updateResult);