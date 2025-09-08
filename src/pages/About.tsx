import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About MyBlog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're passionate about sharing knowledge and helping developers grow
          through high-quality content, tutorials, and insights.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To create a comprehensive resource for developers of all skill
              levels, providing practical tutorials, industry insights, and best
              practices that help you build better applications and advance your
              career.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  Quality over quantity content
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">
                  Practical, real-world examples
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Community-driven learning</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Knowledge Sharing
            </h3>
            <p className="text-gray-600">Empowering developers worldwide</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "John Doe",
              role: "Frontend Developer",
              bio: "Specializes in React, TypeScript, and modern web technologies.",
              avatar: "JD",
            },
            {
              name: "Jane Smith",
              role: "UI/UX Designer",
              bio: "Creates beautiful, user-friendly interfaces and experiences.",
              avatar: "JS",
            },
            {
              name: "Mike Johnson",
              role: "Full Stack Developer",
              bio: "Backend architecture expert with a passion for scalable solutions.",
              avatar: "MJ",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">
                  {member.avatar}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Our Impact</h2>
          <p className="text-blue-100">
            Helping developers worldwide grow their skills
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-blue-100 text-sm">Articles Published</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-blue-100 text-sm">Monthly Readers</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">2K+</div>
            <div className="text-blue-100 text-sm">Community Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">5</div>
            <div className="text-blue-100 text-sm">Years Experience</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            Browse Articles
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
