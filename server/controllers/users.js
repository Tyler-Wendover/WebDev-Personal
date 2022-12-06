const express = require('express');
const users = require('../models/users');
const mongodb = require('mongodb');
const { Router } = require('express');

const app = express.Router();

app
    .get('/', (req, res, next) => {
        users.getUsers()
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        users.getUser(+req.params.id)
        .then(user => {
            if(user) {
                res.status(200).send(user);
            } else {
                res.status(404).send('User not found');
            }
        })
        .catch(next);
    })
    .post('/', (req, res, next) => {
        users.createUser(req.body)
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        users.deleteUser(req.params.id)
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .post('/seed', (req, res, next) => {
        users.seed()
        .then(x=> res.status(200).send(x))
        .catch(next);
    });

module.exports = app; 