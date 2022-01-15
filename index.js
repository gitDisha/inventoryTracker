const http = require("http");
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require("body-parser");

// const path = require("path");
// const fs = require("fs");

const express = require("express");
const app = express();

dotenv.config({path:'config.env'})


//log request
app.use(morgan('tiny'));

//parsing requests
app.use(bodyParser.urlencoded({extended: true}))

//sending and receiving requests
app.get("/", function(req,res){
    res.send("Hello")
});

//view engine that helps with templating. Simplest to use
// app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, function() {
    console.log(`Server is running on local port ${PORT}`);
});

// app.post("/", function(req,res){
//     var item = req.body.newitem;
//     console.log(item)
// });

