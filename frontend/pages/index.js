// frontend/pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatRoom from '../components/ChatRoom';
import withAuth from '../hoc/withAuth';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ChatRoom />
    </div>
  );
}

export default withAuth(Home);
