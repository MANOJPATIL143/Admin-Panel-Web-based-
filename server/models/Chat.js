const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  messages: [
    {
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      message: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Chat', ChatSchema);
