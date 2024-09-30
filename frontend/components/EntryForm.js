// frontend/components/EntryForm.js
import { useState, useEffect } from 'react';

export default function EntryForm({ initialData = null, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        number: initialData.number || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Zahl:</label><br />
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Speichern</button>
    </form>
  );
}
