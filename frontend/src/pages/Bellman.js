import NavBar from '../components/UI/navbar';
import BellmanViz from '../components/BellmanViz';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function BellmanVizPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <BellmanViz />
    </div>
  );
}

export default BellmanVizPage;
