const http = require("http");
const path = require("path");
const fs = require("fs");

const multer = require("multer")
const upload = multer({ dest: `./public/uploads` })

const handleError = (err, res) => {
    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};


const express = require("express");

const app = express();

app.get("/", express.static(path.join(__dirname, "./public")));

const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, function() {
    console.log(`Server is running on local port ${PORT}`);
});

app.post('/public/uploads', upload.single('uploaded_file'), function(req, res) {
    // const tempPath = req.file.path;
    // const targetPath = path.join(__dirname, "./uploads/image.png");

    // if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    //     fs.rename(tempPath, targetPath, err => {
    //         if (err) return handleError(err, res);

    //         res
    //             .status(200)
    //             .contentType("text/plain")
    //             .end("File uploaded!");
    //     });
    // } else {
    //     fs.unlink(tempPath, err => {
    //         if (err) return handleError(err, res);

    //         res
    //             .status(403)
    //             .contentType("text/plain")
    //             .end("Only .png files are allowed!");
    //     });
    console.log(req.file, req.body)
    res.send("Image uploaded")
        // }
});

app.get("/image.png", (req, res) => {
    res.sendFile(path.join(__dirname, "./uploads/image.png"));
});

