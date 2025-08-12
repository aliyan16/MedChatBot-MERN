const MoodTracking = () => {
  const moodEntries = [
    { mood: 7, label: "Coupling" },
    { mood: 8, label: "Coupling" },
    { mood: 8, label: "Coupling" }
  ];

  return (
    <div className="flex gap-4 mt-5">
      {moodEntries.map((entry, index) => (
        <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex-1">
          <span className="text-gray-600 block text-sm">{entry.label}</span>
          <span className="text-gray-800 font-medium">Mood: {entry.mood}/10</span>
        </div>
      ))}
    </div>
  );
};

export default MoodTracking;