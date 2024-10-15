//var d = require('./script2'); 
 
var a = 12;
//var b = 22;
//var c = 45;

module.exports = a;

//module.exports = {first: a, second: b};

//console.log(d);

//npm start
//npm => node package manager now no full form exits 
//npm ek jagah hai jaha par khoob saare packages milte hai
//package -> bani banaai cheejein/features kehlaate hai packages 

var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);

//inordr to install any package we have to write the npm i 

//figlets
var figlet = require("figlet");

figlet("Ayesha Imtiaz", function(err, data){
    if(err)
    {
        console.log("Something went wrong...");
        console.dir(err); //display the properties for the list of arrays 
        return;
    }
    console.log(data);
});


//Express framework
//express frameowrk for node.js 
//express ka use case => routing 
//routing => After base url for the website if there is / something that's means there is routing 
//https://www.facebook.com/profile 
//In order to show the differenet pages when ever the router changes then it's routing 
//TYPES OF ROUTING: GET OR POST 
//PUT PATCH DELETE 

//If you want that there is no issue to show something in the direct url at the https:// bar then its GET request
//If your data is sensitive like email and passoword and you don't want to show the email & password in the url then that is the POST request 

//GET request ma url ma data dakhta ha 
//POST request ma url ma data nahi dakhta ha 

const express = require('express')
const app = express();

app.use(function (req,res, next){
    console.log('Hello from middleware');
    next();
});

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/profile', function (req, res) {
    res.send('Hello from profile')
  });

app.listen(3000) //this is the port 

//when ever we are in the website base route then we are at / route 

//middleware: request ana ka baad or request router tak pochna sa phly jo middle distance ha wo middle ware hota ha 
//middleware ek aisa function ha jo kisi bhi route se pahle chalta hai, jiska matlab appka route chalne se pahle
//agar aap koi kam karana chaahte ho tu middleware ko khaha jaye ga 
//iska matlab ha route chalna sa phly jo chala ga wo middle ware ha 

//difficulty ya ha agar humara middleware chala gaya to request jam ho jaati hai jas ko ek jump dana hota ha 
//next();