import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);
    if (q.length > 0) {
      try {
        const BASE_URL = process.env.REACT_APP_API_URL;
        const res = await fetch(`${BASE_URL}/algorithms/api/search_algorithms/?query=${q}`);
        const data = await res.json();
        setResults(data);
      } catch {
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  const handleSelect = (path) => {
    setQuery('');
    setResults([]);
    navigate(path);
  };

  return (
    <div className="ava-search-wrap">
      <input
        type="search"
        className="ava-search-input"
        value={query}
        onChange={handleSearch}
        placeholder="Search algorithms…"
        aria-label="Search algorithms"
        autoComplete="off"
      />
      <span className="ava-search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </span>
      {results.length > 0 && (
        <ul className="ava-search-results" role="listbox">
          {results.map((r) => (
            <li key={r.slno} role="option" onClick={() => handleSelect(r.path)}>
              {r.name || r.catID__name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
