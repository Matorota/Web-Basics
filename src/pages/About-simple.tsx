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
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About MyBlog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We're passionate about sharing knowledge and helping developers grow
          through high-quality content, tutorials, and insights.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To create a comprehensive resource for developers of all skill levels,
          providing practical tutorials, industry insights, and best practices
          that help you build better applications and advance your career.
        </p>
      </div>

      {/* What We Cover */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Cover</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <span className="mr-2">⚛️</span>
              Frontend Development
            </h3>
            <p className="text-gray-600 text-sm">
              React, TypeScript, CSS, and modern frontend frameworks
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <span className="mr-2">🚀</span>
              Performance
            </h3>
            <p className="text-gray-600 text-sm">
              Optimization techniques and best practices for faster apps
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <span className="mr-2">🎨</span>
              Design & UX
            </h3>
            <p className="text-gray-600 text-sm">
              User interface design and user experience principles
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <span className="mr-2">🛠️</span>
              Tools & Workflows
            </h3>
            <p className="text-gray-600 text-sm">
              Development tools, workflows, and productivity tips
            </p>
          </div>
        </div>
      </div>

      {/* Simple Team Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              JS
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">John Smith</h3>
              <p className="text-gray-600 text-sm">
                Frontend Developer & Content Creator
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              AD
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Alex Davis</h3>
              <p className="text-gray-600 text-sm">
                Full-Stack Developer & Technical Writer
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
              SW
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Sarah Wilson</h3>
              <p className="text-gray-600 text-sm">
                UI/UX Designer & Frontend Specialist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <button
          onClick={() => handleNavClick("contact")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
