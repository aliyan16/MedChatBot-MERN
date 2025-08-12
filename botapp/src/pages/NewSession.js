import React from 'react';
import SessionProgress from '../components/sessionPageComponents/sessionProgress';
import SessionInsights from '../components/sessionPageComponents/sessionInsight';
import ChatContainer from '../components/sessionPageComponents/chatContainer';

const TherapySession = () => {
  return (
    <div className="flex-1 p-6 bg-black h-full">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-400">
          <span className="text-purple-400">Dashboard</span>
          <span className="mx-2">›</span>
          <span className="text-purple-400">Therapy Sessions</span>
          <span className="mx-2">›</span>
          <span>Therapy Session</span>
        </div>
      </div>
      
      <div className="flex gap-6 h-full">
        {/* Left Column - Session Progress & Insights */}
        <div className="w-80 flex-shrink-0">
          <SessionProgress />
          <SessionInsights />
        </div>
        
        {/* Right Column - Chat Interface */}
        <ChatContainer />
      </div>
    </div>
  );
};

export default TherapySession;