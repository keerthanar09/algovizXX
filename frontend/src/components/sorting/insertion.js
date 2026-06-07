import { useState, useEffect, useCallback } from 'react';
import Settings from '../UI/settings';
import VizLayout from '../UI/VizLayout';
import SortBars from './SortBars';

const InsertionSortVisualization = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [numElements, setNumElements] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchData = useCallback(async () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const arrRes = await fetch(`${BASE_URL}/algorithms/api/get_sorting_data/?num_elements=${numElements}`);
    const arrData = await arrRes.json();
    const res = await fetch(`${BASE_URL}/algorithms/api/sort/insertion/`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ array: arrData }),
    });
    const data = await res.json();
    setSteps(data.steps);
    setCurrentStep(0);
  }, [numElements]);

  const togglePlayPause = () => setIsPlaying(p => !p);

  useEffect(() => { fetchData(); }, [fetchData]);
  useEffect(() => {
    if (isPlaying && steps.length > 0 && currentStep < steps.length - 1) {
      const t = setTimeout(() => setCurrentStep(s => s + 1), 500);
      return () => clearTimeout(t);
    }
  }, [steps, currentStep, isPlaying]);

  const current = steps[currentStep] || { array: [] };

  return (
    <VizLayout
      title="Insertion Sort"
      visualization={<SortBars current={current} />}
      settingsPanel={
        <Settings numElements={numElements} setNumElements={setNumElements}
          togglePlayPause={togglePlayPause} isPlaying={isPlaying} fetchData={fetchData} />
      }
    />
  );
};

export default InsertionSortVisualization;
