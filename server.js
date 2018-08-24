const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3100;
const api = require('./server/routes/api');
const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//to load api calls
app.use('/api', api);

// to load angular-app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//start the server 
app.listen(port, function(){
    console.log("Server in running on port:" + port);
});

