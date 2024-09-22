//targeting the input field 
const inputElement = document.querySelector(".input");
//target the body
const bodyElement = document.querySelector("body");

//inorder to save the mode in the local storage we have to target the local storage 
//local staorage store the data in the form of  JSON so we have to convert the data into boolean either true or false
// The property checked set the initial value either the checkbox is checked or unchecked
inputElement.checked = JSON.parse(localStorage.getItem("mode")) || false;


//the update function()
function updateBody()
{
    //if the input field is checked then change the background to black
    if(inputElement.checked)
    {
        bodyElement.style.background = "black";
    }
    else{
        //if the input field is unchecked then change the background to white
        bodyElement.style.background = "white";
    }
}

//function is used to update the background of the body
updateBody();

//adding event listener to the checkbox
inputElement.addEventListener("input", () => {
    updateBody(); //change teh background color 
    updateLocalStorage(); //save the current mode of input(checked, unchecked)
});


//function stored the current box of the checkbox
function updateLocalStorage()
{
    localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}

