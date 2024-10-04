// frontend/context/UserContext.js
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { io } from 'socket.io-client';
import { getBackendURL } from '../utils/getBackendURL';

export const UserContext = createContext();

const BACKEND_URL = getBackendURL();

let socket;

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined); // Anfangszustand: undefined
  const [loading, setLoading] = useState(true); // Ladezustand
  const [messages, setMessages] = useState([]); // Leeres Array
  const router = useRouter();

  useEffect(() => {
    // Token aus dem lokalen Speicher abrufen
    const token = localStorage.getItem('token');
    if (token) {
      // Hier solltest du den Benutzernamen aus dem Token oder einer API abrufen
      setUser({ token, username: 'DeinBenutzername' }); // Beispiel: Füge den Benutzernamen hinzu
    } else {
      setUser(null);
    }
    setLoading(false); // Ladezustand beenden
  }, []);

  useEffect(() => {
    if (user && user.token) {
      // Initialisiere Socket.io Verbindung
      socket = io(BACKEND_URL, {
        auth: {
          token: user.token,
        },
      });

      // Empfang von Nachrichten
      socket.on('receiveMessage', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      // Fehlerbehandlung
      socket.on('error', (error) => {
        console.error('Socket.io Fehler:', error);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [user]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (user && user.token) {
        try {
          const res = await fetch(`${BACKEND_URL}/api/messages`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.token}`,
            },
          });

          if (res.ok) {
            const data = await res.json();
            setMessages(data);
          } else {
            console.error('Fehler beim Abrufen der Nachrichten:', res.statusText);
          }
        } catch (error) {
          console.error('Fehler beim Abrufen der Nachrichten:', error);
        }
      }
    };

    fetchMessages();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setMessages([]); // Nachrichten löschen
    router.push('/login');
    if (socket) socket.disconnect();
  };

  const sendMessage = (content) => {
    if (socket) {
      socket.emit('sendMessage', content);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout, loading, messages, sendMessage }}>
      {children}
    </UserContext.Provider>
  );
};
