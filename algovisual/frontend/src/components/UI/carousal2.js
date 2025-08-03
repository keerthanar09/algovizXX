import './styles/styles.css';

function Carousal2() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide ">
        <div className="carousel-inner">
          <div class="carousel-item active">
            <div className="d-flex justify-content-center">
              <div class="card m-5" style={{ width: "18rem" }}>
                <img
                  src="/images/img2.jpg"
                  class="card-img-top"
                  alt="cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Sorting algorithms</h5>
                  <p class="card-text">
                    Click the below button to view the list of sorting
                    algorithms that you can visualize!
                  </p>
                  <a href="/Sortinglist" class="btn btn-primary">
                    View List
                  </a>
                </div>
              </div>

              <div class="card m-5" style={{ width: "18rem" }}>
                <img
                  src="/images/img4.png"
                  class="card-img-top"
                  alt="cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Path Finding Algorithms</h5>
                  <p class="card-text">
                    Click the button below to find a list of path finding
                    algorithms to visualize!
                  </p>
                  <a href="/pflist" class="btn btn-primary">
                    View List
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-center">
              <div class="card m-5" style={{ width: "18rem" }}>
                <img
                  src="/images/img3.png"
                  class="card-img-top"
                  alt="cap"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Search Algorithms</h5>
                  <p class="card-text">
                    Click the button below to find a list of Search algorithms
                    to visualize!
                  </p>
                  <a href="/SearchList" class="btn btn-primary">
                    View List
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          style={{ backgroundColor: "", color: "black" }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              class="bi bi-chevron-double-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
              <path
                fill-rule="evenodd"
                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          style={{ backgroundColor: "", color: "black" }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              class="bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
export default Carousal2;

