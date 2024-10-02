// frontend/components/Sidebar.js
import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  // Beispielhafte Chat-Items
  const chatItems = [
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
  ];

  // Zustand für den Suchbegriff
  const [searchTerm, setSearchTerm] = useState('');

  // Filtere die Chat-Items basierend auf dem Suchbegriff
  const filteredChatItems = chatItems.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.sidebar}>
      {/* Suchleiste */}
      <input
        type="text"
        placeholder="search by username..."
        className={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Chat-Liste */}
      <ul className={styles.chatList}>
        {filteredChatItems.map((chat) => (
          <li key={chat.id} className={styles.chatItem}>
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;