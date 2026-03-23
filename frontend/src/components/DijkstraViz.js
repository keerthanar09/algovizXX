import React from 'react';
import GraphSVG from './UI/GraphSVG';
import SettingsPFNew from './UI/SettingsPFNew';
import useGraphViz from './useGraphViz';
import './UI/styles/styles.css';

const DijkstraViz = () => {
  const { nodes, edges, nodeCount, setNodeCount, maxWeight, setMaxWeight, sourceNode, setSourceNode, fetchGraph, handleStart, isPlaying, togglePlayPause, step } = useGraphViz('pathfinding/dijkstra');

  const distances = step.distances || {};

  return (
    <div className="main-container">
      <div className="vis" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <GraphSVG nodes={nodes} edges={edges} visited={step.visited || []} current={step.current ?? null} pathEdges={step.path_edges || []} showWeights />
        </div>
        {Object.keys(distances).length > 0 && (
          <div style={{ padding: '8px 16px', fontSize: 15 }}>
            <strong>Distances from source:</strong>{' '}
            {Object.entries(distances).map(([k, v]) => `${k}:${v ?? '∞'}`).join('  |  ')}
          </div>
        )}
      </div>
      <SettingsPFNew
        nodeCount={nodeCount} setNodeCount={setNodeCount}
        maxWeight={maxWeight} setMaxWeight={setMaxWeight}
        sourceNode={sourceNode} setSourceNode={setSourceNode}
        fetchGraph={fetchGraph} handleStart={handleStart}
        isPlaying={isPlaying} togglePlayPause={togglePlayPause}
      />
    </div>
  );
};

export default DijkstraViz;
