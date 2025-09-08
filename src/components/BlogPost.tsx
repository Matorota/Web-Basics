interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  tags,
}) => {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-xs font-semibold">
                {author.charAt(0)}
              </span>
            </div>
            <span className="font-medium">{author}</span>
          </div>
          <span className="mx-3 text-gray-300">•</span>
          <span>{date}</span>
          <span className="mx-3 text-gray-300">•</span>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-gray-400 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{readTime} read</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 cursor-pointer transition-colors duration-200 leading-tight">
          {title}
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed text-lg">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm rounded-full hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 cursor-pointer transition-all duration-200 border border-gray-200 hover:border-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
            Read More
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
      </div>
    </article>
  );
};

export default BlogPost;
