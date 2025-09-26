import React from "react";
import { SAMPLE_BLOG_POSTS } from "../constants";
import BlogPost from "../components/BlogPost";

interface ArchiveProps {
  onNavigate?: (page: string) => void;
  onPostClick?: (postId: number) => void;
}

const Archive: React.FC<ArchiveProps> = ({ onNavigate, onPostClick }) => {
  const groupedByMonth = SAMPLE_BLOG_POSTS.reduce((groups: any, post) => {
    const month = new Date(post.date).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!groups[month]) {
      groups[month] = [];
    }
    groups[month].push(post);
    return groups;
  }, {});

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Archive
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Browse all our articles organized by date. Find older posts and
          explore our content history.
        </p>
      </div>

      {Object.entries(groupedByMonth).map(([month, posts]: [string, any]) => (
        <div key={month} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            {month}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post: any) => (
              <div
                key={post.id}
                className="cursor-pointer"
                onClick={() => onPostClick?.(post.id)}
              >
                <BlogPost
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author}
                  date={post.date}
                  readTime={post.readTime}
                  tags={post.tags}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Archive;
