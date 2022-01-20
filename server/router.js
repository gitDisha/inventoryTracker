const express = require('express')
const route = express.Router()
const crud = require('./mongoData/crud')

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

//CRUD routes
route.post('/api/items', crud.create)
route.get('/api/items', crud.read)
route.put('/api/items/:id', crud.update)
route.delete('/api/items/:id', crud.delete)

module.exports = route