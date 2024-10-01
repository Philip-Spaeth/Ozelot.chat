// frontend/components/MessageList.js
import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../context/UserContext';
import MessageItem from './MessageItem';
import styles from './MessageList.module.css';

const MessageList = () => {
  const { messages } = useContext(UserContext);
  const endOfMessagesRef = useRef(null); // Ref für das Ende der Nachrichtenliste

  useEffect(() => {
    // Scrollt zum Ende der Nachrichtenliste, wenn sich die Nachrichten ändern
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles.messageList}>
      {messages && messages.length > 0 ? (
        messages.map((msg) => <MessageItem key={msg.id} message={msg} />)
      ) : (
        <p className={styles.noMessages}>Keine Nachrichten vorhanden.</p>
      )}
      {/* Dummy-Div zum Scrollen */}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;
