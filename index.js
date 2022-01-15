const http = require("http");
const path = require("path");
const fs = require("fs");
var bodyParser = require('body-parser');


// const multer = require("multer")
// const upload = multer({ dest: `./public/uploads` })

// const handleError = (err, res) => {
//     res
//         .status(500)
//         .contentType("text/plain")
//         .end("Oops! Something went wrong!");
// };

const express = require("express");
const app = express();

app.get("/", function(req,res){
res.render("list")
// res.sendFile(__dirname + "/public/index.html");

});

//view engine that helps with templating. Simplest to use
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, function() {
    console.log(`Server is running on local port ${PORT}`);
});

app.post("/", function(req,res){
    var item = req.body.newitem;
    console.log(item)
});

