import React from "react";
import type { BlogPostType } from "../constants";

interface BlogPostDetailProps {
  post: BlogPostType;
  onBack: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
      >
        <svg
          className="w-4 h-4 mr-2"
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
        Back to Posts
      </button>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-semibold">
                {post.author.charAt(0)}
              </span>
            </div>
            <span className="font-medium">{post.author}</span>
          </div>
          <span className="mx-3 text-gray-300">•</span>
          <span>{post.date}</span>
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
            <span>{post.readTime} read</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
            {post.excerpt}
          </p>

          {/* Sample content - in a real app, this would be the full post content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Introduction
            </h2>
            <p>
              This is a detailed blog post about {post.title.toLowerCase()}. In
              this comprehensive guide, we'll explore the key concepts, best
              practices, and practical examples that will help you master this
              topic.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Key Concepts
            </h2>
            <p>
              Understanding the fundamentals is crucial for success in any
              technical field. Here we'll break down the most important concepts
              you need to know.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Core principles and foundations</li>
              <li>Best practices and common patterns</li>
              <li>Performance considerations</li>
              <li>Real-world applications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Practical Examples
            </h2>
            <p>
              Let's dive into some practical examples that demonstrate these
              concepts in action. These examples are designed to be immediately
              applicable to your own projects.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Example Code
              </h3>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                <code>{`// Sample code example
function example() {
  console.log("This is a sample code block");
  return "Hello, World!";
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h2>
            <p>
              We've covered the essential aspects of {post.title.toLowerCase()}.
              By applying these concepts and best practices, you'll be
              well-equipped to tackle real-world challenges and build better
              applications.
            </p>

            <p>
              Remember, the key to mastering any technology is practice and
              continuous learning. Keep experimenting, building, and sharing
              your knowledge with the community.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
              Advanced Techniques in Web Development
            </h3>
            <p className="text-gray-600 text-sm">
              Explore advanced concepts and patterns for building scalable
              applications.
            </p>
            <div className="mt-3 text-xs text-gray-500">5 min read</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
              Performance Optimization Tips
            </h3>
            <p className="text-gray-600 text-sm">
              Learn how to optimize your applications for better performance and
              user experience.
            </p>
            <div className="mt-3 text-xs text-gray-500">8 min read</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;
