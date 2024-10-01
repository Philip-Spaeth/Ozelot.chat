// backend/routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const { getAllMessages, createMessage } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getAllMessages).post(protect, createMessage);

module.exports = router;
