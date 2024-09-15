//creating the function

function myfun() {
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  //getting the input filed value like what is inside the input field of all bts
  b1 = document.getElementById("btn1").value;
  b2 = document.getElementById("btn2").value;
  b3 = document.getElementById("btn3").value;
  b4 = document.getElementById("btn4").value;
  b5 = document.getElementById("btn5").value;
  b6 = document.getElementById("btn6").value;
  b7 = document.getElementById("btn7").value;
  b8 = document.getElementById("btn8").value;
  b9 = document.getElementById("btn9").value;

  var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
  //getting the input field of all btns like whole input tag
  b1btn = document.getElementById("btn1");
  b2btn = document.getElementById("btn2");
  b3btn = document.getElementById("btn3");
  b4btn = document.getElementById("btn4");
  b5btn = document.getElementById("btn5");
  b6btn = document.getElementById("btn6");
  b7btn = document.getElementById("btn7");
  b8btn = document.getElementById("btn8");
  b9btn = document.getElementById("btn9");

  //check if the PLAYER X won or not after that disabled all teh remaining field for input
  if (
    (b1 == "X" || b1 == "X") &&
    (b2 == "x" || b2 == "X") &&
    (b3 == "x" || b3 == "X")
  ) {
    //target the paragraph id to show the text
    document.getElementById("print").innerHTML = "Player X won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  } else if (
    (b1 == "X" || b1 == "X") &&
    (b4 == "x" || b4 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (
    (b1 == "X" || b1 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (
    (b3 == "X" || b3 == "X") &&
    (b6 == "x" || b6 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  } else if (
    (b7 == "X" || b7 == "X") &&
    (b8 == "x" || b8 == "X") &&
    (b9 == "x" || b9 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  }
  else if (
    (b3 == "X" || b3 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b7 == "x" || b7 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }
  else if (
    (b2 == "X" || b2 == "X") &&
    (b5 == "x" || b5 == "X") &&
    (b8 == "x" || b8 == "X")
  ) {
    document.getElementById("print").innerHTML = "Player X won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  }
  //checking if the player 0 won after that disabled the field 
  else if (
    (b1 == "0" || b1 == "0") &&
    (b2 == "0" || b2 == "0") &&
    (b3 == "0" || b3 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
  }
  else if (
    (b1 == "0" || b1 == "0") &&
    (b4 == "0" || b4 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
  } else if (
    (b1 == "0" || b1 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.color = "red";
    b5btn.style.color = "red";
    b9btn.style.color = "red";
  }
  else if (
    (b2 == "0" || b2 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b8 == "0" || b8 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.color = "red";
    b5btn.style.color = "red";
    b8btn.style.color = "red";
  }
  else if (
    (b3 == "0" || b3 == "0") &&
    (b6 == "0" || b6 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.color = "red";
    b6btn.style.color = "red";
    b9btn.style.color = "red";
  }
  else if (
    (b3 == "0" || b3 == "0") &&
    (b5 == "0" || b5 == "0") &&
    (b7 == "0" || b7 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.color = "red";
    b5btn.style.color = "red";
    b7btn.style.color = "red";
  }
  else if (
    (b7 == "0" || b7 == "0") &&
    (b8 == "0" || b8 == "0") &&
    (b9 == "0" || b9 == "0")
  ) {
    document.getElementById("print").innerHTML = "Player 0 won";
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
  }
  //checking if a match is tie or not
  else if (
    (b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') &&
    (b3 == 'X' || b3 == '0') && (b4 == 'X' || b4 == '0') &&
    (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') &&
    (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') &&
    (b9 == 'X' || b9 == '0')
  ) {
    document.getElementById("print").innerHTML = "Match is a draw!";
    // Disable all buttons as the match is a draw
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;
  }
else {
    //if the match tie asked the player x and 0 for there turn 
    if(flag == 1)
    {
        document.getElementById('print').innerHTML = "Player X Turn";
    }
    else{
        document.getElementById('print').innerHTML = "Player 0 Turn";
    }
   }
}


//when the page was load reset the input field value to empty value
function myfun2()
{
   location.reload();
   b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

//flag 1 -> true 
//flag 2 -> false

//set teh value of flag 
flag = 1;
//check the player X & player 0 turns
//btn1 
function myfun3()
{
    if(flag == 1)
        {
            document.getElementById('btn1').value="X";
            document.getElementById('btn1').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn1').value="0";
            document.getElementById('btn1').disabled = true;
            flag = 1;
            myfun();
        }
}
//btn2
function myfun4()
{
    if(flag == 1)
        {
            document.getElementById('btn2').value="X";
            document.getElementById('btn2').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn2').value="0";
            document.getElementById('btn2').disabled = true;
            flag = 1;
            myfun();
        }
}
//btn3 
function myfun5()
{
    if(flag == 1)
        {
            document.getElementById('btn3').value="X";
            document.getElementById('btn3').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn3').value="0";
            document.getElementById('btn3').disabled = true;
            flag = 1;
            myfun();
        }
}
//btn 4
function myfun6()
{
    if(flag == 1)
        {
            document.getElementById('btn4').value="X";
            document.getElementById('btn4').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn4').value="0";
            document.getElementById('btn4').disabled = true;
            flag = 1;
            myfun();
        }
}
//btn 5
function myfun7()
{
    if(flag == 1)
        {
            document.getElementById('btn5').value="X";
            document.getElementById('btn5').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn5').value="0";
            document.getElementById('btn5').disabled = true;
            flag = 1;
            myfun();
        }
}

//btn 6
function myfun8()
{
    if(flag == 1)
        {
            document.getElementById('btn6').value="X";
            document.getElementById('btn6').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn6').value="0";
            document.getElementById('btn6').disabled = true;
            flag = 1;
            myfun();
        }
}
//btn 7
function myfun9()
{
    if(flag == 1)
        {
            document.getElementById('btn7').value="X";
            document.getElementById('btn7').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn7').value="0";
            document.getElementById('btn7').disabled = true;
            flag = 1;
            myfun();
        }
}

//btn 8
function myfun10()
{
    if(flag == 1)
        {
            document.getElementById('btn8').value="X";
            document.getElementById('btn8').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn8').value="0";
            document.getElementById('btn8').disabled = true;
            flag = 1;
            myfun();
        }
}

//btn 9
function myfun11()
{
    if(flag == 1)
        {
            document.getElementById('btn9').value="X";
            document.getElementById('btn9').disabled = true;
            flag = 0;
            myfun();
        }
        else{
            document.getElementById('btn9').value="0";
            document.getElementById('btn9').disabled = true;
            flag = 1;
            myfun();
        }
}