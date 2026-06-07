import GraphSVG from './UI/GraphSVG';
import SettingsPFNew from './UI/SettingsPFNew';
import VizLayout from './UI/VizLayout';
import useGraphViz from './useGraphViz';

const DijkstraViz = () => {
  const { nodes, edges, nodeCount, setNodeCount, maxWeight, setMaxWeight,
    sourceNode, setSourceNode, fetchGraph, handleStart,
    isPlaying, togglePlayPause, step } = useGraphViz('pathfinding/dijkstra');

  const distances = step.distances || {};

  const statusBar = Object.keys(distances).length > 0 ? (
    <span>
      <strong>Distances:</strong>{' '}
      {Object.entries(distances).map(([k, v]) => `${k}:${v ?? '∞'}`).join('  |  ')}
    </span>
  ) : null;

  return (
    <VizLayout
      title="Dijkstra's Algorithm"
      visualization={
        <GraphSVG nodes={nodes} edges={edges}
          visited={step.visited || []} current={step.current ?? null}
          pathEdges={step.path_edges || []} showWeights />
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

export default DijkstraViz;
