// ProgressBar.js
import React from 'react';
import './progressbar.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
      <div className="steps">
        {steps.map(step => (
          <div 
            key={step} 
            className={`step ${step <= currentStep ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;