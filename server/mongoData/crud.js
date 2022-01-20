const { MongoClient } = require('mongodb');
var itemsData = require('./template')
var ObjectId = require('mongodb').ObjectId;
const client = new MongoClient(process.env.MONGO_URI);
// var userDb = require('./template')

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send("error: Please enter valid details")
        return
    }

    const newItem = new itemsData({
        name: req.body.name,
        quantity: req.body.quantity
    })
    console.log(newItem)

    await client.connect()
    data = await client.db("InventoryTracker").collection("Items").insertOne(newItem);
    res.send(data)
}
exports.read = async (req, res) => {
    if (!req.body) {
        res.status(400).send("error: Please enter valid details")
        return
    }

    await client.connect();
    if (req.query.id) {
        console.log(req.query);
        client.db("InventoryTracker").collection("Items").findOne({ _id: new ObjectId(req.query.id) }, (err, data) => {
            if (data) {
                console.log("found data:" + data)
            } else {
                console.log("did not find any data")
            }
            res.send(data)
        })
    } else{
        data = await client.db("InventoryTracker").collection("Items").find().toArray().then((data)=>{
            console.log(data);
            res.send(data)
        })
    }

}
exports.update = async (req, res) => {
    console.log("updating");
    if (!req.body) {
        res.status(400).send("error: Please enter valid details")
        return
    }

    const updatedItem = {
        name: req.body.name,
        quantity: req.body.quantity
    }
    const id = req.params.id;

    await client.connect();
    data = client.db("InventoryTracker").collection("Items").updateOne({ _id: new ObjectId(id) }, { $set: updatedItem })
    res.send()
}
exports.delete = async (req, res) => {
    if (!req.body) {
        res.status(400).send("error: Please enter valid details")
        return
    }

    const id = req.params.id;

    await client.connect()
    data = client.db("InventoryTracker").collection("Items").deleteOne({ _id: new ObjectId(id) })
    res.send(data)
}
