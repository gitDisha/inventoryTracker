const http = require("http");
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require("body-parser");
const path = require("path");
const mongoConnection = require('./server/mongoSetup')

// const fs = require("fs");
const express = require("express");
const app = express();

dotenv.config({ path: 'config.env' })

//log request
app.use(morgan('tiny'))

//parsing requests
app.use(bodyParser.urlencoded({ extended: true }))

//router
app.use(require('./server/router'))

//view engine that helps with templating. Simplest to use
app.use(express.urlencoded({ extended: true }))

//PORT
const PORT = process.env.PORT || 3000

http.createServer(app).listen(PORT, function () {
    console.log(`Server is running on local port ${PORT}`)
});

mongoConnection.mongoConnect()