// backend/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { DateTime } = require('luxon'); // Luxon importieren

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Überprüfe, ob der Benutzer bereits existiert
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ message: 'Benutzer existiert bereits' });
    }

    // Passwort hashen
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Neuen Benutzer erstellen
    user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Token erstellen
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error(`Fehler bei der Registrierung: ${error.message}`);
    res.status(500).json({ message: 'Serverfehler' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Benutzer suchen
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Ungültige Anmeldedaten' });
    }

    // Aktuelle Zeit in UTC
    const currentTime = DateTime.utc();

    // Überprüfen, ob das Konto gesperrt ist und ob die Sperrzeit abgelaufen ist
    if (user.lockUntil) {
      const lockUntilTime = DateTime.fromJSDate(user.lockUntil);

      if (lockUntilTime > currentTime) {
        // Konto ist noch gesperrt
        return res.status(403).json({ 
          message: `Konto gesperrt bis ${lockUntilTime.toLocaleString(DateTime.DATETIME_FULL)}. Bitte versuche es später erneut.` 
        });
      } else {
        // Sperre aufheben
        user.isLocked = false;
        user.failedAttempts = 0;
        user.lockUntil = null;
        await user.save();
      }
    }

    // Passwort überprüfen
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Fehlversuch zählen
      user.failedAttempts += 1;

      if (user.failedAttempts >= 5) {
        user.isLocked = true;
        // Setze lockUntil auf 15 Minuten in der Zukunft in UTC
        user.lockUntil = DateTime.utc().plus({ minutes: 15 }).toJSDate();
        await user.save();
        return res.status(403).json({ message: 'Konto gesperrt. Bitte versuche es in 15 Minuten erneut.' });
      }

      await user.save();
      return res.status(400).json({ message: 'Ungültige Anmeldedaten' });
    }

    // Bei erfolgreicher Anmeldung die Fehlversuche zurücksetzen
    if (user.failedAttempts > 0) {
      user.failedAttempts = 0;
      user.isLocked = false;
      user.lockUntil = null;
      await user.save();
    }

    // Token erstellen
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(`Fehler bei der Anmeldung: ${error.message}`);
    res.status(500).json({ message: 'Serverfehler' });
  }
};
