import { useEffect, useState } from 'react';

// Breakpoint in pixels is half a typical laptop's view port.
// This overlay is to ensure the user doesnt use the application on a phone or a device
// or browser with a smaller viewport for the best experience.
const BREAKPOINT = 640;

function SmallScreenOverlay() {
  const [tooSmall, setTooSmall] = useState(window.innerWidth < BREAKPOINT);

  useEffect(() => {
    const handler = () => setTooSmall(window.innerWidth < BREAKPOINT);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  if (!tooSmall) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      backgroundColor: 'rgba(0, 0, 0, 0.55)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <span style={{ fontSize: '3rem' }}>🐥</span>
      <p style={{
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 600,
        maxWidth: 320,
        lineHeight: 1.5,
        margin: 0,
      }}>
        Please switch to a device with a bigger screen for the best experience!!
      </p>
    </div>
  );
}

export default SmallScreenOverlay;
