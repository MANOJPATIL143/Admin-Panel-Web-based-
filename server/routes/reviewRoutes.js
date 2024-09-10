const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Update a review
router.put('/:id', async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { rating, comment },
      { new: true, runValidators: true }
    );
    if (!updatedReview) return res.status(404).json({ msg: 'Review not found' });
    res.json(updatedReview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) return res.status(404).json({ msg: 'Review not found' });
    res.json({ msg: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('providerId').populate('customerId').populate('serviceId');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
