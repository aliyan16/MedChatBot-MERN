import React from 'react';

const CompleteStep = () => {
  return (
    <div className="flex justify-center items-center flex-1">
      <div className="bg-black border   text-white p-10 rounded-xl shadow-md max-w-[500px] w-full text-center">
        <h2 className="text-[#fbfbfb] mb-2.5 text-2xl font-semibold">Setup Complete!</h2>
        <p className="text-[#ffffff] mb-7">Your MindFlow AI experience is now personalized for you.</p>
        <div className="text-[#2ecc71] text-[60px] my-5">✓</div>
      </div>
    </div>
  );
};

export default CompleteStep;