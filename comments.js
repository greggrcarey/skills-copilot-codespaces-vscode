//create web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const comments = require('./comments.json');
const _ = require('lodash');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//get comments
app.get('/api/comments', (req, res) => {
    res.json(comments);
});

//post comments
app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
    };
    // Rest of the code...
});
