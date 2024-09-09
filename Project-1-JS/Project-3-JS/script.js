//create the notes-container for input box
const notesContainer = document.querySelector('.notes-container');
//create the button for pop-up screen 
const createBtn = document.querySelector('.btn');
//create the note-container to add content 
let notes = document.querySelectorAll('.input-box');

//function for the browser to check the local storage browser either it has the previous data 
function showNotes()
{
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//function to store the data in local storage after the page was refresh
function updateStorage()
{
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
    //create the input box for paragraph
    let inputBox = document.createElement("p");
    //create the img for input box delete image
    let img = document.createElement("img");
    //add the class
    inputBox.className = 'input-box';
    //set the attributes for editing the content 
    inputBox.setAttribute("contenteditable", "true");
    //add the source to the image delete 
    img.src = "images/delete.png";
    //add the input box and img
    notesContainer.appendChild(inputBox).appendChild(img);

})

//add the delete functionality in the button
notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'IMG')
    {
        e.target.parentElement.remove();
        updateStorage(); 
    }
    else if(e.target.tagName === 'P')
    {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function()
            {
                updateStorage();
            }
        })
    }
})

