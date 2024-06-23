const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    try {
        const user = new User({ username, email, passwordHash });
        await user.save();
        res.status(201).send({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.passwordHash)) {
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
        res.send({ token });
    } else {
        res.status(401).send({ message: "Invalid email or password" });
    }
});

module.exports = router;
