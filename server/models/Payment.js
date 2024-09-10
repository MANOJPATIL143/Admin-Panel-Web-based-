const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
});

module.exports = mongoose.model('Payment', PaymentSchema);
