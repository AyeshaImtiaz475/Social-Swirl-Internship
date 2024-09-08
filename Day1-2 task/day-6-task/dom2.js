//TRAVERSING THE DOM//
//parent of ol is list
// var itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode); //body
// console.log(itemlist.parentNode.parentNode.parentNode);

//parent element and parentnode is used as interchangeable 

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement); //body
// console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes
var itemlist = document.querySelector('#items');
// console.log(itemlist.childNodes);

// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'yellow';
// itemlist.children[2].style.backgroundColor = 'lightblue';

// //first child
// console.log(itemlist.firstChild);

// //firstelement
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1';

//last child
// console.log(itemlist.lastChild);

//lastelement
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello world';

//siblings
//nextSibling
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling); //span
// console.log(itemlist.previousSibling.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.computedStyleMap.color = 'green';

//createElement 

//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
console.log(newDiv);
//add attribute
newDiv.setAttribute('title', 'Hello Div');

//craete text node
var newDivText = document.createTextNode('Hello world');

newDiv.appendChild(newDivText);
console.log(newDiv);

