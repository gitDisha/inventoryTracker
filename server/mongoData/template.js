const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: false
    }
})

const itemsData = mongoose.model("itemsData", schema)

module.exports = itemsData