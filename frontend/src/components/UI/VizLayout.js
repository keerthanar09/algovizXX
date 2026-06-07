import './styles/theme.css';

// Shared layout for all visualization pages.
// Left: code panel (UI shell, To Be Implemented)
// Center: visualization canvas + status bar
// Right: settings panel

const VizLayout = ({ title, visualization, statusBar, settingsPanel }) => (
  <div className="viz-page">
    <div className="viz-titlebar">{title}</div>
    <div className="viz-body">

      {/* Left */}
      <aside className="viz-code-panel" aria-label="Pseudocode">
        <div className="viz-code-panel-header">Pseudocode</div>
        <div className="viz-code-panel-body">
          <p className="viz-code-placeholder">
            Code tracing will appear here as the visualization plays.
          </p>
        </div>
      </aside>

      {/* Center */}
      <main className="viz-center">
        <div className="viz-canvas-wrap">
          <div className="viz-canvas-inner">
            {visualization}
          </div>
          <div className="viz-status-bar">
            {statusBar || <span style={{ opacity: 0.4 }}>Ready</span>}
          </div>
        </div>
      </main>

      {/* Right */}
      <aside className="viz-settings-panel" aria-label="Settings">
        <div className="viz-settings-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52z"/>
          </svg>
          Settings
        </div>
        <div className="viz-settings-body">
          {settingsPanel}
        </div>
      </aside>

    </div>
  </div>
);

export default VizLayout;
