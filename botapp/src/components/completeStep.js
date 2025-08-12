// CompleteStep.js
import React from 'react';
import './completeStep.css';

const CompleteStep = () => {
  return (
    <div className="complete-container">
      <div className="complete-card">
        <h2>Setup Complete!</h2>
        <p>Your MindFlow AI experience is now personalized for you.</p>
        <div className="checkmark">✓</div>
      </div>
    </div>
  );
};

export default CompleteStep;