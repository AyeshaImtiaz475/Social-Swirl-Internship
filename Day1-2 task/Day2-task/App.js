function setUpEvents()
{
  var content = document.getElementById("content");
  var button = document.getElementById("show-more");

    button.onclick = function()
{
    if(content.className == "open")
    {
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    }
    else{
        //expand the box
        content.className = "open"
        button.innerHTML = "Show More";
    }
};
}

window.onload = function()
{
    setUpEvents();
};
// var content = document.getElementById("content");
// var button = document.getElementById("show-more");

// button.onclick = function()
// {
//     if(content.className == "open")
//     {
//         //shrink the box
//         content.className = "";
//         button.innerHTML = "Show More";
//     }
//     else{
//         //expand the box
//         content.className = "open"
//         button.innerHTML = "Show More";
//     }
// };

// window.onload = function(){
// var content = document.getElementById("content");
// var button = document.getElementById("show-more");

// button.onclick = function()
// {
//     if(content.className == "open")
//     {
//         //shrink the box
//         content.className = "";
//         button.innerHTML = "Show More";
//     }
//     else{
//         //expand the box
//         content.className = "open"
//         button.innerHTML = "Show More";
//     }
// };
// };

//if we add the script in head
