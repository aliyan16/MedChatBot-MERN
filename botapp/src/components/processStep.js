// ProcessStep.js
import React from 'react';
import './homeProcess.css';

const ProcessStep = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Android Process Control</h2>
      <p>Sales processes</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Process Control Preference</label>
          <select
            value={formData.processControl}
            onChange={(e) => handleChange('processControl', e.target.value)}
            required
          >
            <option value="">Select your preference</option>
            <option value="automated">Automated</option>
            <option value="manual">Manual</option>
            <option value="hybrid">Hybrid</option>
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

export default ProcessStep;