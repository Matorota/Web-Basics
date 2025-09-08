interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="search-container mb-8">
      <div className="relative max-w-md mx-auto lg:mx-0">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search posts, tags, or authors..."
          className="search-input block w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200 hover:border-gray-300"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
      {searchQuery && (
        <div className="mt-3 text-center lg:text-left">
          <p className="text-sm text-gray-600">
            Showing results for "
            <span className="font-semibold text-gray-900">{searchQuery}</span>"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
