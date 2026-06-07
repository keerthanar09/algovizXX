import NavBar from '../components/UI/navbar';
import InsertionSortVisualization from '../components/sorting/insertion';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function InsertionVizPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <InsertionSortVisualization />
    </div>
  );
}

export default InsertionVizPage;
