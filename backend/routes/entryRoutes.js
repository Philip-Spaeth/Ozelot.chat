// backend/routes/entryRoutes.js
const express = require('express');
const router = express.Router();
const {
  createEntry,
  getEntries,
  getEntryById,
  updateEntry,
  deleteEntry,
} = require('../controllers/entryController');
const { protect } = require('../middleware/authMiddleware');

// Alle Einträge abrufen
router.get('/', protect, getEntries);

// Neuen Eintrag erstellen
router.post('/', protect, createEntry);

// Eintrag nach ID abrufen
router.get('/:id', protect, getEntryById);

// Eintrag aktualisieren
router.put('/:id', protect, updateEntry);

// Eintrag löschen
router.delete('/:id', protect, deleteEntry);

module.exports = router;
