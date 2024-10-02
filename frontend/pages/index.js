// frontend/pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatRoom from '../components/ChatRoom';
import withAuth from '../hoc/withAuth';
import styles from '../styles/Home.module.css';
import Head from 'next/head';  // Importiere die Head-Komponente

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ozelot.chat</title>  {/* Seitentitel */}
        <link rel="icon" href="/favicon-32x32.png" />  {/* Favicon */}
      </Head>
      <Sidebar />
      <ChatRoom />
    </div>
  );
}

export default withAuth(Home);
