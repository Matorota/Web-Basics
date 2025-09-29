import React from "react";
import { SAMPLE_BLOG_POSTS } from "../constants";
import BlogPost from "../components/BlogPost";

interface ArchiveProps {
  onNavigate: (page: string) => void;
  onPostClick: (postId: number) => void;
}

const Archive: React.FC<ArchiveProps> = ({ onPostClick }) => {
  const groupedPosts = SAMPLE_BLOG_POSTS.reduce((groups, post) => {
    const month = new Date(post.date).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    if (!groups[month]) {
      groups[month] = [];
    }
    groups[month].push(post);
    return groups;
  }, {} as { [key: string]: typeof SAMPLE_BLOG_POSTS });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Archive</h1>
        <p className="text-gray-600">Browse all posts by date</p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedPosts).map(([month, posts]) => (
          <div key={month} className="border-b border-gray-200 pb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {month}
            </h2>
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="blog-post cursor-pointer"
                  onClick={() => onPostClick(post.id)}
                >
                  <BlogPost
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                    readTime={post.readTime}
                    tags={post.tags}
                  />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
