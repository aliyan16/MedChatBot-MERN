// HomeStep.js
import React from 'react';
import './homeProcess.css';

const HomeStep = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Android Home</h2>
      <p>Home should be written you!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Home Preference</label>
          <select
            value={formData.homePreference}
            onChange={(e) => handleChange('homePreference', e.target.value)}
            required
          >
            <option value="">Select your preference</option>
            <option value="minimal">Minimal</option>
            <option value="productive">Productive</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        
        <div className="button-group">
          <button type="button" onClick={prevStep} className="back-button">Back</button>
          <button type="submit" className="next-button">Next</button>
        </div>
      </form>
    </div>
  );
};

export default HomeStep;