
import React, { useState } from 'react';
import { NavMenu } from './NavMenu';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-8 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <a href="#/" className="text-2xl font-extrabold tracking-tighter text-[#11b6e8]">
            AiNDRA
          </a>
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center p-2 rounded-full border border-[#d8e0ea] text-[#23324c] hover:bg-[#f1f5f9] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          <a href="#/contact" className="px-6 py-2 rounded-full bg-[#12a8ea] text-white font-semibold hover:bg-[#0f9ddd] transition-all duration-300">
            Request Demo
          </a>
        </div>
      </nav>

      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
