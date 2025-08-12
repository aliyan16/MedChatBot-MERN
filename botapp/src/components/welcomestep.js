import React from 'react';

const WelcomeStep = ({ nextStep, formData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="flex justify-center items-center flex-1">
      <div className="bg-black p-7 rounded-xl border-white border shadow-md max-w-[500px] w-full text-center">
        <h2 className="text-[#ffffff] mb-2.5 text-2xl font-semibold">Welcome to MindFlow AI</h2>
        <p className="text-[#ffffff] mb-7">Listing for your profile use of the personalized experience.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-5 text-left">
            <label htmlFor="name" className="block mb-2 font-bold text-[#ffffff]">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2.5 border border-gray-300 rounded text-base"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </div>
          
          <div className="mb-5 text-left">
            <label htmlFor="email" className="block mb-2 font-bold text-[#ffffff]">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 border border-gray-300 rounded text-base"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors mt-2.5 w-full"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeStep;