// frontend/pages/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/auth.module.css';

function Register({ setUser }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
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
      const res = await fetch('http://localhost:5000/api/auth/register', {
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
        setMessage(data.message || 'Fehler bei der Registrierung.');
      }
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      setMessage('Serverfehler');
    }
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authForm} onSubmit={handleSubmit}>
        <h1 className={styles.authFormHeading}>Registrieren</h1>
        {message && <p className={styles.authFormMessage}>{message}</p>}
        <div>
          <label className={styles.authFormLabel} htmlFor="username">Benutzername:</label>
          <input
            className={styles.authFormInput}
            type="text"
            id="username"
            name="username"
            required
            onChange={handleChange}
            value={formData.username}
          />
        </div>
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
        <button className={styles.authFormButton} type="submit">Registrieren</button>
      </form>
      {/* Option unterhalb des Formulars */}
      <p className={styles.switchAuth}>
        Bereits ein Konto?{' '}
        <Link href="/login" className={styles.switchAuthLink}>
          Anmelden
        </Link>
      </p>
    </div>
  );
}

export default Register;
