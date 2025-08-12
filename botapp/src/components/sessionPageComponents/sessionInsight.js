import React, { useState } from 'react';

const SessionInsights = () => {
  const [selectedResponse, setSelectedResponse] = useState(null);

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-6">
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center mr-3">
          <span className="text-white text-xs">💡</span>
        </div>
        <h3 className="text-white font-semibold">Session Insights</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">Anxiety Management</span>
        <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs">Cognitive Restructuring</span>
      </div>
      
      <div className="text-gray-400 text-sm mb-4">Quick Notes</div>
      
      <div className="mt-6">
        <p className="text-gray-300 text-sm mb-3">Please select your response:</p>
        <div className="flex flex-wrap gap-2">
          {[...Array(10)].map((_, index) => {
            const value = index + 1;
            const isSelected = selectedResponse === value;
            return (
              <button
                key={value}
                onClick={() => setSelectedResponse(value)}
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
    </div>
  );
};

export default SessionInsights;