const GoalsProgress = () => {
  const goals = [
    { name: "Daily Mindfulness", completed: null, total: null },
    { name: "Weekly Reflection", completed: 2, total: 3 },
    { name: "Mood Tracking", completed: 5, total: 7 }
  ];

  return (
    <div className="bg-black border p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-3">Goals Progress</h3>
      <div className="space-y-3">
        {goals.map((goal, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-white">{goal.name}</span>
            {goal.completed !== null && (
              <span className="text-white font-medium">
                {goal.completed}/{goal.total}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsProgress;