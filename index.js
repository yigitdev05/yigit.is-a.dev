const express = require("express");
const app = express();

app.get('/~' (req, res) {
  app.sendFile(__dirname + 'index.html');
});

app.listen(3000)
