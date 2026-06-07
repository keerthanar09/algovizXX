import NavBar from '../components/UI/navbar';
import LinearSearchViz from '../components/LinearSearchViz';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function LinearSearchPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <LinearSearchViz />
    </div>
  );
}

export default LinearSearchPage;
