import React from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-100 bg-[#fff7f2]" 
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2 text-2xl font-light text-gray-900"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-full h-12 object-cover"
          />
        </button>
          <div className="flex space-x-8">
            {[
              { key: 'home', label: 'Home' },
              { key: 'about', label: 'About Me' },
              { key: 'skills', label: 'Skills' },
              { key: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.key 
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;