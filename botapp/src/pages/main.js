// App.js
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import WelcomeStep from './WelcomeStep';
import HomeStep from './HomeStep';
import ProcessStep from './ProcessStep';
import CompleteStep from './CompleteStep';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    homePreference: '',
    processControl: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeStep nextStep={nextStep} formData={formData} handleChange={handleChange} />;
      case 2:
        return <HomeStep nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
      case 3:
        return <ProcessStep nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />;
      case 4:
        return <CompleteStep />;
      default:
        return <WelcomeStep nextStep={nextStep} formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>MindFlow AI</h1>
      </header>
      
      <ProgressBar currentStep={step} totalSteps={4} />
      
      <div className="step-container">
        {renderStep()}
      </div>
      
      <footer className="app-footer">
        <p>© 2024 MindFlow AI. All rights reserved | Advanced CSI Training Assistant</p>
      </footer>
    </div>
  );
};

export default App;