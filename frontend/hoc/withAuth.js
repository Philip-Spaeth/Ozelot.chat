// frontend/hoc/withAuth.js
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../context/UserContext';
import LoadingSpinner from '../components/LoadingSpinner';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useContext(UserContext);
    const router = useRouter();
    const excludedPages = ['/login', '/register'];
    const pathname = router.pathname;

    useEffect(() => {
      if (!loading) {
        if (!user && !excludedPages.includes(pathname)) {
          router.push('/login');
        }
      }
    }, [user, loading, router, pathname]);

    if (loading) {
      // Ladeanzeige anzeigen
      return <LoadingSpinner />;
    }

    if (!user && !excludedPages.includes(pathname)) {
      // Benutzer wird umgeleitet, nichts anzeigen
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
