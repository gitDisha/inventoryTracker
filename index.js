const http = require("http");
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const path = require("path");
// const fs = require("fs");

const express = require("express");
const app = express();

dotenv.config({path:'config.env'})

//engine ejs. need to specify if folder changes
app.set("view engine", "ejs")

//log request
app.use(morgan('tiny'));

//parsing requests
app.use(bodyParser.urlencoded({extended: true}))

//defining paths
// app.use('/css',express.static(path(__dirname,"file/css")))

//sending and receiving requests to homepage
app.get("/", function(req,res){
    res.render('index.ejs')
});

app.get("/add-item", function(req,res){
    res.render('addItem.ejs')
});

app.get("/edit-item", function(req,res){
    res.render('editItem.ejs')
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

