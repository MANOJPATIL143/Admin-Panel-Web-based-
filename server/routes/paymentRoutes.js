const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// Get all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find().populate('customerId').populate('serviceId');
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
