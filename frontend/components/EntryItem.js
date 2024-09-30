// frontend/components/EntryItem.js
import Link from 'next/link';

export default function EntryItem({ entry }) {
  const handleDelete = async () => {
    if (confirm('Möchtest du diesen Eintrag wirklich löschen?')) {
      try {
        const res = await fetch(`http://localhost:5000/api/entries/${entry.id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          window.location.reload();
        } else {
          alert('Fehler beim Löschen des Eintrags.');
        }
      } catch (error) {
        console.error('Fehler beim Löschen:', error);
      }
    }
  };

  // Formatierung des Datums
  const formattedDate = new Date(entry.createdAt).toLocaleString('de-DE');

  return (
    <li>
      <p>
        <strong>Name:</strong> {entry.name}<br />
        <strong>Zahl:</strong> {entry.number}
      </p>
      <div className="entry-item">
        <div className="entry-item-buttons">
          <Link href={`/edit?id=${entry.id}`}>
            <button>Bearbeiten</button>
          </Link>
          <button onClick={handleDelete}>Löschen</button>
        </div>
        <small className="entry-item-date">Hinzugefügt am: {formattedDate}</small>
      </div>
    </li>
  );
}
