// frontend/components/Navbar.js
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserContext } from '../context/UserContext';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { user, handleLogout, loading } = useContext(UserContext);
  const router = useRouter();
  const excludedPages = ['/login', '/register'];
  const pathname = router.pathname;

  if (loading) {
    // Während des Ladens nichts anzeigen oder einen Ladeindikator
    return null;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/" className={styles.logo}>
          Ozelot.chat
        </Link>
        <div className={styles.navLinks}>
          {/* Weitere Links können hier hinzugefügt werden */}
          {/* Beispiel:
          <Link href="/about" className={styles.link}>
            Über uns
          </Link>
          */}
        </div>
      </div>
      <div className={styles.navRight}>
        {user && !excludedPages.includes(pathname) && (
          <button className={styles.logoutButton} onClick={handleLogout}>
            log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;