const express = require("express");

const path = require("path");

const server = express();

const port = process.env.PORT || 4005;

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '26997771d76243478b981cc281ecd194',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("NO TEHM");

server.get('/get', function(req,res) {
    res.send('Request')
    if(!names.includes('')){
        rollbar.critical('Tehm they trying the API')
    }
});

server.post('/post', function(req,res) {
    res.send('Request')
    if(!names.includes('Tehm')){
        rollbar.critical('Tehm be careful they pushing new stuff to the API')
    }
});

server.put('/put', function(req,res) {
    res.send('Request')
    if(!names.includes('Tehm')){
        rollbar.critical('Tehm they updating stuff on the API')
    }
});

server.delete('/delete', function(req,res) {
    res.send('Delete Request')
    .catch((err) => {
        rollbar.error('DELETE: Student cannot be deleted')
    })
});

// server.put('/put', function(req,res) {
//     rollbar.info('Someone tried to update')
//     res.send('Update data')
//     .catch((err) => {
//         const Error = err
//         rollbar.error(Error)
//     })
// });

// server.post('/post', function(req,res) {
//     let name = req.body
//     rollbar.info('Someone tried to post')
//     res.send('Post data')
//     MrJamesArray.push(name)
//     .catch((err) => {
//         const Error = err
//         rollbar.error(Error)
//     })
// });

// server.delete('/delete', function(req,res) {
//     let name = req.body
//     rollbar.info('Someone made an attempt to delete a user')
//     res.send('Delete data')
//     db("NAMES")
//     .insert(name)
//     .then((ids) => {
//       res.status(201).json(ids);
//     })
//     .catch((err) => {
//         const Error = err
//         console.log('ERROR', Error)
//         rollbar.error(Error)
//     })
// })


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
    
});

server.get('/index.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'));
});

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../server/index.js'));
});

server.get('/images/header.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../images/header.jpg'));
});

// 
server.use('/server/index.js', express.static(path.join(__dirname, '../server/index.js')));

server.use('/images', express.static(path.join(__dirname, '../images')));


server.use(rollbar.errorHandler());


server.listen(port, () => {
    console.log(`This app is lit on server ${PORT}`)
});