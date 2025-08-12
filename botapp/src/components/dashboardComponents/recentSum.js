const RecentSessions = () => {
  const sessions = [
    { name: "Anxiety Management", category: "Technology", duration: "45 minutes" },
    { name: "Mindfulness Practice", timeAgo: "3 days ago", duration: "30 minutes" },
    { name: "Cognitive Reabundancy", timeAgo: "5 days ago", duration: "50 minutes" },
  ];

  return (
    <div className="bg-black border  p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-3">Recent Sessions</h3>
      <ul className="space-y-3">
        {sessions.map((session, index) => (
          <li key={index} className="border-b pb-2 last:border-b-0 last:pb-0">
            <strong className="text-white block">{session.name}</strong>
            <span className="text-white text-sm">
              {session.category ? `${session.category}, ${session.duration}` : `${session.timeAgo}, ${session.duration}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSessions;