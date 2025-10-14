import React, { useState, useMemo, useEffect, useCallback } from "react";
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
import "./styles/blog-styles.css";
import "./styles/responsive-clean.css";
import "./styles/simple-theme-clean.css";

const POSTS_PER_PAGE = 3;

const useThemeTransition = (initialTheme = "white") => {
  const [theme, setTheme] = useState(initialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchTheme = useCallback(
    (newTheme: string, event?: React.MouseEvent) => {
      if (theme === newTheme || isTransitioning) return;

      setIsTransitioning(true);
      if (event) {
        const ripple = document.createElement("div");
        ripple.className = "theme-switch-ripple";
        document.body.appendChild(ripple);

        setTimeout(() => {
          document.body.removeChild(ripple);
        }, 1000);
      }

      document.body.classList.add("theme-transitioning");

      setTimeout(() => {
        setTheme(newTheme);
        document.body.className = `theme-${newTheme}`;
      }, 100);

      setTimeout(() => {
        document.body.classList.remove("theme-transitioning");
        setIsTransitioning(false);
      }, 800);
    },
    [theme, isTransitioning]
  );

  return { theme, switchTheme, isTransitioning };
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const { theme, switchTheme } = useThemeTransition("white");

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

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPageNum - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
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

  const handleThemeChange = useCallback(
    (newTheme: string, event?: React.MouseEvent) => {
      switchTheme(newTheme, event);
    },
    [switchTheme]
  );

  useEffect(() => {
    const handleCategoryFilter = (event: any) => {
      setSelectedCategory(event.detail);
      setCurrentPageNum(1);
    };

    window.addEventListener("filterByCategory", handleCategoryFilter);

    return () => {
      window.removeEventListener("filterByCategory", handleCategoryFilter);
    };
  }, []);

  const themeClasses = {
    black: "theme-black",
    white: "theme-white",
  };

  const renderMainContent = () => {
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
          return post ? <BlogPostDetail post={post} /> : null;
        }
        return null;
      default:
        return (
          <div>
            <div className="w-full mb-6">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            </div>

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
                      imageUrl={post.imageUrl}
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

            {currentPage === "home" && (
              <Pagination
                currentPage={currentPageNum}
                totalPages={totalPages}
                onPageChange={setCurrentPageNum}
              />
            )}
          </div>
        );
    }
  };

  const renderSidebar = () => {
    const sidebarProps = {
      theme,
      onThemeChange: handleThemeChange,
      onTagClick: handleTagClick,
      currentPage,
      onNavigate: handleNavigation,
    };

    return <Sidebar {...sidebarProps} />;
  };

  return (
    <div
      className={`blog-container min-h-screen bg-gray-50 ${
        themeClasses[theme as keyof typeof themeClasses]
      }`}
    >
      <div id="main-header" className="sticky top-0 z-50 bg-inherit">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
      </div>

      <main
        id="main-content"
        className="blog-layout max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="blog-grid grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-6 lg:gap-8">
          <div className="main-content md:col-span-8 lg:col-span-8 xl:col-span-9">
            {renderMainContent()}
          </div>

          <div className="sidebar md:col-span-4 lg:col-span-4 xl:col-span-3 sticky top-24 h-fit z-10">
            {renderSidebar()}
          </div>
        </div>
      </main>

      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
