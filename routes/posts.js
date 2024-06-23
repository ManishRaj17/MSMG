const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

// Create a new post
router.post('/', authenticateToken, async (req, res) => {
    const { title, body } = req.body;
    const post = new Post({ title, body, author: req.user.id });
    await post.save();
    res.status(201).send(post);
});

// Edit a post
router.put('/:id', authenticateToken, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post.author !== req.user.id) return res.sendStatus(403);

    post.title = req.body.title;
    post.body = req.body.body;
    await post.save();
    res.send(post);
});

// Delete a post
router.delete('/:id', authenticateToken, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post.author !== req.user.id) return res.sendStatus(403);

    await post.remove();
    res.send({ message: "Post deleted" });
});

module.exports = router;
