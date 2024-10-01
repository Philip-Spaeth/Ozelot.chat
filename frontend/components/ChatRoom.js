// frontend/components/ChatRoom.js
import React, { useContext } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import styles from './ChatRoom.module.css';
import { UserContext } from '../context/UserContext';

const ChatRoom = () => {
  const { messages } = useContext(UserContext);

  return (
    <div className={styles.chatRoom}>
      <h2 className={styles.heading}>Chat Room</h2>
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
