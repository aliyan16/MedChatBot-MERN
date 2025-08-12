import React from 'react';

const HomeStep = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="bg-black border p-8 rounded-lg shadow-md max-w-[500px] w-full mx-auto text-center">
      <h2 className="text-[#ffffff] mb-2.5 text-2xl font-semibold">Android Home</h2>
      <p className="text-[#ffffff] mb-7">Home should be written you!</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-5 text-left">
          <label className="block mb-2 font-bold text-[#ffffff]">Home Preference</label>
          <select
            className="w-full p-2.5 border bg-black text-white border-gray-300 rounded text-base"
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
        
        <div className="flex justify-between mt-7">
          <button 
            type="button" 
            onClick={prevStep} 
            className="bg-[#95a5a6] text-white py-3 px-6 rounded hover:bg-[#7f8c8d] transition-colors"
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

export default HomeStep;