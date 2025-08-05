import React, {useEffect, useState, useCallback} from "react";
import '../UI/styles/styles.css';
import Settings from "../UI/settings";


const InsertionSortVisualization = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [numElements, setNumElements] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);

    const fetchData = useCallback(async () => {
      const BASE_URL = process.env.REACT_APP_API_URL;
      const arrResponse = await fetch(`${BASE_URL}/algorithms/api/get_sorting_data/?num_elements=${numElements}`);
      const arrData = await arrResponse.json();

      const response = await fetch(`${BASE_URL}/algorithms/api/sort/insertion/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ array: arrData }),
      });

      const data = await response.json();
      setSteps(data.steps);
      setCurrentStep(0);
    }, [numElements]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
      };
    
      useEffect(() => {
        fetchData();
      }, [fetchData]);
    
      useEffect(() => {
        if (isPlaying && steps.length > 0 && currentStep < steps.length - 1) {
          const timer = setTimeout(() => setCurrentStep((s) => s + 1), 500);
          return () => clearTimeout(timer);
        }
      }, [steps, currentStep, isPlaying]);
    
      const current = steps[currentStep] || { array: [] };

  return (
    <div className='main-container'>
    <div className='vis'>
      <svg width="100%" height="100%">
        {current.array.map((val, i) => {
          const x = i * 40;
          const y = 300 - val * 20;
          const color = current.swapped?.includes(i)
            ? 'red'
            : current.highlight?.includes(i)
            ? 'orange'
            : 'blue';

          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={30}
              height={val * 20}
              fill={color}
            />
          );
        })}
      </svg>
      </div>

    <div className='settings'>
      <Settings
        numElements={numElements}
        setNumElements={setNumElements}
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
      />
      </div>
    </div>

  );
};
export default InsertionSortVisualization;