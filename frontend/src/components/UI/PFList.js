import './styles/theme.css';

const items = [
  { name: "Bellman-Ford's Algorithm", href: '/bellman' },
  { name: 'Depth First Search', href: '/dfs' },
  { name: 'Breadth First Search', href: '/bfs' },
  { name: "Dijkstra's Algorithm", href: '/dj' },
];

function PathFindList() {
  return (
    <div className="ava-alg-list">
      {items.map(item => (
        <a key={item.href} href={item.href} className="ava-alg-item">{item.name}</a>
      ))}
    </div>
  );
}

export default PathFindList;
