// frontend/components/Navbar.js
import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserContext } from '../context/UserContext';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';


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
        {/* Logo oder Name der Anwendung */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"   // Der Pfad zu deinem Bild im öffentlichen Ordner
            alt="Ozelot.chat Logo"
            width={40}        // Breite des Bildes (anpassen nach Bedarf)
            height={40}        // Höhe des Bildes (anpassen nach Bedarf)
          />
        </Link>
        <Link href="/" className={styles.logo}>
          Ozelot.chat
        </Link>
      </div>
      <div className={styles.navRight}>
        {/* Links, die rechts neben dem Logout-Button angezeigt werden */}
        <div className={styles.navLinks}>
        {user && !excludedPages.includes(pathname) && 
        (
          <div className={styles.navLinks}>
          <Link href="/aout" className={styles.link}>
            about
          </Link>
          <Link href="/settings" className={styles.link}>
            settings
          </Link>
          </div>
        )}
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
