import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center mt-16" aria-label="Pagination">
      <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 transition-all duration-200 flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>

        <div className="flex border-l border-r border-gray-200">
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-4 py-3 text-sm text-gray-400 select-none">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(page as number)}
                  className={`px-4 py-3 text-sm font-medium transition-all duration-200 min-w-[44px] ${
                    currentPage === page
                      ? "text-white bg-blue-600 shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-3 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 transition-all duration-200 flex items-center gap-2"
        >
          Next
          <svg
            className="w-4 h-4"
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
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
