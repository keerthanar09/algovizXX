import NavBar from '../components/UI/navbar';
import BubbleSortVisualizor from '../components/sorting/bubblesort';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function BubbleVizPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--grad-page)' }}>
      <SmallScreenOverlay />
      <NavBar />
      <BubbleSortVisualizor />
    </div>
  );
}

export default BubbleVizPage;
