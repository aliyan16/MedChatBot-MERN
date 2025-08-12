import React from 'react';

const Message = ({ sender, content, time, isUser = false, isAI = false }) => {
  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {isAI && (
        <div className="flex-shrink-0 mr-3">
          <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
            AI
          </div>
        </div>
      )}
      
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${isUser ? 'order-1' : ''}`}>
        <div className={`flex items-center gap-2 mb-1 ${isUser ? 'justify-end' : 'justify-start'}`}>
          <span className={`font-medium text-xs ${isAI ? 'text-white' : isUser ? 'text-gray-300' : 'text-gray-400'}`}>
            {sender}
          </span>
          <span className="text-gray-500 text-xs">{time}</span>
        </div>
        
        <div className={`rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-purple-600 text-white rounded-br-md' 
            : 'bg-gray-800 text-gray-100 border border-gray-700 rounded-bl-md'
        }`}>
          {typeof content === 'string' ? (
            <p className="text-sm leading-relaxed break-words">{content}</p>
          ) : (
            <div className="text-sm leading-relaxed">{content}</div>
          )}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 ml-3 order-2">
          <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
            You
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;