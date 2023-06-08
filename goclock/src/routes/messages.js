const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// GET /api/messages - Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/messages - Create a new message
router.post('/', async (req, res) => {
  try {
    const { orderId, to, from, quantity, address, transporter } = req.body;

    const newMessage = new Message({
      orderId,
      to,
      from,
      quantity,
      address,
      transporter,
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/messages/:id - Update a message
router.put('/:id', async (req, res) => {
  try {
    const { orderId, to, from, quantity, address, transporter } = req.body;
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    message.orderId = orderId;
    message.to = to;
    message.from = from;
    message.quantity = quantity;
    message.address = address;
    message.transporter = transporter;

    const updatedMessage = await message.save();
    res.json(updatedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/messages/:id - Delete a message
router.delete('/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    await message.remove();
    res.json({ message: 'Message deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
