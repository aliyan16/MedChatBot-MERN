const WelcomeBanner = () => {
  return (
    <div className="mb-8 justify-center text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white">Welcome back, Alex!</h1>
      <p className="text-white italic my-2">
        "The journey of a thousand miles begins with one step. Today is your step toward emotional wellness."
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
        Start New Session
      </button>
    </div>
  );
};

export default WelcomeBanner;