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

// Alle Einträge abrufen
router.get('/', getEntries);

// Neuen Eintrag erstellen
router.post('/', createEntry);

// Eintrag nach ID abrufen
router.get('/:id', getEntryById);

// Eintrag aktualisieren
router.put('/:id', updateEntry);

// Eintrag löschen
router.delete('/:id', deleteEntry);

module.exports = router;
