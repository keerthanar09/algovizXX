import SettingsSearchNew from './UI/SettingsSearchNew';
import VizLayout from './UI/VizLayout';
import useSearchViz from './useSearchViz';

const LinearSearchViz = () => {
  const { numElements, setNumElements, searchKey, setSearchKey,
    fetchData, handleSearch, isPlaying, togglePlayPause, step } = useSearchViz('search/linear', false);

  const arr = step.array || [];
  const highlight = step.highlight || [];
  const found = step.found;
  const barW = Math.max(20, Math.min(50, Math.floor(560 / Math.max(arr.length, 1)) - 4));
  const maxVal = Math.max(...arr, 1);

  const barColor = i => {
    if (found != null && found >= 0 && i === found) return '#22c55e';
    if (highlight.includes(i)) return '#f59e0b';
    return '#60a5fa';
  };

  return (
    <VizLayout
      title="Linear Search"
      visualization={
        <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid meet">
          {arr.map((val, i) => {
            const x = 20 + i * (barW + 4);
            const h = Math.max(10, (val / maxVal) * 260);
            const y = 280 - h;
            return (
              <g key={i}>
                <rect x={x} y={y} width={barW} height={h} fill={barColor(i)} rx={3} />
                <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="11" fill="#1e293b">{val}</text>
              </g>
            );
          })}
        </svg>
      }
      statusBar={found != null
        ? <span><strong>{found >= 0 ? `✓ Found at index ${found}` : '✗ Key not found'}</strong></span>
        : null}
      settingsPanel={
        <SettingsSearchNew
          numElements={numElements} setNumElements={setNumElements}
          searchKey={searchKey} setSearchKey={setSearchKey}
          fetchData={fetchData} handleSearch={handleSearch}
          isPlaying={isPlaying} togglePlayPause={togglePlayPause}
        />
      }
    />
  );
};

export default LinearSearchViz;
