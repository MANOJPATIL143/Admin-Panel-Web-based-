const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin Login
const HARDCODED_USERNAME = 'admin';
const HARDCODED_PASSWORD = 'password123'; // Plaintext for demonstration; not secure!

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', req.body); // Debug line
  try {
    // Check hardcoded credentials
    if (username !== HARDCODED_USERNAME || password !== HARDCODED_PASSWORD) {
      return res.status(400).json({ msg: 'Invalid username or password' });
    }
    // Generate a token (replace with proper secret key management)
    const token = jwt.sign({ username }, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Error during login:', err); // Debug line
    res.status(500).json({ error: err.message });
  }
});


// Admin Dashboard: Fetch statistics
router.get('/dashboard', async (req, res) => {
  try {
    // Example: Fetch total customers and service providers from database
    const totalCustomers = await Customer.countDocuments();
    const totalServiceProviders = await ServiceProvider.countDocuments();

    res.json({ totalCustomers, totalServiceProviders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
