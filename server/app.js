require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const bcrypt = require('bcrypt');
const path = require('path')
const saltRounds = 10;
const PORT = process.env.PORT || 3001
const mongoURI = 'mongodb://localhost:27017/CommunityJarDB';

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const connection = mongoose.connect(mongoURI, {useNewUrlParser: true});

const sessionStore = new MongoDBSession({
  uri: mongoURI,
  collection: 'mySessions'
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7} // A week
}))

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  jars: {type: Array, default: []}
});

const User = new mongoose.model("User", userSchema);

const currentYear = new Date().getFullYear();

app.get("/", function(req, res) {
  res.render('index', {year: currentYear, isAuth: req.session.isAuth});
});


app.post("/", function(req, res) {
  res.json({fullName: req.body.fullName, email: req.body.email, message: req.body.message})
});

app.get("/signup", function(req, res) {
  res.render('signup', {year: currentYear, isAuth: req.session.isAuth});
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
          req.session.isAuth = true;
          req.session.user = { fName: newUser.firstName, lName: newUser.lastName, email: newUser.email, jars: newUser.jars};
          res.redirect('/dashboard');
        }
      })
    }
  });
});

app.get("/login", function(req, res) {
  res.render('login', {year: currentYear, isAuth: req.session.isAuth});
});



app.post("/login", function(req, res) {
  User.findOne({email: req.body.emailAddress}, function(err, user) {
    if (err) {
      console.log(`Error logging in: ${err}`);
      res.redirect("/login")
    } else if (user) {
      bcrypt.compare(req.body.password, user.password, function(err2, result) {
        if (err2) {
          console.log(`Error comparing passwords: ${err2}`)
        } else {
          req.session.isAuth = true;
          req.session.user= { fName: user.firstName, lName: user.lastName, email: user.email, jars: user.jars};
          res.redirect('/dashboard')
        }

      });
    } else {
      console.log(`No errors, but no users found`)
      res.redirect("/login")
    }
  });
});

app.get("/fetch-data", (req, res) => {
  res.json({ fName: req.session.user.fName, lName: req.session.user.lName, email: req.session.user.email, jars: req.session.user.jars});
  
});

app.get("/dashboard", function(req, res) {
  // TODO: upon clicking, reveal a div that shows the three different types of jars
  // After clicking the three jars, show a form where people can add friends to the community jar
  // Once they finish adding users, send them to the newly created jar.
  if (req.session.isAuth) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  } else {
    res.redirect('/login')
  }
});

app.post("/logout", function(req, res) {
  req.session.destroy(function(err) {
     if (err) {
       console.log(`Error logging out: ${err}`)
     } else {
       res.redirect('/');
     }
  });
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`)
});
