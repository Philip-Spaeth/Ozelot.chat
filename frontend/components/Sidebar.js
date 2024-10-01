// frontend/components/Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  // Beispielhafte Chat-Items
  const chatItems = [
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
  ];

  return (
    <div className={styles.sidebar}>
      <ul className={styles.chatList}>
        {chatItems.map((chat) => (
          <li key={chat.id} className={styles.chatItem}>
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
