import BubbleSortVisualizor from "../components/sorting/bubblesort";
import NavBar from "../components/UI/navbar";

function BubbleVizPage() {
    return(
        <div>
            <NavBar />
            <h1><center>Bubble Sort Visualization</center></h1>
            <center><BubbleSortVisualizor /></center>
        </div>
    )
}

export default BubbleVizPage;