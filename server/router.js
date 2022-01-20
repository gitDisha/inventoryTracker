const express = require('express')
const route = express.Router()
const crud = require('./mongoData/crud')

//CRUD routes
route.post('/api/items', crud.create)
route.get('/api/items', crud.read)
route.get('/api/items/:id', crud.read)
route.put('/api/items/:id', crud.update)
route.delete('/api/items/:id', crud.delete)
route.get('/download', crud.csv)
module.exports = route