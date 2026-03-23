import BFSViz from '../components/BFSViz';
import NavBar from '../components/UI/navbar';

function BFSVisPage() {
  return (
    <div>
      <NavBar />
      <h1><center>Breadth First Search Visualization</center></h1>
      <center><BFSViz /></center>
    </div>
  );
}

export default BFSVisPage;
