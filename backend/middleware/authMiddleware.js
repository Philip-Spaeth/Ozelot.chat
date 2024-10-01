// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  // Token aus den Headern extrahieren
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Kein Token, Autorisierung verweigert' });
  }

  try {
    // Token verifizieren
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Benutzer aus der Datenbank abrufen
    req.user = await User.findByPk(decoded.id, { attributes: ['id', 'username', 'email'] });
    next();
  } catch (error) {
    console.error('Token ist nicht gültig');
    res.status(401).json({ message: 'Token ist nicht gültig' });
  }
};
