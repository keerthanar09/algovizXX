import './styles/theme.css';

const categories = [
  {
    title: 'Sorting Algorithms',
    description: 'Watch sorting algorithms rearrange data step by step in real time.',
    image: '/images/img2.jpg',
    href: '/Sortinglist',
  },
  {
    title: 'Pathfinding Algorithms',
    description: 'See graph traversal and shortest-path algorithms come to life.',
    image: '/images/img4.png',
    href: '/pflist',
  },
  {
    title: 'Search Algorithms',
    description: 'Step through linear and binary search on interactive arrays.',
    image: '/images/img3.png',
    href: '/SearchList',
  },
];

function Carousal2() {
  return (
    <section style={{ padding: '1rem 1rem 3rem' }}>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
        Select the category of algorithms you want to explore!<br/>
        (There's more to come ;))
      </p>
      <div className="ava-cards">
        {categories.map(cat => (
          <div className="ava-card" key={cat.href}>
            <img src={cat.image} alt={cat.title} />
            <div className="ava-card-body">
              <h3 className="ava-card-title">{cat.title}</h3>
              <p className="ava-card-text">{cat.description}</p>
              <a href={cat.href} className="btn-ava-primary" style={{ width: 'auto', display: 'inline-block' }}>
                View List
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousal2;
