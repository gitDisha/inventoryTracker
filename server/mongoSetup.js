const mongodb = require('mongodb')
const dotenv = require('dotenv');
const res = require('express/lib/response');
dotenv.config({path:'config.env'})

async function mongoConnect (){
    const mongoURI = process.env.MONGO_URI
    const client = new mongodb.MongoClient(mongoURI);
    try{
        await client.connect();
    } catch(err){
        console.log("error: mongoDb could not connect, %w", err)
    } finally{
        await client.close();
    }
}

mongoConnect().catch(console.error);

module.exports = {mongoConnect}