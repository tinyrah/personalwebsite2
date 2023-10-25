// components/ResumeSection.tsx

import React from 'react';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="mt-16">  {/* id attribute added */}
      <h2 className="text-2xl font-semibold mb-4">Resume</h2>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Click here to view my resume
      </a>
    </section>
  );
}

export default ResumeSection;
