// routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Add a new service
router.post('/', async (req, res) => {
  try {
    const { name, price, category, subcategory } = req.body;
    const newService = new Service({ name, price, category, subcategory });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an existing service
router.put('/:id', async (req, res) => {
  try {
    const { name, price, category, subcategory } = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { name, price, category, subcategory },
      { new: true, runValidators: true }
    );
    if (!updatedService) return res.status(404).json({ msg: 'Service not found' });
    res.json(updatedService);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a service by ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ msg: 'Service not found' });
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
