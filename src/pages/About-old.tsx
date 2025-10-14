import React from "react";

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section with Background Image */}
      <div
        className="relative mb-16 rounded-2xl overflow-hidden"
        style={{ height: "400px" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%), 
                             url('data:image/svg+xml,${encodeURIComponent(`
                               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                                 <g fill-opacity="0.1" fill="#ffffff">
                                   <circle cx="30" cy="30" r="2"/>
                                   <circle cx="10" cy="20" r="1"/>
                                   <circle cx="50" cy="10" r="1.5"/>
                                   <circle cx="20" cy="50" r="1"/>
                                   <circle cx="45" cy="45" r="1"/>
                                 </g>
                               </svg>
                             `)}')`,
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About MyBlog
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We're passionate about sharing knowledge and helping developers
              grow through high-quality content, tutorials, and insights.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"
          style={{ zIndex: 5 }}
        />
        <div
          className="absolute bottom-16 right-16 w-12 h-12 bg-yellow-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s", zIndex: 5 }}
        />
        <div
          className="absolute top-1/2 right-8 w-8 h-8 bg-green-400/20 rounded-full animate-ping"
          style={{ animationDelay: "2s", zIndex: 5 }}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
          To create a comprehensive resource for developers of all skill levels,
          providing practical tutorials, industry insights, and best practices
          that help you build better applications and advance your career.
        </p>
      </div>

      {/* Team Section with Image Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="relative group">
            <div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ zIndex: 10 }}
            >
              {/* Profile Image Placeholder with Gradient */}
              <div className="relative mb-4">
                <div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ zIndex: 15 }}
                >
                  JS
                </div>
                {/* Decorative Ring */}
                <div
                  className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-blue-200 animate-pulse"
                  style={{ zIndex: 12 }}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                John Smith
              </h3>
              <p className="text-gray-600 text-center mb-3">Lead Developer</p>
              <p className="text-sm text-gray-500 text-center">
                Full-stack developer with 8+ years of experience in React,
                Node.js, and cloud technologies.
              </p>

              {/* Skills Icons */}
              <div className="flex justify-center gap-2 mt-4">
                <div
                  className="w-6 h-6 bg-blue-100 rounded text-blue-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  R
                </div>
                <div
                  className="w-6 h-6 bg-green-100 rounded text-green-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  N
                </div>
                <div
                  className="w-6 h-6 bg-purple-100 rounded text-purple-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  TS
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative group">
            <div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ zIndex: 10 }}
            >
              <div className="relative mb-4">
                <div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ zIndex: 15 }}
                >
                  SD
                </div>
                <div
                  className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-green-200 animate-pulse"
                  style={{ animationDelay: "0.5s", zIndex: 12 }}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Sarah Davis
              </h3>
              <p className="text-gray-600 text-center mb-3">UI/UX Designer</p>
              <p className="text-sm text-gray-500 text-center">
                Creative designer passionate about user-centered design and
                modern web interfaces.
              </p>

              <div className="flex justify-center gap-2 mt-4">
                <div
                  className="w-6 h-6 bg-pink-100 rounded text-pink-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  PS
                </div>
                <div
                  className="w-6 h-6 bg-orange-100 rounded text-orange-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  F
                </div>
                <div
                  className="w-6 h-6 bg-red-100 rounded text-red-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  XD
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative group md:col-span-2 lg:col-span-1">
            <div
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ zIndex: 10 }}
            >
              <div className="relative mb-4">
                <div
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ zIndex: 15 }}
                >
                  MJ
                </div>
                <div
                  className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-4 border-purple-200 animate-pulse"
                  style={{ animationDelay: "1s", zIndex: 12 }}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Mike Johnson
              </h3>
              <p className="text-gray-600 text-center mb-3">
                Content Strategist
              </p>
              <p className="text-sm text-gray-500 text-center">
                Technical writer and content strategist with expertise in
                developer education and documentation.
              </p>

              <div className="flex justify-center gap-2 mt-4">
                <div
                  className="w-6 h-6 bg-blue-100 rounded text-blue-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  MD
                </div>
                <div
                  className="w-6 h-6 bg-gray-100 rounded text-gray-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  DOC
                </div>
                <div
                  className="w-6 h-6 bg-yellow-100 rounded text-yellow-600 flex items-center justify-center text-xs font-bold"
                  style={{ zIndex: 20 }}
                >
                  JS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decoration Elements */}
        <div
          className="absolute top-4 right-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute bottom-8 left-8 w-16 h-16 bg-purple-200/30 rounded-full blur-lg"
          style={{ zIndex: 1 }}
        />
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Join Our Journey
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're a beginner or an experienced developer, there's always
          something new to learn. Follow our blog and be part of our growing
          community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleNavClick("home")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Browse Articles
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
