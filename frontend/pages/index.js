// frontend/pages/index.js
import { useState, useEffect } from 'react';
import EntryList from '../components/EntryList';
import EntryForm from '../components/EntryForm';

export default function Home() {
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState('');

  const fetchEntries = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/entries');
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error('Fehler beim Abrufen der Einträge:', error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleCreate = async (formData) => {
    try {
      const res = await fetch('http://localhost:5000/api/entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  return (
    <div>
      <h1>Einträge</h1>
      {message && <p>{message}</p>}
      <EntryForm onSubmit={handleCreate} />
      <EntryList entries={entries} />
    </div>
  );
}
