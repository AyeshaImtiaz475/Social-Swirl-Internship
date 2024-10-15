# node vs express 
Node is the main thing express ke code se hum server ka code likh pate and server kasisa react karega wo bhi express ke help se likhte hai

# How to install express
 npm i express

# what is express js
Package, routing and managing the backend code.

# why express js
Http is difficult to use, express makes this easier

# routing
routes banaane ke process ko hum kahte hai routing.
What is routes then?
when we are bale to create the / 
/profile
/contact
/home

# middleware
Middleware ek asisa function hota hai jo har route se phle chalta hai, iska matlab saare routes mei koi bhi chale usse pahle middleware chatlta ha and usemein likha code phly execute hota ha 


# request and response , next
re main saara data hota hai aane waale user ki request ki taraf ka, jaise ki uski location, device info and other things, res mein controls hote hai jinke basis pe hum server se response bhej paate hai
next is just a push so that our req moves to the next thing which should be executed

# route parameters
Logic:
facebook.com/profile/ayesha
facebook.com/profile/iram
facebook.com/profile/ali

aisa koi bhi route jiska koi hissa baar baar same rehta hai and kuch hissa baar baar change hota hai iske liya ek dynamic route bana sakta hein 

/profile/:(parameter)username(params)

url mein jab bhi aapke paas ek aisa pattern ho 
- to make any route dynamic you can use : at the place where you want to make it dynamic, and to acess theer value use req.params

/author/book/issued/ayesha
/author/book/issued/saba
/author/book/issued/muqaddas
/author/book/issued/iram
/author/book/issued/:username

# template engines
ejs - html ka paas superpowers nahi hai calculation karne ki but ejs ma superpowers hoti ha ka wo caluclation perform kara but it was also like html

template enginer => ye ek style of markup se convert krke appko html hi data hein 
pug, handlebars, ejs, jade
we are using ejs which is similar to html 

# ejs setup karne ke liya 
1. sjs install 
npm install ejs 
2. config ejs 
app.set("view engine", "ejs");

3.ek views folder banao
4. usmei ejs files banao
5. send ki jagah render karo


# static files
images, stylesheets, frontend js ko set up karna 
static files ko setup karne ka liya:
1.create a folder called public
2. create three folders inside it, images, stylesheets, javascripts
3.configure the express static  in index.js.
4.understand the path


# http methods - get post 

# error handling 
https://expressjs.com/en/guide/error-handling.html
