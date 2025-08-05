import InsertionSortVisualization from "../components/sorting/insertion";
import NavBar from "../components/UI/navbar";

function InsertionVizPage() {
    return(
        <div>
            <NavBar />
            <h1><center>Insertion Sort Visualization</center></h1>
            <center><InsertionSortVisualization /></center>
        </div>
    )
}

export default InsertionVizPage;