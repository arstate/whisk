
import React, { useState } from 'react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const embeddedUrl = "https://labs.google/fx/tools/whisk/project";

  const handleLoad = () => {
    setIsLoading(false);
  };

  const Logo = () => (
    <svg
      className="w-10 h-10 text-cyan-400"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      <header className="flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 shadow-lg">
        <div className="flex items-center space-x-3">
          <Logo />
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-white">
              Project Whisk
            </h1>
            <p className="text-sm text-gray-400">
              Embedded Google Labs FX Tool
            </p>
          </div>
        </div>
        <a 
          href={embeddedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-colors duration-200"
        >
          Open in New Tab
        </a>
      </header>
      <main className="flex-grow p-4 md:p-6 lg:p-8 relative">
        <div className="relative w-full h-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 z-10">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-600 h-12 w-12 mb-4 animate-spin border-t-cyan-400"></div>
              <p className="text-lg font-semibold text-gray-300">Loading Project Whisk...</p>
              <p className="text-sm text-gray-500">Please wait while we connect to the Google Labs tool.</p>
            </div>
          )}
          <iframe
            src={embeddedUrl}
            title="Project Whisk Embedded Content"
            className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={handleLoad}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals"
          />
        </div>
      </main>
    </div>
  );
};

export default App;
