const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require("mongoose");
// const session = require('express-session');
// const passport = require("passport")
// const passportLocalMongoose = require("passport-local-mongoose")
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const User = new mongoose.model("User", userSchema);

const currentYear = new Date().getFullYear();

app.get("/", function(req, res) {
  res.render('index', {year: currentYear});
});

app.post("/", function(req, res) {
  res.send("Wow, it works!")
});

app.get("/signup", function(req, res) {
  res.render('signup', {year: currentYear});
});

app.post("/signup", function(req, res) {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if (err) {
      console.log(`Error hashing password: ${err}`);
      res.redirect("/signup");
    } else {
      const newUser = new User({
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.emailAddress,
        password: hash
      });

      newUser.save(function(err2) {
        if (err2) {
          console.log(`Error saving user: ${err2}`)
        } else {
          res.redirect('/')
        }
      })
    }
  });
});

app.get("/login", function(req, res) {
  res.render('login', {year: currentYear});
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`)
});
