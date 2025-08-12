import React from 'react';

const Message = ({ sender, content, time, isUser = false, isAI = false }) => {
  return (
    <div className={`flex mb-6 ${isUser ? 'justify-end' : ''}`}>
      {isAI && (
        <div className="flex-shrink-0 mr-4">
          <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
            AI
          </div>
        </div>
      )}
      
      <div className={`flex-1 max-w-4xl ${isUser ? 'text-right' : ''}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={`font-medium text-sm ${isAI ? 'text-white' : 'text-gray-300'}`}>
            {sender}
          </span>
          <span className="text-gray-500 text-xs">{time}</span>
        </div>
        
        <div className={`rounded-lg p-4 ${
          isUser 
            ? 'bg-purple-600 text-white ml-auto max-w-3xl' 
            : 'bg-gray-800 text-gray-100 border border-gray-700'
        }`}>
          {typeof content === 'string' ? (
            <p className="text-sm leading-relaxed">{content}</p>
          ) : (
            <div className="text-sm leading-relaxed">{content}</div>
          )}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 ml-4">
          <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
            You
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;