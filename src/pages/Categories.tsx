import React from "react";

const Categories: React.FC = () => {
  const categories = [
    {
      name: "Web Development",
      description:
        "Frontend and backend development tutorials, frameworks, and best practices",
      count: 25,
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
      name: "JavaScript",
      description: "Modern JavaScript, ES6+, frameworks, and advanced concepts",
      count: 18,
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
      name: "React",
      description:
        "React components, hooks, state management, and performance optimization",
      count: 22,
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
        "Type safety, interfaces, generics, and advanced TypeScript patterns",
      count: 15,
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "CSS & Design",
      description: "Styling, layouts, animations, and modern design techniques",
      count: 20,
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
      name: "Backend",
      description: "Server-side development, databases, APIs, and deployment",
      count: 12,
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
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
          />
        </svg>
      ),
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Performance",
      description:
        "Optimization techniques, monitoring, and best practices for speed",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Tools & DevOps",
      description:
        "Development tools, CI/CD, containerization, and workflow optimization",
      count: 10,
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      color: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
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

      {/* Categories Grid */}
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

      {/* Popular Topics */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Most Popular Topics
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React Hooks",
            "TypeScript Generics",
            "CSS Grid",
            "Node.js APIs",
            "Performance Optimization",
            "Responsive Design",
            "State Management",
            "Testing Strategies",
            "Docker Containers",
            "GraphQL",
            "Next.js",
            "Tailwind CSS",
          ].map((topic, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-300 hover:text-blue-700 cursor-pointer transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-blue-600 mb-2">110+</div>
          <div className="text-gray-600 text-sm">Total Articles</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-green-600 mb-2">8</div>
          <div className="text-gray-600 text-sm">Categories</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
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
