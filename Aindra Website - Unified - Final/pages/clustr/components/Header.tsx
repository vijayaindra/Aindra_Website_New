import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white">
      <div className="flex items-center space-x-2">
        <a href="#/" className="text-2xl font-bold tracking-tight text-[#00AEEF]">AINDRA</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <a href="#/contact" className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-shadow shadow-md">
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;
