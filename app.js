const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
})

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`)
})
