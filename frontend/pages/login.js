// frontend/pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Link importieren
import styles from '../styles/auth.module.css';

function Login({ setUser }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        setUser({ token: data.token });
        router.push('/');
      } else {
        const data = await res.json();
        setMessage(data.message || 'Fehler bei der Anmeldung.');
      }
    } catch (error) {
      console.error('Fehler bei der Anmeldung:', error);
      setMessage('Serverfehler');
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h1 className={styles.authFormHeading}>Anmelden</h1>
        {message && <p className={styles.authFormMessage}>{message}</p>}
        <div>
          <label className={styles.authFormLabel} htmlFor="email">E-Mail:</label>
          <input
            className={styles.authFormInput}
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label className={styles.authFormLabel} htmlFor="password">Passwort:</label>
          <input
            className={styles.authFormInput}
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <button className={styles.authFormButton} type="submit">Anmelden</button>
      </form>
      {/* Option unterhalb des Formulars */}
      <p className={styles.switchAuth}>
        Noch kein Konto?{' '}
        <Link href="/register" className={styles.switchAuthLink}>
          Registrieren
        </Link>
      </p>
    </div>
  );
}

export default Login;
