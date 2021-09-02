const express = require("express");
const mongoose = require("mongoose");

//setup the app variable to the express method/function
const app = express();

//mongodb connection
mongoose
  .connect("mongodb://localhost/dcuniverse")
  .then(() => console.log("Database Connected..."));

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/heroes', require('./routes/hero'))
app.use('/villains', require('./routes/villain'));

// port & listen method
const port = 4200;
app.listen(port, () => {
  console.log("Server running. . .");
});
