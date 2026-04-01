
import React, { useState } from 'react';
import { NavMenu } from './NavMenu';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-8 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-tighter text-cyan-500">
            AiNDRA
          </span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center p-2 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
          <button className="px-6 py-2 rounded-full border border-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300">
            Contact us
          </button>
        </div>
      </nav>

      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
