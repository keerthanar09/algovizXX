import React, { useState, useEffect, useRef } from 'react';
import './bubblesort.css'; // <-- Import the CSS file

const BubbleSortVisualizer = () => {
  const [array] = useState([5, 3, 8, 4, 2]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);

  const fetchSteps = async () => {
    setSteps([]);
    setCurrentStep(0);

    const response = await fetch('http://localhost:8000/algorithms/api/sort/bubble/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ array }),
    });

    const data = await response.json();
    setSteps(data.steps);
  };

  useEffect(() => {
    if (steps.length > 0 && currentStep < steps.length) {
      intervalRef.current = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 500);
    }

    return () => clearTimeout(intervalRef.current);
  }, [steps, currentStep]);

  const getColorClass = (i) => {
    const step = steps[currentStep];
    if (!step) return 'bar blue';
    if (step.sorted) return 'bar green';
    if (step.swapped && step.swapped.includes(i)) return 'bar red';
    if (step.highlight && step.highlight.includes(i)) return 'bar yellow';
    return 'bar blue';
  };

  const currentArray = steps.length ? steps[Math.min(currentStep, steps.length - 1)]?.array : array;

  return (
    <div className="visualizer-container">
      <h1 className="title">Bubble Sort Visualizer</h1>

      <div className="bar-container">
        {currentArray && currentArray.length ? (
          currentArray.map((val, i) => (
            <div
              key={i}
              className={getColorClass(i)}
              style={{ height: `${val * 20 + 50}px` }}
            ></div>
          ))
        ) : (
          <p className="error-text">No array to display</p>
        )}
      </div>

      <button className="sort-button" onClick={fetchSteps}>
        Start Sorting
      </button>
    </div>
  );
};

export default BubbleSortVisualizer;
