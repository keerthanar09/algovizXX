import GraphSVG from './UI/GraphSVG';
import SettingsPFNew from './UI/SettingsPFNew';
import VizLayout from './UI/VizLayout';
import useGraphViz from './useGraphViz';

const BFSViz = () => {
  const { nodes, edges, nodeCount, setNodeCount, maxWeight, setMaxWeight,
    sourceNode, setSourceNode, fetchGraph, handleStart,
    isPlaying, togglePlayPause, step } = useGraphViz('pathfinding/bfs');

  const statusBar = step.visited?.length > 0 ? (
    <span>
      <strong>Visited:</strong> {step.visited.join(' → ')}
      {step.queue?.length > 0 && <span style={{ marginLeft: 16 }}><strong>Queue:</strong> [{step.queue.join(', ')}]</span>}
    </span>
  ) : null;

  return (
    <VizLayout
      title="Breadth First Search"
      visualization={
        <GraphSVG nodes={nodes} edges={edges}
          visited={step.visited || []} current={step.current ?? null} />
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

export default BFSViz;
