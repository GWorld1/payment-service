const mongoose = require('mongoose');
// Define the schema for an individual item

const paymentSchema = new mongoose.Schema({
  name: { type:String, required: true },
  email: { type: String, required: true },
  product: { type: [String], required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  paymentIntent: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);