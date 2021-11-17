const express = require("express");

const path = require("path");

const app = express();

const port = process.env.PORT || 4005

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/index.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../server/index.js'));
});

// app.get('/images/header.jpg', (req, res) => {
//     res.sendFile(path.join(__dirname, '../images/header.jpg'));
// });

// 
app.use('/server/index.js', express.static(path.join(__dirname, '../server/index.js')));

app.use('/images', express.static(path.join(__dirname, '../images')));


app.listen(port, () => {
    console.log(`This app is lit on server ${port}`)
});