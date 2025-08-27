import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          How It Works
        </h1>
        <p className="text-2xl text-gray-600 leading-relaxed  mt-10">
          Our simple process ensures accurate and reliable fact-checking, helping you
          identify and stop misinformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-15">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="#4F46E5" 
                className="w-12 h-12"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Content
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Securely submit SMS for analysis. Our system processes your
              submission quickly and efficiently.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="#4F46E5" 
                className="w-12 h-12"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Analyze Results
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Our advanced AI algorithms cross-reference information and identify patterns associated
              with fake SMS, providing a comprehensive report.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="#4F46E5" 
                className="w-12 h-12"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Stay Informed
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Receive clear, unbiased verification results, empowering you to make informed decisions
              and combat the spread of misinformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;