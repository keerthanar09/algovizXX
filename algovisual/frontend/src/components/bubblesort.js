import React, { useState, useEffect } from 'react';

const BubbleSortVisualizor = () => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const fetchSteps = async () => {
    const response = await fetch('http://localhost:8000/algorithms/api/sort/bubble/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ array: [5, 3, 8, 4, 2] }),
    });
    const data = await response.json();
    setSteps(data.steps);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (steps.length > 0 && currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep((s) => s + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [steps, currentStep]);

  const current = steps[currentStep] || { array: [] };

  return (
    <div>
      <svg width="500" height="300">
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
      <button onClick={fetchSteps}>Start Sorting</button>
    </div>
  );
};

export default BubbleSortVisualizor;
