interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="filter-bar mb-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            {category === "all" ? "All Categories" : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
