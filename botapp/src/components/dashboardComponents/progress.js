const ProgressSummary = ({ improvement, strongestImpact }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-5">
      <h2 className="text-xl font-semibold text-gray-800">
        Next model has improved by {improvement}% this week.
      </h2>
      <p className="text-gray-600">{strongestImpact} showed the strongest positive impact.</p>
    </div>
  );
};

export default ProgressSummary;