import QuickSortVisualization from "../components/sorting/quick";
import NavBar from "../components/UI/navbar";

function QuickVizPage() {
    return(
        <div>
            <NavBar />
            <h1><center>Quick Sort Visualization</center></h1>
            <center><QuickSortVisualization /></center>
        </div>
    )
}

export default QuickVizPage;