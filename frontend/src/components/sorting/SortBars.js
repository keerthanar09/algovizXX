/**
 * Shared SVG bar chart for all sorting visualizations.
 * Colors: swapped=red, highlight=orange, default=blue
 */
const SortBars = ({ current }) => {
  const arr = current.array || [];
  const maxVal = Math.max(...arr, 1);
  const barW = Math.max(16, Math.min(44, Math.floor(560 / Math.max(arr.length, 1)) - 4));

  return (
    <svg width="100%" height="100%" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid meet">
      {arr.map((val, i) => {
        const x = 20 + i * (barW + 4);
        const h = Math.max(10, (val / maxVal) * 280);
        const y = 300 - h;
        const fill = current.swapped?.includes(i) ? '#ef4444'
          : current.highlight?.includes(i) ? '#f59e0b'
          : '#60a5fa';
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={h} fill={fill} rx={3} />
            {barW >= 18 && (
              <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="10" fill="#1e293b">{val}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default SortBars;
