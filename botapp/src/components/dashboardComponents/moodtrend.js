const MoodTrends = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Mood Trends & Progress</h3>
      <div className="text-gray-600 mb-4">Mood Score (1:18)</div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 text-gray-600 font-medium">Time</th>
              <th className="text-left py-2 text-gray-600 font-medium">Week</th>
              <th className="text-left py-2 text-gray-600 font-medium">This</th>
              <th className="text-left py-2 text-gray-600 font-medium">Fit</th>
              <th className="text-left py-2 text-gray-600 font-medium">Set</th>
              <th className="text-left py-2 text-gray-600 font-medium">Size</th>
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