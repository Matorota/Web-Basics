interface SidebarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ theme, onThemeChange }) => {
  const themes = [
    { name: "blue", label: "Ocean Blue", color: "from-blue-500 to-cyan-500" },
    {
      name: "green",
      label: "Forest Green",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "purple",
      label: "Royal Purple",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <aside className="space-y-8">
      {/* About Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          About This Blog
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Welcome to our blog! Here we share insights, tutorials, and tips about
          web development, design, and the latest technology trends. Join our
          community of developers and designers.
        </p>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">MB</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">MyBlog Team</p>
            <p className="text-xs text-gray-500">Content Creators</p>
          </div>
        </div>
      </div>

      {/* Theme Switcher */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <svg
            className="w-5 h-5 text-gray-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
            />
          </svg>
          Choose Theme
        </h3>
        <div className="space-y-3">
          {themes.map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => onThemeChange(themeOption.name)}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                theme === themeOption.name
                  ? "bg-blue-50 border-2 border-blue-200"
                  : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-r ${themeOption.color} mr-3`}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                {themeOption.label}
              </span>
              {theme === themeOption.name && (
                <svg
                  className="w-4 h-4 text-blue-600 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            "CSS",
            "JavaScript",
            "Node.js",
            "Design",
            "Frontend",
            "Backend",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
