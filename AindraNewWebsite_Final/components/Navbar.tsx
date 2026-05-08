
import React, { useState } from 'react';
import { NavMenu } from './NavMenu';
import { sectionContainerWide, sectionShell } from './layout';
import aindraLogo from '../assets/Aindra_team/Aindra logo.png';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-100/80 ${sectionShell}`}>
        <div className={`${sectionContainerWide} flex items-center justify-between py-0.5 sm:py-1`}>
          <div className="flex items-center space-x-2">
            <a href="#/" className="inline-flex items-center">
              <img src={aindraLogo} alt="Aindra" className="h-20 sm:h-24 w-auto object-contain" />
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8e0ea] text-[#23324c] hover:bg-[#f1f5f9] transition-colors"
              aria-label="Open menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <a href="#/contact" className="inline-flex h-8 items-center justify-center rounded-full bg-[#12a8ea] px-4 sm:px-5 text-sm font-semibold text-white hover:bg-[#0f9ddd] transition-all duration-300">
              Request Demo
            </a>
          </div>
        </div>
      </nav>

      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
