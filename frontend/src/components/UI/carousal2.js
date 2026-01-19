import './styles/styles.css';

function Carousal2() {
  return (
    <div className="container py-4">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card bg-black h-100">
                  <img src="/images/img2.jpg" className="card-img-top" alt="cap" />
                  <div className="card-body">
                    <h5 className="card-title text-white">Sorting Algorithms</h5>
                    <p className="card-text text-white">
                      Click the below button to view the list of sorting algorithms that you can visualize!
                    </p>
                    <a href="/Sortinglist" className="btn btn-primary">View List</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card bg-black h-100">
                  <img src="/images/img4.png" className="card-img-top" alt="cap" />
                  <div className="card-body">
                    <h5 className="card-title text-white">Path Finding Algorithms</h5>
                    <p className="card-text text-white">
                      Click the button below to find a list of pathfinding algorithms to visualize!
                    </p>
                    <a href="/pflist" className="btn btn-primary">View List</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card bg-black h-100">
                  <img src="/images/img3.png" className="card-img-top" alt="cap" />
                  <div className="card-body">
                    <h5 className="card-title text-white">Search Algorithms</h5>
                    <p className="card-text text-white">
                      Click the button below to find a list of Search algorithms to visualize!
                    </p>
                    <a href="/SearchList" className="btn btn-primary">View List</a>
                  </div>
                </div>
              </div>

              {/* Future cards here for more types of algorithms <3 */}
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
              <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Carousal2;
