import NavBar from '../components/UI/navbar';
import PathFindList from '../components/UI/PFList';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function PathFindingListPage() {
  return (
    <div className="ava-page">
      <SmallScreenOverlay />
      <NavBar />
      <div className="ava-page-inner">
        <h1 className="ava-page-title">Pathfinding Algorithms</h1>
        <p className="ava-page-subtitle">Choose an algorithm to visualize</p>
        <PathFindList />
      </div>
    </div>
  );
}

export default PathFindingListPage;
