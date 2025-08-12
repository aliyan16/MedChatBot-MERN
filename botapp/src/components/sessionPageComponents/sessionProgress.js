import React from 'react';

const SessionProgress = () => {
  const stages = [
    { name: "Welcome & Check-in", completed: true },
    { name: "Goal Setting", completed: true },
    { name: "CBT Technique", completed: true, active: true },
    { name: "Reflection", completed: false },
    { name: "Progress Review", completed: false }
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center mr-3">
          <span className="text-white text-xs">📊</span>
        </div>
        <h2 className="text-white font-semibold">Session Progress</h2>
      </div>
      
      <p className="text-gray-400 text-sm mb-6">3 of 5 stages completed</p>
      
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-4 h-4 rounded-full mr-4 flex items-center justify-center
              ${stage.completed ? 'bg-green-500' : stage.active ? 'bg-purple-600' : 'bg-gray-600'}`}>
              {stage.completed && <span className="text-white text-xs">✓</span>}
            </div>
            <div className="flex-1">
              <div className={`text-sm ${stage.completed || stage.active ? 'text-white' : 'text-gray-500'}`}>
                {stage.name}
              </div>
              {index < stages.length - 1 && (
                <div className={`w-px h-6 ml-2 mt-1 ${stage.completed ? 'bg-green-500' : 'bg-gray-600'}`} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionProgress;