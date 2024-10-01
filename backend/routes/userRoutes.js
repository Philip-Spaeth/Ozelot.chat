// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { updateUser, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/update').put(protect, updateUser);
router.route('/delete').delete(protect, deleteUser);

module.exports = router;
