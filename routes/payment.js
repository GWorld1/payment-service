const express = require('express');
const router = express.Router();
const Payment = require('../model/payment');

router.post('/create-payment', async (req, res) => {
  console.log(req.body);
  try {
    const { amount, currency, name, email, product ,paymentIntent } = req.body;

    

    const payment = new Payment({
      name: name,
      email: email,
      product: product,
      amount:amount,
      currency: currency,
      paymentIntent: paymentIntent
    });

    await payment.save();

    console.log(payment);
    res.json({ message: 'Payment created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/get-payments/:email', async (req, res) => {
  try {
    const {email} = req.params;
    const payments = await Payment.find({
      email: email,
    });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;