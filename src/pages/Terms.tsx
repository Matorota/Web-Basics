import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Please read these terms carefully before using our blog service.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using this blog, you accept and agree to be bound
            by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Permission is granted to temporarily access the materials on MyBlog
            for personal, non-commercial transitory viewing only. This is the
            grant of a license, not a transfer of title, and under this license
            you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            User Comments
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Users are responsible for their comments and must not post content
            that is offensive, illegal, or violates others' rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
          <p className="text-gray-600 leading-relaxed">
            In no event shall MyBlog or its suppliers be liable for any damages
            arising out of the use or inability to use the materials on this
            website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms of Service, contact us at
            legal@myblog.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
