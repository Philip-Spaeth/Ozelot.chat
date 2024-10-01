// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Registrierung
router.post('/register', register);

// Anmeldung
router.post('/login', login);

module.exports = router;
