const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
});

module.exports = mongoose.model('Review', ReviewSchema);
