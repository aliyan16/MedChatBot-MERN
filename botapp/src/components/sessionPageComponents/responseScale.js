import React, { useState } from 'react';

const ResponseScale = ({ onResponseSelect, selectedValue }) => {
  const [localSelected, setLocalSelected] = useState(selectedValue || null);

  const handleSelect = (value) => {
    setLocalSelected(value);
    if (onResponseSelect) {
      onResponseSelect(value);
    }
  };

  return (
    <div className="mt-6">
      <p className="text-gray-300 text-sm mb-3">Please select your response:</p>
      <div className="flex flex-wrap gap-2">
        {[...Array(10)].map((_, index) => {
          const value = index + 1;
          const isSelected = localSelected === value;
          return (
            <button
              key={value}
              onClick={() => handleSelect(value)}
              className={`px-3 py-2 rounded text-sm transition-colors
                ${isSelected 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
            >
              {value}
              {value >= 8 && (
                <div className="text-xs mt-1">
                  (Very strongly - I'm almost certain this will happen)
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ResponseScale;