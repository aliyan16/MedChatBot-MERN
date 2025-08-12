// Onboarding.js
import React, { useState } from 'react';
import ProgressBar from '../components/progressbar';
import WelcomeStep from '../components/welcomestep';
import HomeStep from '../components/homestep';
import ProcessStep from '../components/processStep';
import CompleteStep from '../components/completeStep';

const Onboarding = () => {
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
    <div className="min-h-screen bg-black text-white flex flex-col max-w-4xl mx-auto pb-28">
      <ProgressBar currentStep={step} totalSteps={4} />
      
      <div className="flex-1 flex flex-col justify-center">
        {renderStep()}
      </div>
      
    </div>
  );
};

export default Onboarding;