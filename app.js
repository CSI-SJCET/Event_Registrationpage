const express=require('express');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
require('dotenv').config();
const db=require('./db/mongo_connection')
const registration=require('./routes/registration')

const app=express();



app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/registration',registration)


 // Error handler 404
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler 500
app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
 
  res.status(err.status || 500);
  res.status(500).json("error");
  console.log(err.status)
});


app.listen(port,()=>{
      console.info("Server running..");
})