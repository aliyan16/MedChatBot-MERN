const SpotlightInsights = ({ improvement, strongestImpact }) => {
  return (
    <div className="bg-black border p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-2">Spotlight Insights</h3>
      <p className="text-white">Your model has improved by {improvement}% this week.</p>
      <p className="text-white">{strongestImpact} showed the strongest positive impact.</p>
    </div>
  );
};

export default SpotlightInsights;