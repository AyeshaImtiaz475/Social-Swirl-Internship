//EXAMINE THE DOCUMENT OBJECTS //

//console.dir(document);
// console.log(document.domain); //127.0.0.1
// console.log(document.URL); //http://127.0.0.1:5500
// console.log(document.title); //JS DOM

// //changing the title 
// document.title = "JS DOM for Begineers";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); //return the HTML Collections 
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document.all[10]);
// console.log(document.forms); //return [] when don't have any item 
// console.log(document.links);
// console.log(document.images); 

//GET ELEMENT BY ID//
//console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById('header-title');
console.log('header-title');
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);

headerTitle.innerHTML = '<h3>Hello</h3>';
console.log(headerTitle);
headerTitle.style.borderBottom = 'solid 3px #000';

//GET ELEMENTSBYCLASSNAME//
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello 2';
// items[1].style.fontWeight = 'Bold';
// items[1].style.backgroundColor = 'yellow';

// //changing the style of all li
// for(var i=0; i<items.length; i++)
// {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

//GETELEMENTBYTAGNAME//
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'Bold';
// li[1].style.backgroundColor = 'yellow';

// //changing the style of all li
// for(var i=0; i<li.length; i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERYSELECTOR//
// var header = document.querySelector('#header-title');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello world';

// var submit = document.querySelector('input[type="button"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//QUERYSELECTORALL//
var title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent = 'hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = '#f4f4f4';
}
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<even.length; i++)
{
    even[i].style.backgroundColor = 'lightblue';
}






