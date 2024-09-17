//create three element for button, input field and result 
const InputFieldElement = document.getElementById("birthday");
const buttonElement = document.getElementById("calculate");
const resultElement = document.getElementById("age");

//function to calculate the age 
function calculateAge()
{
    const birthdayValue = InputFieldElement.value;
   // console.log(birthdayValue);
   if(birthdayValue == "") //empty value
   {
    alert("Please enter your birthday date!");
   }
   else{
    const finalAge = getAge(birthdayValue);
    //if the age is greater than 1 then years or if finalAge<= 1 then year
    resultElement.innerHTML = `Your age is ${finalAge} ${finalAge > 1 ? "years" : "year"} old`;
   }
}

//function to getAge of user 
function getAge(birthdayValue)
{
    //calculate the current date and birthday
    const currentDateofBirth = new Date();
    const birthdayDate = new Date(birthdayValue); 
    //calculate the final age & month
    let finalAge = currentDateofBirth.getFullYear() - birthdayDate.getFullYear();
    const birthdayMonth = currentDateofBirth.getMonth() - birthdayDate.getMonth();

    //check the condition if birthday month is less than 0 (month<0)means birthday had net yet occur this year
    // month === 0 means that current month & birthday month is equal
    // currentDate < birthdayDate means the birthday month is same but the curentdate is less than my birthday date
    // if today is 5 october then my birthday is 10 october then age will be decreased
    if(birthdayMonth< 0 || (birthdayMonth == 0 && currentDateofBirth.getDate() < birthdayDate.getDate()))
    {
        finalAge--;
    }
    return finalAge;
}

//invoking a function 
buttonElement.addEventListener("click", calculateAge);