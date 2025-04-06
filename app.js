const express = require("express"); // import express
const app = express(); // initialize to app variable
require('dotenv').config();

// req = request that was send from client side
// response we as the server send 
app.get("/", (req, res) => res.send("Hello, world!"));
// in the case above we receive a request, we respond with hello world
// essentially what the above says is "if a GET request comes through to the '/' path, pass the request through the following chain of middleware functions"
// in our case middleware function just sends 'hello world'

const PORT = 3000; // can be any port, we them tell app to listen for any request coming from this port;
// should be done in  .env file by convention
app.listen(process.env.PORT, () => {
  console.log(`My first Express app - listening on port ${process.env.PORT}!`);
});
