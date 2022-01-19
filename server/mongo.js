const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config({path:'config.env'})

async function mongoConnect (){
    const mongoURI = process.env.MONGO_URI
    const client = new mongodb.MongoClient(mongoURI);
    try{
        await client.connect();
        await  listDatabases(client);
    } catch(err){
        console.log("error: mongoDb could not connect, %w", err)
    } finally{
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

mongoConnect().catch(console.error);

// module.exports = {mongoConnect}