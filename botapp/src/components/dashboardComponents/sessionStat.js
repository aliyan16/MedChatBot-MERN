const SessionStats = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <h4 className="text-gray-600 font-medium">Session Coupled</h4>
        <p className="text-2xl font-bold text-gray-800">24</p>
        <p className="text-gray-500 text-sm">This month</p>
      </div>
      
      <div className="space-y-1">
        <h4 className="text-gray-600 font-medium">Annual Entrée</h4>
        <p className="text-2xl font-bold text-gray-800">18</p>
        <p className="text-gray-500 text-sm">This month</p>
      </div>
    </div>
  );
};

export default SessionStats;