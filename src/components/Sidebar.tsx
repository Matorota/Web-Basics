const Sidebar: React.FC = () => {
  const popularPosts = [
    { title: "Getting Started with React", date: "Jan 15, 2024" },
    { title: "TypeScript Best Practices", date: "Jan 10, 2024" },
    { title: "Modern CSS Techniques", date: "Jan 5, 2024" },
  ];

  const categories = [
    { name: "Web Development", count: 12 },
    { name: "JavaScript", count: 8 },
    { name: "Design", count: 5 },
    { name: "Tutorials", count: 15 },
  ];

  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
            >
              <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer mb-1">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                {category.name}
              </span>
              <span className="text-sm text-gray-500">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscribe</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
