import React from "react";

interface PrivacyProps {
  onNavigate?: (page: string) => void;
  onTagClick?: (tag: string) => void;
}

const Privacy: React.FC<PrivacyProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your information.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We collect information you provide directly to us, such as when you
            create an account, subscribe to our newsletter, or contact us for
            support.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Name and email address</li>
            <li>Comments and feedback</li>
            <li>Usage data and preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the information we collect to provide, maintain, and improve
            our services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>To provide and maintain our blog service</li>
            <li>To send you updates and newsletters (with your consent)</li>
            <li>To respond to your comments and questions</li>
            <li>To improve our content and user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Data Protection
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@myblog.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
