const express = require('express');
const posts = require('../models/posts');
const mongodb = require('mongodb');
const { Router } = require('express');

const app = express.Router();

// get posts from db
app
    .get('/', async (req, res, next) => {
        posts.getPosts()
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        posts.getPost(+req.params.id)
        .then(post => {
            if(post) {
                res.status(200).send(post);
            } else {
                res.status(404).send('Post not found');
            }
        })
        .catch(next);
    })
    .post('/', (req, res, next) => {
        posts.createPost(req.body)
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        posts.deletePost(req.params.id)
        .then(x => res.status(200).send(x))
        .catch(next);
    })
    .post('/seed', (req, res, next) => {
        posts.seed()
        .then(x=> res.status(200).send(x))
        .catch(next);
    });



module.exports = app;