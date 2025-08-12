import React from 'react';

const SessionHeader = () => {
  return (
    <div className="bg-purple-600 p-4 rounded-t-lg">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-purple-800 rounded flex items-center justify-center">
          <span className="text-white text-xs">💭</span>
        </div>
        <div>
          <h2 className="text-white font-semibold">Therapy Session</h2>
          <p className="text-purple-200 text-sm">CBT Technique - Cognitive Restructuring</p>
        </div>
      </div>
      <div className="bg-red-500 text-white px-2 py-1 rounded text-xs inline-block mt-2">
        LIVE SESSION
      </div>
    </div>
  );
};

export default SessionHeader;