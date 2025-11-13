import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
}

const BlogSummaryButton: React.FC<{ post: BlogPostProps }> = ({ post }) => {
  const [showSummary, setShowSummary] = useState(false);
  const { setIsPreviewOpen } = useAppContext();

  const generateDetailedSummary = (post: BlogPostProps) => {
    const keyPoints = [];

    if (post.tags.includes("React")) {
      keyPoints.push(
        "• Learn modern React patterns including hooks, context, and component composition"
      );
      keyPoints.push(
        "• Understand React's virtual DOM and state management best practices"
      );
      keyPoints.push(
        "• Implement performance optimizations with useMemo and useCallback"
      );
    }

    if (post.tags.includes("TypeScript")) {
      keyPoints.push(
        "• Master TypeScript fundamentals: interfaces, types, and generics"
      );
      keyPoints.push(
        "• Learn advanced TypeScript features for better code quality"
      );
      keyPoints.push(
        "• Integrate TypeScript with React for type-safe development"
      );
    }

    if (post.tags.includes("CSS")) {
      keyPoints.push(
        "• Explore modern CSS techniques: Grid, Flexbox, and CSS-in-JS"
      );
      keyPoints.push(
        "• Create responsive designs with media queries and viewport units"
      );
      keyPoints.push(
        "• Master CSS animations and transitions for engaging user interfaces"
      );
    }

    if (post.tags.includes("JavaScript")) {
      keyPoints.push(
        "• Deep dive into ES6+ features: arrow functions, destructuring, async/await"
      );
      keyPoints.push(
        "• Understand JavaScript's event loop and asynchronous programming"
      );
      keyPoints.push(
        "• Learn functional programming concepts and array methods"
      );
    }

    if (post.tags.includes("Frontend")) {
      keyPoints.push("• Build responsive and accessible user interfaces");
      keyPoints.push("• Optimize frontend performance and user experience");
      keyPoints.push("• Integrate with APIs and handle data fetching patterns");
    }

    if (post.tags.includes("Performance")) {
      keyPoints.push("• Implement code splitting and lazy loading strategies");
      keyPoints.push("• Optimize bundle size and loading times");
      keyPoints.push("• Monitor and improve Core Web Vitals metrics");
    }

    if (keyPoints.length === 0) {
      keyPoints.push("• Comprehensive tutorial with practical examples");
      keyPoints.push("• Step-by-step implementation guide");
      keyPoints.push("• Best practices and common pitfalls to avoid");
    }

    return keyPoints;
  };

  const detailedSummary = generateDetailedSummary(post);

  const handleOpenPreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSummary(true);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSummary(false);
    setIsPreviewOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenPreview}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 hover:scale-105 shadow-lg"
      >
        Preview
      </button>

      {showSummary && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-gray-900/85 via-slate-800/90 to-gray-900/85 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={handleClosePreview}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-hidden border border-gray-300 ring-1 ring-gray-200/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
              <div className="relative flex items-center justify-between">
                <h2 className="text-xl font-semibold pr-4 leading-tight">
                  {post.title}
                </h2>
                <button
                  onClick={handleClosePreview}
                  className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-black/20 rounded-lg"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)] bg-gradient-to-b from-gray-50/50 to-white">
              <div className="mb-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium">By {post.author}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-400 mr-2"
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

              <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Article Overview
                </h3>
                <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="mb-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What You'll Learn
                </h3>
                <div className="space-y-2">
                  {detailedSummary.map((point, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed text-sm"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Topics Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Ready to dive deeper? Close this preview to access the full
                  article content.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  tags,
  imageUrl,
}) => {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="p-8">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
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

        {imageUrl && (
          <div className="my-6 rounded-lg overflow-hidden relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3 z-20">
              <BlogSummaryButton
                post={{
                  title,
                  excerpt,
                  author,
                  date,
                  readTime,
                  tags,
                  imageUrl,
                }}
              />
            </div>
          </div>
        )}

        {!imageUrl && (
          <div className="mb-4 relative">
            <div className="absolute top-0 right-0">
              <BlogSummaryButton
                post={{
                  title,
                  excerpt,
                  author,
                  date,
                  readTime,
                  tags,
                  imageUrl,
                }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 flex items-center gap-1">
            Read More
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
      </div>
    </article>
  );
};

export default BlogPost;
