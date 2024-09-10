const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// Get chat history
router.get('/:customerId/:providerId', async (req, res) => {
  try {
    const { customerId, providerId } = req.params;
    const chat = await Chat.findOne({ customerId, providerId });
    if (!chat) return res.status(404).json({ msg: 'Chat not found' });
    res.json(chat.messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add message
router.post('/:customerId/:providerId', async (req, res) => {
  try {
    const { customerId, providerId } = req.params;
    const { senderId, message } = req.body;

    let chat = await Chat.findOne({ customerId, providerId });
    if (!chat) {
      chat = new Chat({ customerId, providerId, messages: [] });
    }
    chat.messages.push({ senderId, message });
    await chat.save();
    res.json(chat.messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
