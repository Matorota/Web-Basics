import React from "react";

interface SidebarProps {
  theme: string;
  onThemeChange: (theme: string) => void;
  onTagClick?: (tag: string) => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  theme,
  onThemeChange,
  onTagClick,
  currentPage = "home",
  onNavigate,
}) => {
  const themes = [
    {
      name: "black",
      label: "Dark Mode",
    },
    {
      name: "white",
      label: "Light Theme",
    },
  ];

  // Theme-based colors
  const getThemeColors = () => {
    if (theme === "black") {
      return {
        bgColor: "bg-gray-800",
        borderColor: "border-gray-700",
        textColor: "text-white",
        secondaryTextColor: "text-gray-300",
        titleColor: "text-white",
        buttonBg: "bg-gray-700 hover:bg-gray-600",
        buttonText: "text-white",
        activeBg: "bg-blue-600",
        hoverBg: "hover:bg-gray-700",
      };
    } else {
      return {
        bgColor: "bg-white",
        borderColor: "border-blue-200",
        textColor: "text-black",
        secondaryTextColor: "text-gray-600",
        titleColor: "text-blue-900",
        buttonBg: "bg-blue-100 hover:bg-blue-200",
        buttonText: "text-blue-700",
        activeBg: "bg-blue-500",
        hoverBg: "hover:bg-blue-100",
      };
    }
  };

  const colors = getThemeColors();

  const renderPageSpecificContent = () => {
    switch (currentPage) {
      case "contact":
        return (
          <div
            className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
          >
            <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <svg
                  className={`w-4 h-4 ${colors.secondaryTextColor}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className={colors.textColor}>contact@myblog.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className={`w-4 h-4 ${colors.secondaryTextColor}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className={colors.textColor}>Vilnius, Lithuania</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className={`w-4 h-4 ${colors.secondaryTextColor}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className={colors.textColor}>+370 600 12345</span>
              </div>
            </div>
          </div>
        );

      case "archive":
        return (
          <div
            className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
          >
            <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
              Archive Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`${colors.secondaryTextColor} text-sm`}>
                  Total Posts
                </span>
                <span className={`font-semibold ${colors.titleColor}`}>
                  127
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${colors.secondaryTextColor} text-sm`}>
                  This Month
                </span>
                <span className={`font-semibold ${colors.titleColor}`}>8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${colors.secondaryTextColor} text-sm`}>
                  Categories
                </span>
                <span className={`font-semibold ${colors.titleColor}`}>12</span>
              </div>
            </div>
          </div>
        );

      case "categories":
        return (
          <div
            className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
          >
            <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
              Quick Navigation
            </h3>
            <div className="space-y-2">
              {[
                "React",
                "TypeScript",
                "CSS",
                "JavaScript",
                "Frontend",
                "Performance",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onNavigate?.("home");
                    onTagClick?.(category);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm ${colors.buttonText} ${colors.buttonBg} rounded-lg transition-all duration-200 transform hover:scale-105 border border-transparent hover:border-blue-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        );

      case "about":
        return (
          <div
            className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
          >
            <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
              Team Skills
            </h3>
            <div className="space-y-3">
              {[
                { skill: "React", level: 95 },
                { skill: "TypeScript", level: 90 },
                { skill: "CSS/Design", level: 85 },
                { skill: "Node.js", level: 80 },
              ].map((item) => (
                <div key={item.skill} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className={colors.textColor}>{item.skill}</span>
                    <span className={colors.titleColor}>{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "privacy":
        return (
          <div
            className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
          >
            <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
              Quick Navigation
            </h3>
            <div className="space-y-2">
              {[
                "Home",
                "About",
                "Categories",
                "Contact",
                "Archive",
                "Terms",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate?.(item.toLowerCase())}
                  className={`w-full text-left px-4 py-3 text-sm ${colors.buttonText} ${colors.buttonBg} rounded-lg transition-all duration-200 transform hover:scale-105 border border-transparent hover:border-blue-300`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div
            className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
          >
            <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
              Quick Navigation
            </h3>
            <div className="space-y-2">
              {[
                "React",
                "TypeScript",
                "CSS",
                "JavaScript",
                "Frontend",
                "Performance",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => onTagClick?.(item)}
                  className={`w-full text-left px-4 py-3 text-sm ${colors.buttonText} ${colors.buttonBg} rounded-lg transition-all duration-200 transform hover:scale-105 border border-transparent hover:border-blue-300`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <aside className="space-y-8">
      <div
        className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
      >
        <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
          About This Blog
        </h3>
        <p
          className={`text-sm ${colors.secondaryTextColor} leading-relaxed mb-4`}
        >
          Welcome to our blog! Here we share insights, tutorials, and tips about
          web development, design, and the latest technology trends. Join our
          community of developers and designers.
        </p>
        <div className="flex items-center space-x-3">
          <div>
            <p className={`text-sm font-medium ${colors.textColor}`}>
              MyBlog Team
            </p>
            <p className={`text-xs ${colors.secondaryTextColor}`}>
              Content Creators
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
      >
        <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
          Choose Theme
        </h3>
        <div className="space-y-3">
          {themes.map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => onThemeChange(themeOption.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${
                theme === themeOption.name
                  ? `${colors.activeBg} text-white`
                  : `${colors.buttonBg} ${colors.buttonText}`
              }`}
            >
              <span className="text-sm font-medium">{themeOption.label}</span>
              {theme === themeOption.name && (
                <span className="text-xs">Active</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {renderPageSpecificContent()}
    </aside>
  );
};

export default Sidebar;
