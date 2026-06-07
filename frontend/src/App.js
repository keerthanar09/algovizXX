import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/UI/styles/theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import AlgorithmList from './pages/AlgList';
import PathFindingListPage from './pages/Pathfindlist';
import SearchListPage from './pages/serpage';
import BubbleVizPage from './pages/BubbleViz';
import MergeVizPage from './pages/MergeSortViz';
import QuickVizPage from './pages/QuickSortViz';
import SelVizPage from './pages/SelSort';
import InsertionVizPage from './pages/InsertionViz';
import BellmanVizPage from './pages/Bellman';
import DijViz from './pages/DjViz';
import BFSVisPage from './pages/bfsviz';
import DFSVisPage from './pages/dfspage';
import LinearSearchPage from './pages/linpage';
import BinarySearchPage from './pages/binpage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Sortinglist" element={<AlgorithmList />} />
          <Route path="/pflist" element={<PathFindingListPage />} />
          <Route path="/SearchList" element={<SearchListPage />} />
          <Route path="/bubble" element={<BubbleVizPage />} />
          <Route path="/merge" element={<MergeVizPage />} />
          <Route path="/quick" element={<QuickVizPage />} />
          <Route path="/select" element={<SelVizPage />} />
          <Route path="/insertion" element={<InsertionVizPage />} />
          <Route path="/bellman" element={<BellmanVizPage />} />
          <Route path="/dj" element={<DijViz />} />
          <Route path="/bfs" element={<BFSVisPage />} />
          <Route path="/dfs" element={<DFSVisPage />} />
          <Route path="/lin" element={<LinearSearchPage />} />
          <Route path="/bin" element={<BinarySearchPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
