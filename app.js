const express = require("express"); // import express
const app = express(); // initialize to app variable
require('dotenv').config();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = 3000; // can be any port, we them tell app to listen for any request coming from this port;
app.listen(process.env.PORT, () => {
  console.log(`My first Express app - listening on port ${process.env.PORT}!`);
});
