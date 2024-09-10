const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// Get notifications for a user
router.get('/:userId', async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Send a notification
router.post('/', async (req, res) => {
  try {
    const { userId, message } = req.body;
    const notification = new Notification({ userId, message });
    await notification.save();
    res.json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark notification as read
router.put('/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!notification) return res.status(404).json({ msg: 'Notification not found' });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
