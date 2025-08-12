const WelcomeBanner = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome back, Alex!</h1>
      <p className="text-gray-600 italic my-2">
        "The journey of a thousand miles begins with one step. Today is your step toward emotional wellness."
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
        Start New Session
      </button>
    </div>
  );
};

export default WelcomeBanner;