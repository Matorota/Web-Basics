import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import { SAMPLE_BLOG_POSTS } from "./constants";
import { useState, useMemo } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    return SAMPLE_BLOG_POSTS.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  // Reset to first page when search changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  return (
    <div className="blog-container min-h-screen bg-gray-50">
      <div id="main-header">
        <Header />
      </div>

      <main
        id="main-content"
        className="blog-layout max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="blog-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="main-content lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Latest Posts
              </h1>
              <p className="text-gray-600">
                Discover our latest articles and insights
              </p>
            </div>

            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />

            <div className="space-y-8">
              {currentPosts.length > 0 ? (
                currentPosts.map((post) => (
                  <article key={post.id} className="blog-post">
                    <BlogPost
                      title={post.title}
                      excerpt={post.excerpt}
                      author={post.author}
                      date={post.date}
                      readTime={post.readTime}
                      tags={post.tags}
                    />
                  </article>
                ))
              ) : (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400 mb-4"
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
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No posts found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search terms
                  </p>
                </div>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          <div className="sidebar lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
