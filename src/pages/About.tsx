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
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About MyBlog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're passionate about sharing knowledge and helping developers grow
          through high-quality content, tutorials, and insights.
        </p>
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
