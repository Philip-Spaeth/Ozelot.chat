// backend/server.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize, connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Authentifizierungsrouten
app.use('/api/auth', authRoutes);

// Nachrichtenrouten
app.use('/api/messages', messageRoutes);

// Fehler-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Etwas ist schief gelaufen!');
});

// Erstelle den HTTP-Server
const server = http.createServer(app);

// Integriere Socket.io
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Passe dies entsprechend deinem Frontend an
    methods: ['GET', 'POST'],
  },
});

// Middleware für Socket.io Authentifizierung
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Message = require('./models/Message');

io.use(async (socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error('Kein Token vorhanden'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return next(new Error('Benutzer nicht gefunden'));
    }
    socket.user = user;
    next();
  } catch (err) {
    console.error('Socket.io Authentifizierungsfehler:', err);
    next(new Error('Ungültiges Token'));
  }
});

// Socket.io Verbindungs-Event
io.on('connection', (socket) => {
  console.log(`Benutzer verbunden: ${socket.user.username}`);

  // Empfang von Nachrichten
  socket.on('sendMessage', async (content) => {
    if (!content) return;

    try {
      // Speichern der Nachricht in der Datenbank
      const newMessage = await Message.create({
        sender: socket.user.username,
        content,
        timestamp: new Date(),
        userId: socket.user.id,
      });

      // Senden der Nachricht an alle verbundenen Clients
      io.emit('receiveMessage', newMessage);
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      socket.emit('error', 'Nachricht konnte nicht gesendet werden');
    }
  });

  // Trennen der Verbindung
  socket.on('disconnect', () => {
    console.log(`Benutzer getrennt: ${socket.user.username}`);
  });
});

// Starte den Server
const PORT = process.env.PORT || 5000;

connectDB()
  .then(async () => {
    // Importiere die Modelle, um sicherzustellen, dass sie registriert sind
    require('./models/User');
    require('./models/Message');

    // Synchronisiere die Modelle mit der Datenbank
    await sequelize.sync({ alter: true }); // 'alter: true' passt die Tabellen automatisch an
    console.log('Datenbank synchronisiert.');

    server.listen(PORT, () => {
      console.log(`Server läuft auf Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Fehler beim Starten des Servers:', err);
  });
