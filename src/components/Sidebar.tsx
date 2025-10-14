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
          <>
            <div
              className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6 mb-6`}
            >
              <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold ${colors.textColor} text-sm`}>
                    Email
                  </h4>
                  <p className={`${colors.secondaryTextColor} text-sm mt-1`}>
                    hello@myblog.com
                  </p>
                  <p className={`${colors.secondaryTextColor} text-xs mt-1`}>
                    We typically respond within 24 hours
                  </p>
                </div>

                <div>
                  <h4 className={`font-semibold ${colors.textColor} text-sm`}>
                    Live Chat
                  </h4>
                  <p className={`${colors.secondaryTextColor} text-sm mt-1`}>
                    Available Mon-Fri, 9AM-6PM EST
                  </p>
                  <p className={`${colors.secondaryTextColor} text-xs mt-1`}>
                    Click the chat bubble in the bottom right
                  </p>
                </div>

                <div>
                  <h4 className={`font-semibold ${colors.textColor} text-sm`}>
                    Social Media
                  </h4>
                  <p className={`${colors.secondaryTextColor} text-sm mt-1`}>
                    @myblog on Twitter
                  </p>
                  <p className={`${colors.secondaryTextColor} text-xs mt-1`}>
                    Follow us for updates and quick questions
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${colors.bgColor} rounded-xl shadow-sm border ${colors.borderColor} p-6`}
            >
              <h3 className={`text-lg font-semibold ${colors.titleColor} mb-4`}>
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                <div className={`text-sm ${colors.secondaryTextColor}`}>
                  How often do you publish new content?
                </div>
                <div className={`text-sm ${colors.secondaryTextColor}`}>
                  Can I contribute as a guest author?
                </div>
                <div className={`text-sm ${colors.secondaryTextColor}`}>
                  Do you offer consulting services?
                </div>
                <div className={`text-sm ${colors.secondaryTextColor}`}>
                  How can I request a tutorial topic?
                </div>
              </div>
              <button
                className={`mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1`}
              >
                View all FAQs
              </button>
            </div>
          </>
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
                "React",
                "TypeScript",
                "CSS",
                "JavaScript",
                "Frontend",
                "Performance",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate?.("home");
                    onTagClick?.(item);
                  }}
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
