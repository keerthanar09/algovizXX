import { useState, useCallback, useEffect } from 'react';

const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Shared hook for pathfinding visualizations.
 * @param {string} endpoint  e.g. 'pathfinding/bfs'
 * @param {boolean} weighted  whether to pass source node to API
 */
const useGraphViz = (endpoint) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [nodeCount, setNodeCount] = useState(6);
  const [maxWeight, setMaxWeight] = useState(10);
  const [sourceNode, setSourceNode] = useState(0);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchGraph = useCallback(async () => {
    const res = await fetch(`${BASE_URL}/algorithms/api/get_graph_data/?node_count=${nodeCount}&max_weight=${maxWeight}`);
    const data = await res.json();
    setNodes(data.nodes || []);
    setEdges(data.edges || []);
    setSteps([]);
    setCurrentStep(0);
    setIsPlaying(false);
  }, [nodeCount, maxWeight]);

  useEffect(() => { fetchGraph(); }, [fetchGraph]);

  const handleStart = useCallback(async () => {
    if (!nodes.length) return;
    const src = Math.min(sourceNode, nodes.length - 1);
    const res = await fetch(`${BASE_URL}/algorithms/api/${endpoint}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges, source: src }),
    });
    const data = await res.json();
    setSteps(data.steps || []);
    setCurrentStep(0);
    setIsPlaying(true);
  }, [nodes, edges, sourceNode, endpoint]);

  const togglePlayPause = () => setIsPlaying(p => !p);

  useEffect(() => {
    if (isPlaying && steps.length > 0 && currentStep < steps.length - 1) {
      const t = setTimeout(() => setCurrentStep(s => s + 1), 700);
      return () => clearTimeout(t);
    }
    if (currentStep >= steps.length - 1) setIsPlaying(false);
  }, [isPlaying, steps, currentStep]);

  const step = steps[currentStep] || {};
  return { nodes, edges, nodeCount, setNodeCount, maxWeight, setMaxWeight, sourceNode, setSourceNode, fetchGraph, handleStart, isPlaying, togglePlayPause, step };
};

export default useGraphViz;
