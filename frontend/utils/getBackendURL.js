export const getBackendURL = () => {
    if (typeof window !== 'undefined') {
      const { protocol, hostname } = window.location;
      return `${protocol}//${hostname}:5000`; // Angenommen, dein Backend läuft auf Port 5000
    }
    // Fallback für serverseitige Rendering (SSR)
    return process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
  };
  