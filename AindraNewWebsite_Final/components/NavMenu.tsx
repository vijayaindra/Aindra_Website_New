
import React, { useEffect } from 'react';
import intellistainImage from '../assets/ProductImages/IS-15.png';
import visionXImage from '../assets/ProductImages/VisionX2 (1).png';
import astraImage from '../assets/ProductImages/AstraThumbnail.png';
import clustrImage from '../assets/ProductImages/ClustrHomePage.png';
import { sectionContainerWide, sectionShell } from './layout';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About us', href: '#/about' },
    { label: 'Credibility', href: '#/about#credibility' },
    { label: 'Careers', href: '#/careers' },
  ];

  const products = [
    {
      name: 'Intellistain',
      href: '#/intellistain',
      image: intellistainImage,
      imageClass: 'object-contain object-center',
    },
    {
      name: 'VisionX',
      href: '#/visionx',
      image: visionXImage,
      imageClass: 'object-contain object-center',
    },
    {
      name: 'Astra',
      href: '#/astra',
      image: astraImage,
      imageClass: 'object-contain object-center',
    },
    {
      name: 'Clustr',
      href: '#/clustr',
      image: clustrImage,
      imageClass: 'object-contain object-center',
    },
  ];

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-slate-900/30 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Top-down Sliding Menu Panel */}
      <div 
        className={`fixed top-0 left-0 w-full z-[100] bg-[#ecf1f4] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-b border-cyan-500
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          min-h-[55dvh] max-h-[85dvh] md:max-h-[70dvh] flex flex-col overflow-y-auto`}
      >
        <div className={`${sectionShell} flex-1 w-full h-full relative`}>
          <div className={`${sectionContainerWide} flex flex-col md:flex-row w-full h-full relative`}>
          
          {/* Close Button - Top Right */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-0 md:top-6 z-[110] w-8 h-8 md:w-9 md:h-9 bg-white rounded-full shadow-sm flex items-center justify-center text-[#00a3ff] hover:scale-110 transition-transform active:scale-95 border border-slate-100"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Column: Primary Navigation Links */}
          <div className="w-full md:w-[30%] lg:w-[25%] flex flex-col justify-center px-4 sm:px-5 md:px-6 lg:px-8 py-8 md:py-8 border-b md:border-b-0 md:border-r border-slate-300">
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  onClick={onClose}
                  className="block text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-600 hover:text-slate-900 transition-colors tracking-tight"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Products Section */}
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-5 md:px-7 lg:px-10 py-6 md:py-8">
            <div className="w-full max-w-4xl">
              <h2 className="text-lg md:text-xl font-bold text-[#00a3ff] mb-6 md:mb-8">
                Our Products
              </h2>

              <div className="space-y-0">
                {products.map((product, idx) => (
                  <a
                    key={idx}
                    href={product.href}
                    onClick={onClose}
                  className={`group flex items-center py-3 md:py-4 border-t ${idx === products.length - 1 ? 'border-b' : ''} border-slate-400/30 transition-all cursor-pointer hover:bg-slate-200/20`}
                >
                    {/* Product Thumbnail */}
                    <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 mr-4 md:mr-8 rounded-sm overflow-hidden shadow-sm">
                      <img
                        src={product.image}
                        alt={`${product.name} thumbnail`}
                        className={`w-full h-full ${product.imageClass} transition-all duration-500 ease-out group-hover:scale-105`}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Product Name */}
                    <span className="text-sm sm:text-base md:text-lg font-bold text-slate-900 flex-1 tracking-tight">
                      {product.name}
                    </span>

                    {/* Circle Arrow Icon */}
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-all bg-[#b0b0b0] text-white group-hover:bg-[#00a3ff]">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Thick Blue Border Bottom */}
        <div className="h-[2px] w-full bg-[#00a3ff] flex-shrink-0"></div>
      </div>
    </>
  );
};
