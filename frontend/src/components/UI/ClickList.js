import './styles/theme.css';

const items = [
  { name: 'Bubble Sort', href: '/bubble' },
  { name: 'Merge Sort', href: '/merge' },
  { name: 'Quick Sort', href: '/quick' },
  { name: 'Selection Sort', href: '/select' },
  { name: 'Insertion Sort', href: '/insertion' },
];

function ClickList() {
  return (
    <div className="ava-alg-list">
      {items.map(item => (
        <a key={item.href} href={item.href} className="ava-alg-item">{item.name}</a>
      ))}
    </div>
  );
}

export default ClickList;
