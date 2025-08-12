import React from 'react';
import SessionHeader from './sessionHeader';
import Message from './chat';

const ChatContainer = () => {
  return (
    <div className="flex-1 bg-gray-900 rounded-lg border border-gray-700 flex flex-col">
      <SessionHeader />
      
      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Message 
          sender="MindFlow AI" 
          time="12:45"
          content="Welcome to your therapy session! I'm here to guide you through some cognitive behavioral techniques. Let's start by identifying any negative thoughts you've been experiencing lately. Can you share what's been on your mind?"
          isAI={true}
        />
        
        <Message 
          sender="You" 
          time="12:46"
          content="I've been feeling really anxious about my upcoming presentation at work. I keep thinking I'm going to mess up and everyone will judge me."
          isUser={true}
        />
        
        <Message 
          sender="MindFlow AI" 
          time="12:47"
          content={
            <>
              <p className="mb-3">
                I understand that presentations can feel overwhelming. Let's work through this together using cognitive restructuring. 
                First, let's identify the specific thoughts that are causing your anxiety. 
                You mentioned "I'm going to mess up" and "everyone will judge me."
              </p>
              <p className="font-medium">
                Let's examine these thoughts. On a scale of 1-10, how strongly do you believe these thoughts right now?
              </p>
            </>
          }
          isAI={true}
        />
      </div>
    </div>
  );
};

export default ChatContainer;