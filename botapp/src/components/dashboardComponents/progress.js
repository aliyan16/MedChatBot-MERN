const ProgressSummary = ({ improvement, strongestImpact }) => {
  return (
    <div className="bg-black border p-4 rounded-lg mb-5 shadow-sm">
      <h2 className="text-xl font-semibold text-white mb-2">
        Next model has improved by {improvement}% this week.
      </h2>
      <p className="text-white">{strongestImpact} showed the strongest positive impact.</p>
    </div>
  );
};

export default ProgressSummary;