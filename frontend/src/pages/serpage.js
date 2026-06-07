import NavBar from '../components/UI/navbar';
import SearchAlgorithmList from '../components/UI/SearchList';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';

function SearchListPage() {
  return (
    <div className="ava-page">
      <SmallScreenOverlay />
      <NavBar />
      <div className="ava-page-inner">
        <h1 className="ava-page-title">Search Algorithms</h1>
        <p className="ava-page-subtitle">Choose an algorithm to visualize</p>
        <SearchAlgorithmList />
      </div>
    </div>
  );
}

export default SearchListPage;
