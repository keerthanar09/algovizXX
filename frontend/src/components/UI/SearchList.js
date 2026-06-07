import './styles/theme.css';

const items = [
  { name: 'Linear Search', href: '/lin' },
  { name: 'Binary Search', href: '/bin' },
];

function SearchAlgorithmList() {
  return (
    <div className="ava-alg-list">
      {items.map(item => (
        <a key={item.href} href={item.href} className="ava-alg-item">{item.name}</a>
      ))}
    </div>
  );
}

export default SearchAlgorithmList;
