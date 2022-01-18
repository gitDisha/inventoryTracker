const express = require('express')
const route = express.Router()

//sending and receiving requests to homepage
route.get("/", function(req,res){
    res.render('index.ejs')
});

route.get("/add-item", function(req,res){
    res.render('addItem.ejs')
});

route.get("/edit-item", function(req,res){
    res.render('editItem.ejs')
});

module.exports = route