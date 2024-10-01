// frontend/components/MessageItem.js
import React from 'react';
import styles from './MessageItem.module.css';

const MessageItem = ({ message }) => {
  const { sender, content, timestamp } = message;

  return (
    <div className={styles.messageItem}>
      <div className={styles.messageHeader}>
        <span className={styles.sender}>{sender}</span>
        <span className={styles.timestamp}>{new Date(timestamp).toLocaleTimeString()}</span>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default MessageItem;
