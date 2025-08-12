// WelcomeStep.js
import React from 'react';
import './welcomeStep.css';

const WelcomeStep = ({ nextStep, formData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h2>Welcome to MindFlow AI</h2>
        <p>Listing for your profile use of the personalized experience.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="next-button">Next</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeStep;