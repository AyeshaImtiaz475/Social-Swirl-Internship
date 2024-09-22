//target the bar icon 
const bars = document.querySelector(".fa-bars");

//target the sidebar through a class
const sidebar = document.querySelector(".sidebar");

//target the closing icon 
const closingButton = document.querySelector(".fa-circle-xmark");

//when we click on bar icon the show-sidebar class will be added in the sidebar 
bars.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});