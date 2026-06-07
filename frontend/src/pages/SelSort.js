import NavBar from '../components/UI/navbar';
import SelectionSortVisualization from '../components/sorting/selection';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function SelVizPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <SelectionSortVisualization />
    </div>
  );
}

export default SelVizPage;
