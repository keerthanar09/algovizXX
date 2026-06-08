import './styles/theme.css';

const categories = [
  {
    title: 'Sorting',
    description: 'Watch sorting algorithms rearrange data in real time :D',
    image: '/images/img2.jpg',
    href: '/Sortinglist',
  },
  {
    title: 'Graphs and Path-finding',
    description: 'Visualize dijkstras, DFS, BFS and more!',
    image: '/images/img4.png',
    href: '/pflist',
  },
  {
    title: 'Searching',
    description: 'See how different algorithms search for data B)',
    image: '/images/img3.png',
    href: '/SearchList',
  },
  {
    title: 'Trees',
    description: 'Go deep with the trees!',
    image: '/images/img5.png',
    href: '/TreesList',
  },
];

function Carousal2() {
  return (
    <section style={{ padding: '1rem 1rem 3rem' }}>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
        Select the category of algorithms you want to explore!<br/>
        (There's more to come ;D)
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
