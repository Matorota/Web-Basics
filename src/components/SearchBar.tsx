import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="search-container mb-6 sm:mb-8">
      <div className="relative w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search articles by title, content, author, or tags... "
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="
            w-full 
            px-4 py-3 
            sm:px-5 sm:py-4
            md:px-6 md:py-4
            lg:px-6 lg:py-5
            text-sm sm:text-base md:text-lg
            border-2 border-gray-300 
            rounded-lg 
            bg-white 
            text-gray-900 
            placeholder-gray-500
            focus:border-blue-500 
            focus:ring-2 
            focus:ring-blue-200 
            focus:outline-none
            transition-all duration-200
            shadow-sm
            hover:shadow-md
            min-w-0
            search-input
          "
          style={{
            minWidth: "320px",
            maxWidth: "100%",
          }}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
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
      </div>
    </div>
  );
};

export default SearchBar;
