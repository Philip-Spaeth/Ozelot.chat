// frontend/pages/edit.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import EntryForm from '../components/EntryForm';

export default function EditEntry() {
  const router = useRouter();
  const { id } = router.query;

  const [entry, setEntry] = useState(null);
  const [message, setMessage] = useState('');

  const fetchEntry = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/entries/${id}`);
      if (res.ok) {
        const data = await res.json();
        setEntry(data);
      } else {
        setMessage('Eintrag nicht gefunden.');
      }
    } catch (error) {
      console.error('Fehler beim Abrufen des Eintrags:', error);
      setMessage('Serverfehler');
    }
  };

  useEffect(() => {
    if (id) fetchEntry();
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      const res = await fetch(`http://localhost:5000/api/entries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          number: Number(formData.number),
        }),
      });

      if (res.ok) {
        setMessage('Eintrag erfolgreich aktualisiert!');
        router.push('/');
      } else {
        const data = await res.json();
        setMessage(data.message || 'Fehler beim Aktualisieren des Eintrags.');
      }
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Eintrags:', error);
      setMessage('Serverfehler');
    }
  };

  if (message) {
    return <p>{message}</p>;
  }

  if (!entry) return <p>Lade Eintrag...</p>;

  return (
    <div>
      <h1>Eintrag bearbeiten</h1>
      <EntryForm initialData={entry} onSubmit={handleUpdate} />
    </div>
  );
}
