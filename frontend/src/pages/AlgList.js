import NavBar from '../components/UI/navbar';
import ClickList from '../components/UI/ClickList';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';


function AlgorithmList() {
  return (
    <div className="ava-page">
      <SmallScreenOverlay />
      <NavBar />
      <div className="ava-page-inner">
        <h1 className="ava-page-title">Sorting Algorithms</h1>
        <p className="ava-page-subtitle">Choose an algorithm to visualize</p>
        <ClickList />
      </div>
    </div>
  );
}

export default AlgorithmList;
