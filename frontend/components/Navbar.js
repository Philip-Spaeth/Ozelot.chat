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
      </div>
      <div className={styles.navRight}>
        {/* Links, die rechts neben dem Logout-Button angezeigt werden */}
        <div className={styles.navLinks}>
          {/* Beispielhafte Links, ersetze sie nach Bedarf */}
          <Link href="/aout" className={styles.link}>
            about
          </Link>
          <Link href="/settings" className={styles.link}>
            settings
          </Link>
        </div>
        {user && !excludedPages.includes(pathname) && (
          <button className={styles.logoutButton} onClick={handleLogout}>
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
