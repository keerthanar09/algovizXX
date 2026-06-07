import NavBar from '../components/UI/navbar';
import QuickSortVisualization from '../components/sorting/quick';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function QuickVizPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <QuickSortVisualization />
    </div>
  );
}

export default QuickVizPage;
