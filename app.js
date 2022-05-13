const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

const currentYear = new Date().getFullYear();

app.get("/", function(req, res) {
  res.render('index', {year: currentYear});
});

app.post("/", function(req, res) {
  res.send("Wow, it works!")
});

app.get("/signup", function(req, res) {
  res.send("This is going to be the sign up page")
});

app.get("/login", function(req, res) {
  res.send("This is going to be the login page")
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`)
});
