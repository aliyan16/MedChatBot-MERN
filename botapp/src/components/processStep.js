import React from 'react';

const ProcessStep = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="bg-black p-8 rounded-lg border shadow-md max-w-[500px] w-full mx-auto text-center">
      <h2 className="text-[#ffffff] mb-2.5 text-2xl font-semibold">Android Process Control</h2>
      <p className="text-[#ffffff] mb-7">Sales processes</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-5 text-left">
          <label className="block mb-2 font-bold text-[#ffffff]">Process Control Preference</label>
          <select
            className="w-full bg-black hover:cursor-pointer cursor-pointer p-2.5 border border-gray-300 rounded text-base"
            value={formData.processControl}
            onChange={(e) => handleChange('processControl', e.target.value)}
            required
          >
            <option className='cursor-pointer' value="">Select your preference</option>
            <option className='cursor-pointer' value="automated">Automated</option>
            <option className='cursor-pointer' value="manual">Manual</option>
            <option className='cursor-pointer' value="hybrid">Hybrid</option>
          </select>
        </div>
        
        <div className="flex justify-between mt-7">
          <button 
            type="button" 
            onClick={prevStep} 
            className="bg-[#000000] border  text-white py-3 px-6 rounded hover:bg-[#7f8c8d] transition-colors"
          >
            Back
          </button>
          <button 
            type="submit" 
            className="bg-[#3498db] text-white py-3 px-6 rounded hover:bg-[#2980b9] transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProcessStep;