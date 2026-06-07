import NavBar from '../components/UI/navbar';
import BinarySearchViz from '../components/BinarySearchViz';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function BinarySearchPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <BinarySearchViz />
    </div>
  );
}

export default BinarySearchPage;
