const QuickAccess = () => {
  const links = [
    "Profile & Settings",
    "Help & Support",
    "Journal",
    "Resources"
  ];

  return (
    <div className="bg-black border p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-white mb-3">Quick Access</h3>
      <ul className="space-y-2 mb-3">
        {links.map((link, index) => (
          <li key={index} className="text-white hover:text-blue-500 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
      <button className="text-blue-500 hover:text-blue-600 text-sm">
        View All Sections
      </button>
    </div>
  );
};

export default QuickAccess;