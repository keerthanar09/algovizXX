import React from 'react';
import PlayPauseButton from './pauseplay';
import './styles/styles.css';

const GearIcon = () => (
  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-gear"
            viewBox="0 0 15 16"
          >
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
          </svg>
);


const SettingsSearchNew = ({
  numElements, setNumElements,
  searchKey, setSearchKey,
  fetchData, handleSearch,
  isPlaying, togglePlayPause,
  sorted = false,
}) => (
  <div className="settings">
    <h3 className="d-flex align-items-center gap-2 justify-content-center"><GearIcon /> Settings</h3>

    <div className="form-floating mb-3">
      <input type="number" className="form-control" value={numElements} min="5" max="30" placeholder="10"
        onChange={e => { const v = parseInt(e.target.value); if (v >= 5 && v <= 30) setNumElements(v); }} />
      <label>Number of Elements (5–30)</label>
    </div>

    <div className="form-floating mb-3">
      <input type="number" className="form-control" value={searchKey} placeholder="Search key"
        onChange={e => setSearchKey(e.target.value)} />
      <label>Search Key</label>
    </div>

    {sorted && <small className="text-muted d-block mb-2">Array is sorted for binary search.</small>}

    <div className="d-flex gap-2 flex-wrap">
      <button className="btn btn-outline-dark" onClick={fetchData}>New Array</button>
      <button className="btn btn-outline-dark" onClick={handleSearch}>Search</button>
      <PlayPauseButton isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
    </div>
  </div>
);

export default SettingsSearchNew;
