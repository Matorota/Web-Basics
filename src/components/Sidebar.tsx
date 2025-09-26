interface SidebarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
  onTagClick?: (tag: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  theme,
  onThemeChange,
  onTagClick,
}) => {
  const themes = [
    {
      name: "black",
      label: "Dark Mode",
      color: "from-gray-900 to-black",
    },
    {
      name: "white",
      label: "Bright White",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <aside className="space-y-8">
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
          <div>
            <p className="text-sm font-medium text-gray-900">MyBlog Team</p>
            <p className="text-xs text-gray-500">Content Creators</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
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
                <span className="text-blue-600 ml-auto font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>

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
            "Frontend",
            "Performance",
          ].map((tag) => (
            <button
              key={tag}
              onClick={() => onTagClick?.(tag)}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
