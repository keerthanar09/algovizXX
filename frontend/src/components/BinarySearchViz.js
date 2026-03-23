import React from 'react';
import SettingsSearchNew from './UI/SettingsSearchNew';
import useSearchViz from './useSearchViz';
import './UI/styles/styles.css';

const BinarySearchViz = () => {
  const { numElements, setNumElements, searchKey, setSearchKey, fetchData, handleSearch, isPlaying, togglePlayPause, step } = useSearchViz('search/binary', true);

  const arr = step.array || [];
  const { low, high, mid, found } = step;
  const barW = Math.max(20, Math.min(50, Math.floor(560 / arr.length) - 4));
  const maxVal = Math.max(...arr, 1);

  const barColor = (i) => {
    if (found != null && found >= 0 && i === found) return '#22c55e';
    if (i === mid) return '#f59e0b';
    if (low != null && high != null && i >= low && i <= high) return '#93c5fd';
    return '#cbd5e1';
  };

  return (
    <div className="main-container">
      <div className="vis">
        <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid meet">
          {arr.map((val, i) => {
            const x = 20 + i * (barW + 4);
            const h = Math.max(10, (val / maxVal) * 260);
            const y = 280 - h;
            return (
              <g key={i}>
                <rect x={x} y={y} width={barW} height={h} fill={barColor(i)} rx={3} />
                <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="11" fill="#1e293b">{val}</text>
                {i === mid && <text x={x + barW / 2} y={300} textAnchor="middle" fontSize="10" fill="#7c3aed">mid</text>}
                {i === low && <text x={x + barW / 2} y={312} textAnchor="middle" fontSize="10" fill="#0369a1">lo</text>}
                {i === high && <text x={x + barW / 2} y={312} textAnchor="middle" fontSize="10" fill="#0369a1">hi</text>}
              </g>
            );
          })}
        </svg>
        {found != null && (
          <div style={{ padding: '8px 16px', fontSize: 13, fontWeight: 600 }}>
            {found >= 0 ? `Found at index ${found}` : 'Key not found'}
          </div>
        )}
      </div>
      <SettingsSearchNew
        numElements={numElements} setNumElements={setNumElements}
        searchKey={searchKey} setSearchKey={setSearchKey}
        fetchData={fetchData} handleSearch={handleSearch}
        isPlaying={isPlaying} togglePlayPause={togglePlayPause}
        sorted
      />
    </div>
  );
};

export default BinarySearchViz;
