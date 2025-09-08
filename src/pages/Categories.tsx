import React from "react";

interface CategoriesProps {
  onNavigate?: (page: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({}) => {
  const categories = [
    {
      name: "React",
      description:
        "Modern React development with hooks, components, and best practices for building dynamic user interfaces.",
      count: 8,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "TypeScript",
      description:
        "Type-safe JavaScript development with advanced TypeScript features, interfaces, and generics.",
      count: 6,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "CSS",
      description:
        "Modern CSS techniques, layouts, animations, and styling best practices for beautiful web design.",
      count: 5,
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "JavaScript",
      description:
        "Core JavaScript concepts, ES6+ features, and modern development patterns for web applications.",
      count: 7,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Frontend",
      description:
        "Frontend development techniques, user interface design, and creating engaging user experiences.",
      count: 9,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Performance",
      description:
        "Web performance optimization, loading strategies, and techniques for faster applications.",
      count: 4,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-purple-500 to-indigo-600",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}
            >
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {category.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-600">
                {category.count} articles
              </span>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200"
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
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-blue-600 mb-2">39+</div>
          <div className="text-gray-600 text-sm">Total Articles</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-green-600 mb-2">6</div>
          <div className="text-gray-600 text-sm">Categories</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
          <div className="text-gray-600 text-sm">Topics Covered</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-orange-600 mb-2">Weekly</div>
          <div className="text-gray-600 text-sm">New Content</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
