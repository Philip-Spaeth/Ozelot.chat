// backend/controllers/entryController.js
const Entry = require('../models/Entry');

// Neuen Eintrag erstellen
exports.createEntry = async (req, res) => {
  try {
    const { name, number } = req.body;

    if (!name || number === undefined || number === '') {
      return res.status(400).json({ message: 'Bitte alle Felder ausfüllen' });
    }

    const newEntry = await Entry.create({ name, number });

    res.status(201).json(newEntry);
  } catch (error) {
    console.error(`Fehler beim Erstellen des Eintrags: ${error.message}`);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

// Alle Einträge abrufen
exports.getEntries = async (req, res) => {
  try {
    const entries = await Entry.findAll();
    res.json(entries);
  } catch (error) {
    console.error(`Fehler beim Abrufen der Einträge: ${error.message}`);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

// Eintrag nach ID abrufen (NEU HINZUGEFÜGT)
exports.getEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Entry.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Eintrag nicht gefunden' });
    }
    res.json(entry);
  } catch (error) {
    console.error(`Fehler beim Abrufen des Eintrags: ${error.message}`);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

// Eintrag aktualisieren
exports.updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, number } = req.body;

    const entry = await Entry.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Eintrag nicht gefunden' });
    }

    if (!name || number === undefined || number === '') {
      return res.status(400).json({ message: 'Bitte alle Felder ausfüllen' });
    }

    entry.name = name;
    entry.number = number;
    await entry.save();

    res.json(entry);
  } catch (error) {
    console.error(`Fehler beim Aktualisieren des Eintrags: ${error.message}`);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

// Eintrag löschen
exports.deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await Entry.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Eintrag nicht gefunden' });
    }

    await entry.destroy();
    res.json({ message: 'Eintrag gelöscht' });
  } catch (error) {
    console.error(`Fehler beim Löschen des Eintrags: ${error.message}`);
    res.status(500).json({ message: 'Serverfehler' });
  }
};
