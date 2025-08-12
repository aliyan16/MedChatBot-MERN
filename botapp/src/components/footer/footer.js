import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 border-t border-gray-700 text-sm w-full">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center flex-wrap">
        <div className="flex-1 min-w-[300px] mb-2.5">
          <p>© 2024 MindFlow AI. All rights reserved | A Powered CBT Therapy Assistant</p>
        </div>
        
        <div className="flex flex-wrap gap-4 mx-5">
          <a href="/about" className="text-gray-300 no-underline hover:text-white transition-colors">
            About MindFlow AI
          </a>
          <a href="/privacy" className="text-gray-300 no-underline hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-300 no-underline hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="/resources" className="text-gray-300 no-underline hover:text-white transition-colors">
            Crisis Resources
          </a>
          <a href="/contact" className="text-gray-300 no-underline hover:text-white transition-colors">
            Contact Support
          </a>
        </div>
        
        <div className="flex gap-5 items-center">
          <span className="text-red-400 font-bold">Emergency: 911</span>
          <span className="text-gray-400 cursor-pointer">Language: EN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;