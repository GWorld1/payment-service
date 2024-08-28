const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const paymentRoutes = require('./routes/payment');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/payments', paymentRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes will be added here

app.listen(PORT, () => {
  console.log(`Payment service is running on port ${PORT}`);
});