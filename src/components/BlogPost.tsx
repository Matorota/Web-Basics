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
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} read</span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
          {title}
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
