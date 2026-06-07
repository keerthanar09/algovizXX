import NavBar from '../components/UI/navbar';
import BFSViz from '../components/BFSViz';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function BFSVisPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <BFSViz />
    </div>
  );
}

export default BFSVisPage;
