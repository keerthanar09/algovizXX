import React from 'react';
import GraphSVG from './UI/GraphSVG';
import SettingsPFNew from './UI/SettingsPFNew';
import useGraphViz from './useGraphViz';
import './UI/styles/styles.css';

const BellmanViz = () => {
  const { nodes, edges, nodeCount, setNodeCount, maxWeight, setMaxWeight, sourceNode, setSourceNode, fetchGraph, handleStart, isPlaying, togglePlayPause, step } = useGraphViz('pathfinding/bellman');

  const distances = step.distances || {};
  const activeEdge = step.active_edge || null;

  return (
    <div className="main-container">
      <div className="vis" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <GraphSVG nodes={nodes} edges={edges} pathEdges={step.path_edges || []} activeEdge={activeEdge} showWeights />
        </div>
        {Object.keys(distances).length > 0 && (
          <div style={{ padding: '8px 16px', fontSize: 15 }}>
            {step.iteration && <span style={{ marginRight: 12 }}><strong>Iteration:</strong> {step.iteration}</span>}
            <strong>Distances:</strong>{' '}
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

export default BellmanViz;
