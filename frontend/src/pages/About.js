import NavBar from '../components/UI/navbar';
import SmallScreenOverlay from '../components/UI/SmallScreenOverlay';


const Section = ({ title, children }) => (
  <div className="ava-about-section">
    <h2>{title}</h2>
    {children}
  </div>
);

function About() {
  return (
    
    <div className="ava-page">
      <SmallScreenOverlay />
      <NavBar />
      <div className="ava-page-inner">
        <h1 className="ava-page-title">About Algorithm Visualizer</h1>
        <p className="ava-page-subtitle">An interactive tool for learning algorithms through step-by-step visualizations.</p>

        <Section title="What is this?">
          <p>
            AVA (Algorithm Visualizer Application) started as a college group project using React and p5.js,
            then was rebuilt with SVG for faster, cleaner animations. You can find the original p5 version{' '}
            <a href="https://github.com/keerthanar09/algorithm_visualizer" style={{ color: 'var(--accent-500)' }}>here</a>.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            This is an MVP. Improvements are ongoing —{' '}
            <a href="https://forms.gle/brVCYJFAx9pCv8459" style={{ color: 'var(--accent-500)' }}>feedback</a> is always welcome.
          </p>
        </Section>

        <Section title="✨ Key Features">
          <ul>
            <li>SVG-based visualizations for sorting, pathfinding and search algorithms</li>
            <li>Adjustable input sizes and parameters per algorithm</li>
            <li>Pause / Play step controls</li>
            <li>Light and dark mode</li>
          </ul>
        </Section>

        <Section title="🛠️ Built With">
          <ul>
            <li>React.js — Frontend framework</li>
            <li>SVG — Visualization rendering</li>
            <li>Django — Backend and algorithm API</li>
            <li>Bootstrap + Custom CSS — Styling</li>
          </ul>
        </Section>

        <Section title="🪄 Available Algorithms">
          <div className="ava-about-grid">
            {[
              { label: 'Sorting', items: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'] },
              { label: 'Pathfinding', items: ["Dijkstra's", 'Depth First Search', 'Breadth First Search', 'Bellman-Ford'] },
              { label: 'Searching', items: ['Linear Search', 'Binary Search'] },
            ].map(g => (
              <div className="ava-about-group" key={g.label}>
                <div className="ava-about-group-label">{g.label}</div>
                <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="✨ Coming Soon">
          <ul>
            <li>Speed controls and prev/next step navigation</li>
            <li>Live code tracing as the visualization plays</li>
            <li>Custom user input for algorithms</li>
            <li>Complexity analysis and side-by-side comparisons</li>
            <li>More algorithm varieties</li>
          </ul>
        </Section>

        <Section title="📁 Source Code">
          <p>
            <a href="https://github.com/keerthanar09/algovizXX" style={{ color: 'var(--accent-500)' }}
              target="_blank" rel="noreferrer">
              GitHub — source code and documentation
            </a>
          </p>
        </Section>

        <Section title="💌 Feedback">
          <p>
            Your feedback helps improve the app.{' '}
            <a href="https://forms.gle/THpSf3cjAFJSGyxV6" style={{ color: 'var(--accent-500)' }}>
              Fill out the feedback form here.
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}

export default About;
