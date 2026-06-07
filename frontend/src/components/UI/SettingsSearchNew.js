import PlayPauseButton from './pauseplay';

const SettingsSearchNew = ({
  numElements, setNumElements,
  searchKey, setSearchKey,
  fetchData, handleSearch,
  isPlaying, togglePlayPause,
  sorted = false,
}) => (
  <>
    <div className="viz-field">
      <label htmlFor="s-elements">Elements <small>(5–30)</small></label>
      <input id="s-elements" type="number" value={numElements} min="5" max="30"
        onChange={e => { const v = parseInt(e.target.value); if (v >= 5 && v <= 30) setNumElements(v); }} />
    </div>

    <div className="viz-field">
      <label htmlFor="s-key">Search Key</label>
      <input id="s-key" type="number" value={searchKey} placeholder="Enter key…"
        onChange={e => setSearchKey(e.target.value)} />
      {sorted && <small style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Array is sorted.</small>}
    </div>

    <button className="btn-ava-secondary" onClick={fetchData}>New Array</button>
    <button className="btn-ava-primary" onClick={handleSearch}>Search</button>
    <PlayPauseButton isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
  </>
);

export default SettingsSearchNew;
