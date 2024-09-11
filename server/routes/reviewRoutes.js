const express = require('express');
const router = express.Router();
const Review = require('../models/Review'); // Import the Review model
const Customer = require('../models/Customer'); // Import the Customer model
const Provider = require('../models/Provider'); // Import the Provider model
const Service = require('../models/Service'); // Import the Service model

// Add a new review
router.post('/add', async (req, res) => {
  try {
    const { serviceId, providerId, customerId, rating, comment } = req.body;

    // Validate serviceId
    const service = await Service.findById(serviceId);
    if (!service) return res.status(400).json({ message: 'Service not found' });

    // Validate providerId
    const provider = await Provider.findById(providerId);
    if (!provider) return res.status(400).json({ message: 'Provider not found' });

    // Validate customerId
    const customer = await Customer.findById(customerId);
    if (!customer) return res.status(400).json({ message: 'Customer not found' });

    // Create and save the review
    const newReview = new Review({ serviceId, providerId, customerId, rating, comment });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('serviceId providerId customerId');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('serviceId providerId customerId');
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a review
router.put('/:id', async (req, res) => {
  try {
    const { serviceId, providerId, customerId, rating, comment } = req.body;

    // Validate serviceId
    const service = await Service.findById(serviceId);
    if (serviceId && !service) return res.status(400).json({ message: 'Service not found' });

    // Validate providerId
    const provider = await Provider.findById(providerId);
    if (providerId && !provider) return res.status(400).json({ message: 'Provider not found' });

    // Validate customerId
    const customer = await Customer.findById(customerId);
    if (customerId && !customer) return res.status(400).json({ message: 'Customer not found' });

    // Update the review
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, { serviceId, providerId, customerId, rating, comment }, { new: true });
    if (!updatedReview) return res.status(404).json({ message: 'Review not found' });
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
