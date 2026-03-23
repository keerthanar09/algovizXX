import DijkstraViz from '../components/DijkstraViz';
import NavBar from '../components/UI/navbar';

function DijViz() {
  return (
    <div>
      <NavBar />
      <h1><center>Dijkstra's Algorithm Visualization</center></h1>
      <center><DijkstraViz /></center>
    </div>
  );
}

export default DijViz;
