// frontend/components/MessageInput.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import styles from './MessageInput.module.css';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useContext(UserContext); // sendMessage ist im UserContext definiert

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className={styles.messageForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Nachricht eingeben..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Senden
      </button>
    </form>
  );
};

export default MessageInput;
