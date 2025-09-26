import React from "react";

const RSSFeed: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          RSS Feed
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Stay updated with our latest posts by subscribing to our RSS feed.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">RSS</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Subscribe to Our RSS Feed
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Copy the RSS feed URL below and add it to your favorite RSS reader
            to get notified whenever we publish new articles.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <code className="text-sm text-gray-800">
              https://myblog.com/feed.xml
            </code>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Copy URL
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Popular RSS Readers
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded mr-3"></div>
                <span className="font-medium">Feedly</span>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded mr-3"></div>
                <span className="font-medium">Inoreader</span>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-red-500 rounded mr-3"></div>
                <span className="font-medium">NewsBlur</span>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded mr-3"></div>
                <span className="font-medium">The Old Reader</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What You'll Get
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Instant notifications of new blog posts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Full article content in your RSS reader
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                No email clutter - read at your own pace
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Works offline with most RSS readers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSSFeed;
