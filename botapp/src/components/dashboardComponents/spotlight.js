const SpotlightInsights = ({ improvement, strongestImpact }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Spotlight Insights</h3>
      <p className="text-gray-700">Your model has improved by {improvement}% this week.</p>
      <p className="text-gray-700">{strongestImpact} showed the strongest positive impact.</p>
    </div>
  );
};

export default SpotlightInsights;