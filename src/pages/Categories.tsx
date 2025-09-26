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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
          >
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
