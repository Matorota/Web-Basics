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

  const getIcon = (categoryName: string) => {
    switch (categoryName) {
      case "React":
        return "React";
      case "TypeScript":
        return "TS";
      case "CSS":
        return "CSS";
      case "JavaScript":
        return "JS";
      case "Frontend":
        return "Frontend";
      case "Performance":
        return "Performance";
      default:
        return "Dev";
    }
  };

  return (
    <div className="w-full px-2 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Browse by Category
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our collection of articles organized by topics.
        </p>
      </div>

      <div className="space-y-4 mb-10">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {getIcon(category.name)}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </div>
              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {category.count} articles
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              {category.description}
            </p>

            <div className="text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center">
              Browse Articles
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
    </div>
  );
};

export default Categories;
