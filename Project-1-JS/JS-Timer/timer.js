//target the start button
const startButton = document.getElementById("start");
//target the stop button
const stopButton = document.getElementById("stop");

//target the reset button
const resetButton = document.getElementById("reset");

//target the timer element
const timerElement = document.getElementById("timer");

//create the function to start the timer 
let interval;
//set interval, clear interval
let timeLeft = 1500;

function startTimer()
{
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        //check if the time left is equal to 0
        if(timeLeft === 0)
        {
            clearInterval(interval); //clear the interval value to 0
            alert("Time's up"); 
            timeLeft = 1500; // reset the time 
            updateTimer(); //updat ethe timer 
        }
    }, 1000);
}

//function to update the timer 
function updateTimer()
{
    let minutes = Math.floor(timeLeft/60) ;
    let seconds = timeLeft % 60;
    let formatTimeValue = `${minutes.toString().padStart(2,"0")}: ${seconds.toString().padStart(2,"0")}`;
    timerElement.innerHTML = formatTimeValue;
}

//function to stop teh timer 
function stopTimer()
{
    clearInterval(interval);
}

//function to reset the timer 
function resetTimer()
{
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

//invoking a function call through event listener
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);