import NavBar from '../components/UI/navbar';
import Carousal2 from '../components/UI/carousal2';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function Home() {
  return (
    <div className="ava-page">
      <SmallScreenOverlay />
      <NavBar />
      <div style={{ textAlign: 'center', padding: '3rem 1rem 1.5rem' }}>
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          textShadow: '0 0 30px rgba(59,130,246,0.2)',
        }}>
          Algorithm Visualizer
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 480, margin: '0 auto' }}>
          Trace an algorithm step by step.
        </p>
      </div>
      <Carousal2 />
    </div>
  );
}

export default Home;
