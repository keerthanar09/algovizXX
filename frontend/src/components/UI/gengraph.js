import React from "react";

const GenerateGraph = ({ nodeCount, maxWeight, setNodes, setEdges, setGraph, setPositions }) => {
  const fetchGraph = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/get_graph_data/?node_count=${nodeCount}&max_weight=${maxWeight}`
      );
      const data = await response.json();
  
      setNodes(Array.isArray(data.nodes) ? data.nodes : []);
      setEdges(Array.isArray(data.edges) ? data.edges : []);
      setGraph(data.graph || []);
  
      // Generate non-overlapping positions
      const newPositions = generateNonOverlappingPositions(data.nodes);
      setPositions(newPositions);
    } catch (error) {
      console.error("Error fetching graph data:", error);
    }
  };
  

  const generateNonOverlappingPositions = (nodes) => {
    const canvasWidth = 600; 
    const canvasHeight = 400; 
    const nodeRadius = 20;
    const minDistance = nodeRadius * 3; 
  
    const positions = {};
    const isOverlapping = (x1, y1, x2, y2) =>
      Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) < minDistance;
  
    nodes.forEach((node) => {
  let pos;

  do {
    const x = Math.random() * (canvasWidth - 2 * nodeRadius) + nodeRadius;
    const y = Math.random() * (canvasHeight - 2 * nodeRadius) + nodeRadius;

    const overlapping = Object.values(positions).some(({ x: x2, y: y2 }) =>
      isOverlapping(x, y, x2, y2)
    );

    if (!overlapping) {
      pos = { x, y };
    }
  } while (!pos);

  positions[node.id] = pos;
});

  
    return positions;
  };
  

  return (
    <button className="btn btn-outline-dark" onClick={fetchGraph}>
      Generate Graph
    </button>
  );
};

export default GenerateGraph;
