const { MongoClient } = require('mongodb');
var itemsData = require('./template')
var ObjectId = require('mongodb').ObjectId;
const client = new MongoClient(process.env.MONGO_URI);
const csvwriter = require('csv-writer');

let createCsvWriter = csvwriter.createObjectCsvWriter;
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
    if (req.params.id) {
        client.db("InventoryTracker").collection("Items").findOne({ _id: new ObjectId(req.params.id) }, (err, data) => {
            if (err) {
                res.status(400).send("error: " + err)
            } else {
                res.send(data)
            }
        })
    } else {
        data = await client.db("InventoryTracker").collection("Items").find().toArray().then((data) => {
            res.send(data)
        })
    }

}
exports.update = async (req, res) => {
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
    res.send(data)
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

exports.csv = async (req, res) => {

    await client.connect()
    client.db("InventoryTracker").collection("Items").find().toArray().then((data) => {
        const path = 'inventory.csv';
        const csvWriter = createCsvWriter({
            path: path,
            header: [{ id: 'name', title: 'Name' }, { id: 'quantity', title: 'Quantity' },]
        });

        try {
            csvWriter.writeRecords(data)
                .then(() => { res.download(path); });
        }
        catch (error) {
            console.log(error);
        }
        res.status(200)

    })
}
