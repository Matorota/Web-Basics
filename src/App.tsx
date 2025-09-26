import React from "react";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import FilterBar from "./components/FilterBar";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import BlogPostDetail from "./pages/BlogPostDetail";
import Archive from "./pages/Archive";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { SAMPLE_BLOG_POSTS } from "./constants";
import { useState, useMemo, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [theme, setTheme] = useState("white");
  const postsPerPage = 3;

  const categories = [
    "all",
    ...new Set(SAMPLE_BLOG_POSTS.flatMap((post) => post.tags)),
  ];

  const filteredPosts = useMemo(() => {
    return SAMPLE_BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || post.tags.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPageNum - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPageNum(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPageNum(1);
  };

  const handleTagClick = (tag: string) => {
    setSelectedCategory(tag);
    setCurrentPageNum(1);
    setCurrentPage("home");
  };

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
    setCurrentPage("blog-detail");
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSelectedPostId(null);
  };

  React.useEffect(() => {
    const handleCategoryFilter = (event: any) => {
      setSelectedCategory(event.detail);
      setCurrentPageNum(1);
    };

    window.addEventListener("filterByCategory", handleCategoryFilter);

    return () => {
      window.removeEventListener("filterByCategory", handleCategoryFilter);
    };
  }, []);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const themeClasses = {
    black: "theme-black",
    white: "theme-white",
  };

  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return <About onNavigate={handleNavigation} />;
      case "categories":
        return <Categories onNavigate={handleNavigation} />;
      case "contact":
        return <Contact />;
      case "archive":
        return (
          <Archive
            onNavigate={handleNavigation}
            onPostClick={handlePostClick}
          />
        );
      case "privacy":
        return <Privacy />;
      case "terms":
        return <Terms />;
      case "blog-detail":
        if (selectedPostId) {
          const post = SAMPLE_BLOG_POSTS.find((p) => p.id === selectedPostId);
          return post ? (
            <BlogPostDetail
              post={post}
              onBack={() => handleNavigation("home")}
            />
          ) : null;
        }
        return null;
      default:
        return (
          <main
            id="main-content"
            className="blog-layout max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            <div className="blog-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                <FilterBar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                />

                <div className="space-y-8">
                  {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                      <article
                        key={post.id}
                        className="blog-post cursor-pointer"
                        onClick={() => handlePostClick(post.id)}
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
                        Try adjusting your search terms or filters
                      </p>
                    </div>
                  )}
                </div>

                <Pagination
                  currentPage={currentPageNum}
                  totalPages={totalPages}
                  onPageChange={setCurrentPageNum}
                />
              </div>

              <div className="sidebar lg:col-span-1">
                <Sidebar
                  theme={theme}
                  onThemeChange={setTheme}
                  onTagClick={handleTagClick}
                />
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div
      className={`blog-container min-h-screen bg-gray-50 ${
        themeClasses[theme as keyof typeof themeClasses]
      }`}
    >
      <div id="main-header">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
      </div>

      {renderContent()}

      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
