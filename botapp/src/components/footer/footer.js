import React from 'react';
import './footer.css'; // We'll create this CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2024 MindFlow AI. All rights reserved | A Powered CBT Therapy Assistant</p>
        </div>
        
        <div className="footer-links">
          <a href="/about">About MindFlow AI</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/resources">Crisis Resources</a>
          <a href="/contact">Contact Support</a>
        </div>
        
        <div className="footer-right">
          <span className="emergency-contact">Emergency: 911</span>
          <span className="language-selector">Language: EN</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;