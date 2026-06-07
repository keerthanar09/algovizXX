import PlayPauseButton from './pauseplay';

const SettingsPFNew = ({
  nodeCount, setNodeCount,
  maxWeight, setMaxWeight,
  sourceNode, setSourceNode,
  fetchGraph, handleStart,
  isPlaying, togglePlayPause,
  extraFields,
}) => (
  <>
    <div className="viz-field">
      <label htmlFor="pf-nodes">Number of Nodes <small>(3–15)</small></label>
      <input id="pf-nodes" type="number" value={nodeCount} min="3" max="15"
        onChange={e => { const v = parseInt(e.target.value); if (v >= 3 && v <= 15) setNodeCount(v); }} />
    </div>

    <div className="viz-field">
      <label htmlFor="pf-weight">Max Edge Weight <small>(1–30)</small></label>
      <input id="pf-weight" type="number" value={maxWeight} min="1" max="30"
        onChange={e => { const v = parseInt(e.target.value); if (v >= 1 && v <= 30) setMaxWeight(v); }} />
    </div>

    <div className="viz-field">
      <label htmlFor="pf-source">Source Node <small>(0–{nodeCount - 1})</small></label>
      <input id="pf-source" type="number" value={sourceNode} min="0" max={nodeCount - 1}
        onChange={e => setSourceNode(Number(e.target.value))} />
    </div>

    {extraFields}

    <button className="btn-ava-secondary" onClick={fetchGraph}>New Graph</button>
    <button className="btn-ava-primary" style={{ width: '100%' }} onClick={handleStart}>Start</button>
    <PlayPauseButton isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
  </>
);

export default SettingsPFNew;
