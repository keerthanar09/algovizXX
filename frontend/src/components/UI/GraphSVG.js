import React from 'react';


const GraphSVG = ({ nodes = [], edges = [], visited = [], current = null, pathEdges = [], activeEdge = null, showWeights = false }) => {
  const nodeMap = {};
  nodes.forEach(n => { nodeMap[n.id] = n; });

  const isPathEdge = (f, t) =>
    pathEdges.some(e => (e.from === f && e.to === t) || (e.from === t && e.to === f));

  const isActive = (f, t) =>
    activeEdge && ((activeEdge.from === f && activeEdge.to === t) || (activeEdge.from === t && activeEdge.to === f));

  const nodeColor = (id) => {
    if (id === current) return '#f59e0b';
    if (visited.includes(id)) return '#22c55e';
    return '#93c5fd';
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      {edges.map((e, i) => {
        const a = nodeMap[e.from];
        const b = nodeMap[e.to];
        if (!a || !b) return null;
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const color = isActive(e.from, e.to) ? '#ef4444' : isPathEdge(e.from, e.to) ? '#6366f1' : '#94a3b8';
        const width = isActive(e.from, e.to) || isPathEdge(e.from, e.to) ? 3 : 1.5;
        return (
          <g key={i}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={color} strokeWidth={width} />
            {showWeights && e.weight != null && (
              <text x={mx} y={my - 5} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="600">{e.weight}</text>
            )}
          </g>
        );
      })}
      {nodes.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={20} fill={nodeColor(n.id)} stroke="#1e293b" strokeWidth={2} />
          <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="bold" fill="#1e293b">{n.id}</text>
        </g>
      ))}
    </svg>
  );
};

export default GraphSVG;
