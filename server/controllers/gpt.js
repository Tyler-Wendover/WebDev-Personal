const express = require('express');
const { Router } = require('express');

const app = express.Router();

app
    .get('/', (req, res, next) => {
        res.status(200).send('Hello World');
    })
    .post('/:title', (req, res, next) => {
        aiContent.createContent(+req.params.title)
        .then(x => res.status(200).send(x))
        .catch(next);
    });

module.exports = app;
