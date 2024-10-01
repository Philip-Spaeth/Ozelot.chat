// frontend/pages/index.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EntryList from '../components/EntryList';
import EntryForm from '../components/EntryForm';

export default function Home({ user }) {
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) {
      // Warten, bis der Authentifizierungsstatus geladen ist
      return;
    }

    if (!user) {
      router.push('/login');
    } else {
      fetchEntries();
    }
  }, [user]);

  const fetchEntries = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/entries', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setEntries(data);
      } else {
        const data = await res.json();
        setMessage(data.message || 'Fehler beim Abrufen der Einträge.');
      }
    } catch (error) {
      console.error('Fehler beim Abrufen der Einträge:', error);
      setMessage('Serverfehler');
    }
  };

  const handleCreate = async (formData) => {
    try {
      const res = await fetch('http://localhost:5000/api/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          number: Number(formData.number),
        }),
      });

      if (res.ok) {
        fetchEntries();
      } else {
        const data = await res.json();
        setMessage(data.message || 'Fehler beim Erstellen des Eintrags.');
      }
    } catch (error) {
      console.error('Fehler beim Erstellen des Eintrags:', error);
      setMessage('Serverfehler');
    }
  };

  // Falls der Benutzer noch nicht geladen ist, nichts rendern
  if (user === undefined) {
    return null;
  }

  return (
    <div>
      <h1>Einträge</h1>
      {message && <p>{message}</p>}
      <EntryForm onSubmit={handleCreate} />
      <EntryList entries={entries} />
    </div>
  );
}
