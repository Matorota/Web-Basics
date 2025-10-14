import React from "react";

interface CategoriesProps {
  onNavigate?: (page: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onNavigate }) => {
  const handleCategoryClick = (categoryName: string) => {
    if (onNavigate) {
      onNavigate("home");
      setTimeout(() => {
        const filterEvent = new CustomEvent("filterByCategory", {
          detail: categoryName,
        });
        window.dispatchEvent(filterEvent);
      }, 100);
    }
  };

  const categories = [
    {
      name: "React",
      description:
        "Modern React development with hooks, components, and best practices for building dynamic user interfaces.",
      count: 8,
    },
    {
      name: "TypeScript",
      description:
        "Type-safe JavaScript development with advanced TypeScript features, interfaces, and generics.",
      count: 6,
    },
    {
      name: "CSS",
      description:
        "Modern CSS techniques, layouts, animations, and styling best practices for beautiful web design.",
      count: 5,
    },
    {
      name: "JavaScript",
      description:
        "Core JavaScript concepts, ES6+ features, and modern development patterns for web applications.",
      count: 7,
    },
    {
      name: "Frontend",
      description:
        "Frontend development techniques, user interface design, and creating engaging user experiences.",
      count: 9,
    },
    {
      name: "Performance",
      description:
        "Web performance optimization, loading strategies, and techniques for faster applications.",
      count: 4,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Browse by Category
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our comprehensive collection of articles organized by topics.
          Find exactly what you're looking for to advance your development
          skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {categories.map((category, index) => {
          // Define category-specific visual elements
          const getCategoryVisuals = (categoryName: string) => {
            switch (categoryName) {
              case "React":
                return {
                  gradient: "from-cyan-400 to-blue-500",
                  bgPattern: "react",
                  iconBg: "bg-blue-500",
                  iconText: "⚛️",
                };
              case "TypeScript":
                return {
                  gradient: "from-blue-500 to-indigo-600",
                  bgPattern: "typescript",
                  iconBg: "bg-blue-600",
                  iconText: "TS",
                };
              case "CSS":
                return {
                  gradient: "from-purple-400 to-pink-500",
                  bgPattern: "css",
                  iconBg: "bg-purple-500",
                  iconText: "🎨",
                };
              case "JavaScript":
                return {
                  gradient: "from-yellow-400 to-orange-500",
                  bgPattern: "javascript",
                  iconBg: "bg-yellow-500",
                  iconText: "JS",
                };
              case "Frontend":
                return {
                  gradient: "from-green-400 to-teal-500",
                  bgPattern: "frontend",
                  iconBg: "bg-green-500",
                  iconText: "🖥️",
                };
              case "Performance":
                return {
                  gradient: "from-red-400 to-pink-500",
                  bgPattern: "performance",
                  iconBg: "bg-red-500",
                  iconText: "⚡",
                };
              default:
                return {
                  gradient: "from-gray-400 to-gray-600",
                  bgPattern: "default",
                  iconBg: "bg-gray-500",
                  iconText: "📚",
                };
            }
          };

          const visuals = getCategoryVisuals(category.name);

          return (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
              style={{ zIndex: 10 }}
            >
              {/* Header Image/Pattern Section */}
              <div
                className={`relative h-32 bg-gradient-to-br ${visuals.gradient} flex items-center justify-center`}
              >
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                        <g fill="#ffffff" fill-opacity="0.3">
                          <rect x="10" y="10" width="8" height="8" rx="2"/>
                          <rect x="30" y="20" width="6" height="6" rx="1"/>
                          <rect x="45" y="5" width="4" height="4" rx="1"/>
                          <rect x="5" y="40" width="10" height="2" rx="1"/>
                          <rect x="40" y="35" width="12" height="2" rx="1"/>
                          <circle cx="25" cy="45" r="3"/>
                        </g>
                      </svg>
                    `)}')`,
                  }}
                />

                {/* Category Icon */}
                <div
                  className={`relative ${visuals.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}
                  style={{ zIndex: 15 }}
                >
                  {visuals.iconText}
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute top-3 right-3 w-3 h-3 bg-white/30 rounded-full animate-pulse"
                  style={{ zIndex: 12 }}
                />
                <div
                  className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-bounce"
                  style={{ animationDelay: "1s", zIndex: 12 }}
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {category.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">
                    View Articles
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <svg
                      className="w-4 h-4 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: 5 }}
              />
            </div>
          );
        })}
      </div>

      {/* Featured Categories Banner */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-12 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <defs>
                  <pattern id="tech-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#tech-grid)"/>
                <circle cx="12" cy="12" r="2" fill="#ffffff"/>
                <circle cx="50" cy="30" r="1.5" fill="#ffffff"/>
                <circle cx="80" cy="70" r="2.5" fill="#ffffff"/>
                <rect x="30" y="60" width="6" height="6" rx="1" fill="#ffffff"/>
              </svg>
            `)}')`,
          }}
        />

        <div className="relative text-center" style={{ zIndex: 15 }}>
          <h2 className="text-2xl font-bold mb-4">Popular This Month</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Discover the most trending topics in web development. Stay
            up-to-date with the latest tools and techniques.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["React Hooks", "CSS Grid", "TypeScript Tips", "Performance"].map(
              (topic, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-pointer"
                  style={{ zIndex: 20 }}
                >
                  {topic}
                </div>
              )
            )}
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div
          className="absolute top-4 left-8 w-16 h-16 bg-white/5 rounded-full animate-pulse"
          style={{ zIndex: 10 }}
        />
        <div
          className="absolute bottom-6 right-12 w-20 h-20 bg-white/5 rounded-full animate-bounce"
          style={{ animationDelay: "2s", zIndex: 10 }}
        />
        <div
          className="absolute top-1/2 right-4 w-8 h-8 bg-yellow-300/20 rounded-full animate-ping"
          style={{ animationDelay: "1s", zIndex: 10 }}
        />
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">39+</div>
          <div className="text-gray-600 text-sm">Total Articles</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-green-600 mb-2">6</div>
          <div className="text-gray-600 text-sm">Categories</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
          <div className="text-gray-600 text-sm">Topics Covered</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-orange-600 mb-2">Weekly</div>
          <div className="text-gray-600 text-sm">New Content</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
