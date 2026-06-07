import GraphSVG from './UI/GraphSVG';
import SettingsPFNew from './UI/SettingsPFNew';
import VizLayout from './UI/VizLayout';
import useGraphViz from './useGraphViz';

const BellmanViz = () => {
  const { nodes, edges, nodeCount, setNodeCount, maxWeight, setMaxWeight,
    sourceNode, setSourceNode, fetchGraph, handleStart,
    isPlaying, togglePlayPause, step } = useGraphViz('pathfinding/bellman');

  const distances = step.distances || {};

  const statusBar = Object.keys(distances).length > 0 ? (
    <span>
      {step.iteration && <><strong>Iteration:</strong> {step.iteration}&nbsp;&nbsp;</>}
      <strong>Distances:</strong>{' '}
      {Object.entries(distances).map(([k, v]) => `${k}:${v ?? '∞'}`).join('  |  ')}
    </span>
  ) : null;

  return (
    <VizLayout
      title="Bellman-Ford Algorithm"
      visualization={
        <GraphSVG nodes={nodes} edges={edges}
          pathEdges={step.path_edges || []}
          activeEdge={step.active_edge || null}
          showWeights />
      }
      statusBar={statusBar}
      settingsPanel={
        <SettingsPFNew
          nodeCount={nodeCount} setNodeCount={setNodeCount}
          maxWeight={maxWeight} setMaxWeight={setMaxWeight}
          sourceNode={sourceNode} setSourceNode={setSourceNode}
          fetchGraph={fetchGraph} handleStart={handleStart}
          isPlaying={isPlaying} togglePlayPause={togglePlayPause}
        />
      }
    />
  );
};

export default BellmanViz;
