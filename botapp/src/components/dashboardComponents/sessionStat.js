const SessionStats = () => {
  return (
    <div className="bg-black border  p-4 rounded-lg shadow-sm grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <h4 className="text-white font-medium">Session Coupled</h4>
        <p className="text-2xl font-bold text-white">24</p>
        <p className="text-white text-sm">This month</p>
      </div>
      
      <div className="space-y-1">
        <h4 className="text-white font-medium">Annual Entrée</h4>
        <p className="text-2xl font-bold text-white">18</p>
        <p className="text-white text-sm">This month</p>
      </div>
    </div>
  );
};

export default SessionStats;