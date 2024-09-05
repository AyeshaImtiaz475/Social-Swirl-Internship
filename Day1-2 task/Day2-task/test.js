// var myMessage = document.getElementById("message");
// function showMessage()
// {
//     myMessage.className = "show";
// }
// setTimeout(showMessage, 4000);

var colorChanger = document.getElementById("color-changer");
var colours = ["red", "blue", "green", "pink"];
var counter = 0;
function changeColor()
{
    //reset the counter value
    if(counter >= colours.length)
    {
        counter = 0;
    }
    //add the colors one by one
    colorChanger.style.background = colours[counter];
    counter++;
}
//set time after every 3 second color change 
var myTimer = setInterval(changeColor, 3000);

//after clicking on the box the timer stopped
colorChanger.onclick = function()
{
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer stopped";
}
