var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event 
form.addEventListener("submit", addItem);
//delete event
itemlist.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems)

//add item
function addItem(e)
{
   e.preventDefault();

   //console.log(1);
   //get input value 
   var newItem = document.getElementById('item').value;
   //create new li element
   var li = document.createElement('li');
   //add the classname to this new li 
   li.className = 'list-group-item';
   //console.log(li);
   //add textnode with input value
   li.appendChild(document.createTextNode(newItem));

   //create del button element
   var deleteBtn = document.createElement('button');

   //add classes to del button
   deleteBtn.className = 'btn delete';
   //append text node
   deleteBtn.appendChild(document.createTextNode('X'));

   //append li inside list
   li.appendChild(deleteBtn);


   itemlist.appendChild(li);
}

//remove item function 
function removeItem(e)
{
   if(e.target.classList.contains('delete'))
   {
    //console.log(1);
    if(confirm('Are you sure?'))
    {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
    }
   }
}

//function filterItems
function filterItems(e){
    //convert text into lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text);

    var items = itemlist.getElementsByTagName('li');
    //console.log(items);

    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    //console.log(itemName);

    if(itemName.toLowerCase().indexOf(text) != -1)
    {
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
    })
}