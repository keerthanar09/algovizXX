import NavBar from '../components/UI/navbar';
import MergeSortVisualization from '../components/sorting/merge';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function MergeVizPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <MergeSortVisualization />
    </div>
  );
}

export default MergeVizPage;
