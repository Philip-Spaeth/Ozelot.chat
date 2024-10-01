// backend/controllers/userController.js
const User = require('../models/User');
const Message = require('../models/Message');

const updateUser = async (req, res) => {
  const userId = req.user.id;
  const { username, email } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'Benutzer nicht gefunden' });

    // Optional: Validierung hinzufügen

    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.status(200).json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        // Weitere Felder, die du zurückgeben möchtest
      },
    });
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Benutzers:', error);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'Benutzer nicht gefunden' });

    // Lösche alle Nachrichten des Benutzers
    await Message.destroy({ where: { userId } });

    // Lösche den Benutzer
    await user.destroy();

    res.status(200).json({ message: 'Benutzer und alle zugehörigen Daten wurden gelöscht.' });
  } catch (error) {
    console.error('Fehler beim Löschen des Benutzers:', error);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

module.exports = {
  updateUser,
  deleteUser,
};
