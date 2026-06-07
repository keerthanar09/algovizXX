import PlayPauseButton from './pauseplay';

const Settings = ({ numElements, setNumElements, togglePlayPause, isPlaying, fetchData }) => (
  <>
    <div className="viz-field">
      <label htmlFor="sort-elements">Elements <small>(3–50)</small></label>
      <input
        id="sort-elements"
        type="number"
        value={numElements}
        min="3"
        max="50"
        onChange={e => {
          const v = parseInt(e.target.value, 10);
          if (v > 2 && v <= 50) {
            setNumElements(v);
            if (fetchData) fetchData();
          }
        }}
      />
    </div>
    <PlayPauseButton isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
  </>
);

export default Settings;
