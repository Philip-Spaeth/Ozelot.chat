// frontend/pages/_app.js
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // Token aus dem lokalen Speicher abrufen
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  };

  return (
    <div>
      <nav>
        {user ? (
          <>
            <button onClick={handleLogout}>Abmelden</button>
          </>
        ) : (
          <></>
        )}
      </nav>
      <Component {...pageProps} user={user} setUser={setUser} />
    </div>
  );
}

export default MyApp;
