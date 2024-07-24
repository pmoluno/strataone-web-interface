const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST route for user registration
router.post('/sign-up', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingEmail = await User.findOne({ email }).lean();
    if (existingEmail) {
      return res.status(409).json({ message: "Email address already exists." });
    }

    const existingUsername = await User.findOne({ username }).lean();
    if (existingUsername) {
      return res.status(409).json({ message: "Username already exists." });
    }

    const userData = { email, username, password };
    const user = await User.create(userData);

    req.session.userId = user._id;
    res.status(201).json({ message: "Registration successful." });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: "An error occurred during registration." });
  }
});

// POST route for user login
router.post('/sign-in', async (req, res) => {
  try {
    const { logemail, logpassword } = req.body;

    if (!logemail || !logpassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.authenticate(logemail, logpassword);
    if (!user) {
      return res.status(401).json({ message: "Wrong email or password." });
    }

    req.session.userId = user._id;
    res.json({ message: "Sign in successful." });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "An error occurred during sign in." });
  }
});

// GET route for user logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: "An error occurred during logout." });
    }
    res.json({ message: "Logout successful." });
  });
});

module.exports = router;