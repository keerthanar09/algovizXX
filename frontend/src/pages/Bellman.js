import BellmanViz from '../components/BellmanViz';
import NavBar from '../components/UI/navbar';

function BellmanVizPage() {
  return (
    <div>
      <NavBar />
      <h1><center>Bellman-Ford Algorithm Visualization</center></h1>
      <center><BellmanViz /></center>
    </div>
  );
}

export default BellmanVizPage;
