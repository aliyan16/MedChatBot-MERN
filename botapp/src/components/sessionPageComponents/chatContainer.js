import React, { useState, useEffect, useRef } from 'react';
import SessionHeader from './sessionHeader';
import Message from './chat';
import ChatInput from './chatInput';

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "MindFlow AI",
      time: "12:45",
      content: "Welcome to your therapy session! I'm here to guide you through some cognitive behavioral techniques. Let's start by identifying any negative thoughts you've been experiencing lately. Can you share what's been on your mind?",
      isAI: true
    },
    {
      id: 2,
      sender: "You",
      time: "12:46",
      content: "I've been feeling really anxious about my upcoming presentation at work. I keep thinking I'm going to mess up and everyone will judge me.",
      isUser: true
    },
    {
      id: 3,
      sender: "MindFlow AI",
      time: "12:47",
      content: (
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
      ),
      isAI: true
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Auto scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + 
           now.getMinutes().toString().padStart(2, '0');
  };

  // Handle sending new message
  const handleSendMessage = (messageContent) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      time: getCurrentTime(),
      content: messageContent,
      isUser: true
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);

    // Simulate AI response after delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: "MindFlow AI",
        time: getCurrentTime(),
        content: "Thank you for sharing that with me. I can see how those thoughts would create anxiety. Let's work together to examine these thoughts more closely and find some helpful strategies.",
        isAI: true
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex-1 bg-gray-900 rounded-lg border border-gray-700 flex flex-col min-h-0">
      <SessionHeader />
      
      {/* Chat Messages Container - This will take available space and scroll */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-6"
        style={{
          minHeight: 0, // Important: allows flex child to shrink below content size
          maxHeight: '100%'
        }}
      >
        <div className="space-y-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              sender={message.sender}
              time={message.time}
              content={message.content}
              isUser={message.isUser}
              isAI={message.isAI}
            />
          ))}
          
          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Chat Input - Fixed at bottom */}
      <div className="flex-shrink-0">
        <ChatInput 
          onSendMessage={handleSendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  );
};

export default ChatContainer;