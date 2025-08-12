const MoodTrends = () => {
  return (
    <div className="bg-black border p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-3">Mood Trends & Progress</h3>
      <div className="text-white mb-4">Mood Score (1:18)</div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 text-white font-medium">Time</th>
              <th className="text-left py-2 text-white font-medium">Week</th>
              <th className="text-left py-2 text-white font-medium">This</th>
              <th className="text-left py-2 text-white font-medium">Fit</th>
              <th className="text-left py-2 text-white font-medium">Set</th>
              <th className="text-left py-2 text-white font-medium">Size</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows would go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoodTrends;