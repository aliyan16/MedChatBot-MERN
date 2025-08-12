import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  
  return (
    <div className="my-8">
      {/* Progress Bar */}
      <div className="h-1.5 bg-gray-200 rounded-full mb-2.5 relative">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>
      
      {/* Steps */}
      <div className="flex justify-between relative">
        {steps.map(step => (
          <div 
            key={step} 
            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold ${
              step <= currentStep 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;