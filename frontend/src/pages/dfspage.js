import NavBar from '../components/UI/navbar';
import DFSViz from '../components/DFSViz';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function DFSVisPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <DFSViz />
    </div>
  );
}

export default DFSVisPage;
