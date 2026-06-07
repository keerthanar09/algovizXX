import NavBar from '../components/UI/navbar';
import DijkstraViz from '../components/DijkstraViz';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function DijViz() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <DijkstraViz />
    </div>
  );
}

export default DijViz;
