// backend/controllers/messageController.js
const Message = require('../models/Message');
const User = require('../models/User');

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'email'],
        },
      ],
      order: [['timestamp', 'ASC']],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Fehler beim Abrufen der Nachrichten:', error);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

const createMessage = async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id; // Der authentifizierte Benutzer ist im req.user

  if (!content) {
    return res.status(400).json({ message: 'Inhalt ist erforderlich' });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Benutzer nicht gefunden' });
    }

    const newMessage = await Message.create({
      sender: user.username,
      content,
      timestamp: new Date(),
      userId,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Fehler beim Erstellen der Nachricht:', error);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

module.exports = {
  getAllMessages,
  createMessage,
};
