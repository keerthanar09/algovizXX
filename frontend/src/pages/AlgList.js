import ClickList from "../components/UI/ClickList";
import NavBar from "../components/UI/navbar";

function AlgorithmList(){
    return(
        <div> 
            <NavBar />
            <h1 className="text-center p-3">Sorting Algorithms</h1>
            <ClickList />
        </div>
    )
}

export default AlgorithmList;