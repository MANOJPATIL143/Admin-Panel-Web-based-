const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // other fields
}, { timestamps: true });

module.exports = mongoose.model('Provider', ProviderSchema);
