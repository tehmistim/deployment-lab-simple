const express = require("express");

const path = require("path");

const app = express();

const port = process.env.PORT || 4005

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


app.listen(port, () => {
    console.log(`This app is lit on server ${port}`)
});