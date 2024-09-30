// frontend/components/EntryList.js
import EntryItem from './EntryItem';

export default function EntryList({ entries }) {
  if (!entries.length) {
    return <p>Keine Einträge vorhanden.</p>;
  }

  return (
    <ul>
      {entries.map((entry) => (
        <EntryItem key={entry.id} entry={entry} />
      ))}
    </ul>
  );
}
