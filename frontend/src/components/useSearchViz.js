import { useState, useCallback, useEffect } from 'react';

const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Shared hook for search visualizations.
 * @param {string} endpoint  e.g. 'search/linear'
 * @param {boolean} sorted   whether to fetch a sorted array
 */
const useSearchViz = (endpoint, sorted = false) => {
  const [array, setArray] = useState([]);
  const [numElements, setNumElements] = useState(12);
  const [searchKey, setSearchKey] = useState('');
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchData = useCallback(async () => {
    const url = sorted
      ? `${BASE_URL}/algorithms/api/get_search_data/?num_elements=${numElements}`
      : `${BASE_URL}/algorithms/api/get_sorting_data/?num_elements=${numElements}`;
    const res = await fetch(url);
    const data = await res.json();
    setArray(data);
    setSteps([]);
    setCurrentStep(0);
    setIsPlaying(false);
  }, [numElements, sorted]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSearch = useCallback(async () => {
    if (!array.length || searchKey === '') return;
    const res = await fetch(`${BASE_URL}/algorithms/api/${endpoint}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ array, key: parseInt(searchKey) }),
    });
    const data = await res.json();
    setSteps(data.steps || []);
    setCurrentStep(0);
    setIsPlaying(true);
  }, [array, searchKey, endpoint]);

  const togglePlayPause = () => setIsPlaying(p => !p);

  useEffect(() => {
    if (isPlaying && steps.length > 0 && currentStep < steps.length - 1) {
      const t = setTimeout(() => setCurrentStep(s => s + 1), 600);
      return () => clearTimeout(t);
    }
    if (currentStep >= steps.length - 1) setIsPlaying(false);
  }, [isPlaying, steps, currentStep]);

  const step = steps[currentStep] || { array, highlight: [], found: null };
  return { array, numElements, setNumElements, searchKey, setSearchKey, fetchData, handleSearch, isPlaying, togglePlayPause, step };
};

export default useSearchViz;
