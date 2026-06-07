import NavBar from '../components/UI/navbar';
import TreeAlgorithmList from '../components/UI/TreeList';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function TreesListPage() {
  return (
    <div className="ava-page">
      <SmallScreenOverlay />
      <NavBar />
      <div className="ava-page-inner">
        <h1 className="ava-page-title">Trees and Tree Algorithms</h1>
        {/* <p className="ava-page-subtitle">Choose an algorithm to visualize</p> */}
        <p className="ava-page-disclaimer">Stay Tuned!!</p>
        <TreeAlgorithmList />
      </div>
    </div>
  );
}

export default TreesListPage;
