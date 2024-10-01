// frontend/pages/settings.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import withAuth from '../hoc/withAuth';
import styles from '../styles/settings.module.css';

function Settings() {
  const { user, setUser, handleLogout } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(''); // Optional: Zur Bestätigung
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Funktion zum Aktualisieren der Benutzerdaten
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/api/users/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ username, email }),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user); // Aktualisiere den Benutzer im Kontext
        setMessage('Einstellungen erfolgreich aktualisiert.');
      } else {
        const errData = await res.json();
        setError(errData.message || 'Fehler beim Aktualisieren der Einstellungen.');
      }
    } catch (err) {
      setError('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  // Funktion zum Löschen des Accounts
  const handleDeleteAccount = async () => {
    const confirm = window.confirm('Bist du sicher, dass du deinen Account und alle zugehörigen Daten löschen möchtest? Diese Aktion kann nicht rückgängig gemacht werden.');

    if (!confirm) return;

    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const res = await fetch('http://localhost:5000/api/users/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (res.ok) {
        setMessage('Dein Account wurde erfolgreich gelöscht.');
        handleLogout(); // Logge den Benutzer aus
      } else {
        const errData = await res.json();
        setError(errData.message || 'Fehler beim Löschen des Accounts.');
      }
    } catch (err) {
      setError('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h1>Einstellungen</h1>
    </div>
  );
}

export default withAuth(Settings);
