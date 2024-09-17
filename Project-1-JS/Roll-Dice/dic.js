// target the button
const buttonElement = document.getElementById("roll-button");

//target the dic 
const dicElement = document.getElementById("dice");

//target the dic histroy
const historyElement = document.getElementById("roll-history");

//create an empty historyList 
let historyList = [];

function rollDice()
{
    //create the random roll result using random() function
    const rollResult = Math.floor(Math.random() * 6) + 1;
    //create the riceFace (either 1,2,3,4,5,6)
    const diceFace = getdiceFace(rollResult);
    //show the dicFace on the webpage
    dicElement.innerHTML = diceFace;
    //push the result in the empty historyList of dice
    historyList.push(rollResult);
    //function invoke to update the diceFace
    updateRollHistory();
}

//create the function to update the rolling history
function updateRollHistory()
{
    //at the starting of dic game the history should be empty
    historyElement.innerHTML = "";
    //create teh for loop to show the roll faces till the historyList length
    for(let i=0; i<historyList.length; i++)
    {
      //create the li item
      const listItem = document.createElement("li");
      listItem.innerHTML = `Roll ${i + 1}: <span>${getdiceFace(historyList[i])}</span>`;
      historyElement.appendChild(listItem);
    }
}

//create the function to show the riceface
function getdiceFace(rollResult)
{
    switch(rollResult)
    {
        case 1: 
        return "&#9856;"; 
        case 2:
        return "&#9857;";
        case 3:
        return "&#9858;";
        case 4:
        return "&#9859;";
        case 5:
        return "&#9860;";
        case 6:
        return "&#9861;";
        default:
            return "";
    }
}

//event listener 
buttonElement.addEventListener("click", () => {
    //access  & add the .roll-animation class 
    dicElement.classList.add("roll-animation");
    setTimeout(() => {
    //remove the class .roll-animation
        dicElement.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});

