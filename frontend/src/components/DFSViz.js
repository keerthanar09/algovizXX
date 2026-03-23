import React from 'react';
import GraphSVG from './UI/GraphSVG';
import SettingsPFNew from './UI/SettingsPFNew';
import useGraphViz from './useGraphViz';
import './UI/styles/styles.css';

const DFSViz = () => {
  const { nodes, edges, nodeCount, setNodeCount, maxWeight, setMaxWeight, sourceNode, setSourceNode, fetchGraph, handleStart, isPlaying, togglePlayPause, step } = useGraphViz('pathfinding/dfs');

  return (
    <div className="main-container">
      <div className="vis" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <GraphSVG nodes={nodes} edges={edges} visited={step.visited || []} current={step.current ?? null} />
        </div>
        {step.visited?.length > 0 && (
          <div style={{ padding: '8px 16px', fontSize: 15 }}>
            <strong>Visited:</strong> {(step.visited || []).join(' → ')}
            {step.stack?.length > 0 && <span style={{ marginLeft: 16 }}><strong>Stack:</strong> [{step.stack.join(', ')}]</span>}
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

export default DFSViz;
