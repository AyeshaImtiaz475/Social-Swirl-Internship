//events 

// var button = document.getElementById("button")
// .addEventListener("click", buttonClick); 

//function buttonClick(e)
//{
    //console.log("Button clicked");
    //document.getElementById('header-title').textContent = 'Changed';
    //document.querySelector('.list').style.backgroundColor = '#f4f4f4';
    //console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id + '</h3>';

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // //for mouse 
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.shiftKey);
//}

// var button = document.getElementById('button');
// var box = document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dbclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);

// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
//box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

//event for input 
//  itemInput.addEventListener('cut', runEvent);
//  itemInput.addEventListener('paste', runEvent);

form.addEventListener('submit', runEvent);

//select event
select.addEventListener('change', runEvent);

//mouse event
function runEvent(e)
{
    e.preventDefault();
     console.log('EVENT TYPE:' + e.type);
     console.log(e.target.value);
     document.getElementById('output').innerHTML = '<h3>' + e.target.value+ '</h3>';
     //output.innerHTML = '<h3>MouseX:' + e.offsetX+ '</h3><h3>MouseY:'+ e.offsetY+'</h3>';
     //document.body.style.backgroundColor = "rgba("+e.offsetX+" , "+e.offsetY+", 40)";
}