import NavBar from "../components/UI/navbar";
import PathFindList from "../components/UI/PFList";

function PathFindingListPage(){
    return(
        <div>
            <NavBar />
            <h1 className="p-3 text-center">Path Finding Algorithms</h1>
            <PathFindList />
        </div>
    )
}

export default PathFindingListPage;