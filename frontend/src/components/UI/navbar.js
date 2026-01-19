import "./styles/styles.css";
import "animate.css";
import "animate.css/source/animate.css";
import SearchBar from "./searchbar";

function NavBar() {
  return (
    <div className="navbar-vertical text-center">
      <h1 className="animate__heartBeat mb-2">
        Algorithm Visualizer
      </h1>

      <div className="container-fluid px-4 mb-2">
        <div className="row">
          <div className="col-12">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-5 mb-1">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
          </svg>
          Home
        </a>

        <a className="navbar-brand d-flex align-items-center gap-2" href="/about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            class="bi bi-fire"
            viewBox="0 0 16 16"
          >
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
          </svg>
          About
        </a>
      </div>
    </div>
  );
}

export default NavBar;
