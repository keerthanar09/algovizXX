import DFSViz from '../components/DFSViz';
import NavBar from '../components/UI/navbar';

function DFSVisPage() {
  return (
    <div>
      <NavBar />
      <h1><center>Depth First Search Visualization</center></h1>
      <center><DFSViz /></center>
    </div>
  );
}

export default DFSVisPage;
