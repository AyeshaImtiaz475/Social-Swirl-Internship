const express = require('express')
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));

//middleware 
app.use(function(req, res, next){
    //console.log(req); when we are getting the data or when user need the data
    //res -- when we send the data to user 
    console.log("middleware working");
    next();
});

//routing in express 
app.get('/', function (req, res) {
  res.render('')
});

app.get('/profile', function (req, res) {
    res.send('Now we are at profile page')
  });
  app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`);
  });

  app.get('/contact', function (req, res) {
    res.send('Now we are at contact page')
  });

  app.get('/login', function (req, res) {
    res.send('Now we are at login page')
  });

  app.get("/error", function(req,res){
    throw Error(" Something went wrong ");
  })

  app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000)

