
import React, { useState } from 'react';
import intellistainImage from '../../../assets/ProductImages/Intellistain1.png';

interface ProductCardProps {
  name: string;
  active?: boolean;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center transition-all duration-500 ease-in-out h-14 sm:h-16 md:h-[84px] overflow-hidden rounded-none ${
      active 
        ? 'bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] w-[132px] sm:w-[160px] md:w-[180px] px-3 sm:px-4' 
        : 'bg-[#f0f2f4] w-[96px] sm:w-[108px] md:w-[120px] px-2 sm:px-3 hover:bg-[#ebedef]'
    }`}
  >
    <div className="flex items-center justify-between w-full">
      <span className={`text-xs sm:text-sm md:text-[15px] font-bold tracking-tight transition-colors duration-300 ${active ? 'text-black' : 'text-gray-900'}`}>
        {name}
      </span>
      <div className={`transition-all duration-500 flex items-center justify-center overflow-hidden rounded-md ${active ? 'w-16 h-16' : 'w-10 h-10 opacity-60'}`}>
        <img 
          src={intellistainImage}
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  </button>
);

interface HeroProps {
  onTabChange?: (tab: string) => void;
  activeTab?: string;
}

const Hero: React.FC<HeroProps> = ({ onTabChange, activeTab = 'OVERVIEW' }) => {
  const [activeVariant, setActiveVariant] = useState('IS15');

  const variants = [
    { id: 'IS15', label: 'IS15' },
    { id: 'IS30', label: 'IS30' }
  ];

  const tabs = ['OVERVIEW', 'STAINING QUALITY', 'SPECIFICATIONS', 'RESOURCES'];

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[70vh] md:min-h-[85vh] flex flex-col">
      {/* Product Selector at top */}
      <div className="flex justify-center items-center pt-8 pb-12">
        <div className="flex items-center space-x-4 bg-[#f0f2f4]/30 p-1">
          {variants.map((variant) => (
            <ProductCard 
              key={variant.id}
              name={variant.label} 
              active={activeVariant === variant.id}
              onClick={() => setActiveVariant(variant.id)}
            />
          ))}
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-12 lg:px-16 pt-4 pb-16 md:pb-20 relative">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10 pr-0 md:pr-14 lg:pr-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8 leading-tight">
            Intellistain {activeVariant === 'IS15' ? '15 slide' : '30 slide'}
          </h1>
          <div className="w-24 h-[1px] bg-gray-200 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-[540px]">
            Intellistain automates and standardizes slide staining to reduce variability, 
            eliminate manual errors, and cut down on repeat tests freeing your lab 
            to focus on what matters: delivering fast, confident diagnostic results.
          </p>
        </div>

        {/* Right Content - Machine Image & Graphics */}
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[380px] md:h-[500px] flex items-center justify-center mt-6 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full border border-gray-100 relative opacity-40">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-100"></div>
            </div>
          </div>
          
          <div className="relative z-10 w-[260px] sm:w-[340px] md:w-[450px] drop-shadow-2xl transition-all duration-700 ease-in-out transform">
            <img
              key={activeVariant}
              src={intellistainImage}
              alt={`Intellistain ${activeVariant} Device`}
              className="w-full h-auto object-contain animate-in fade-in duration-700"
            />
          </div>
          
        </div>
      </div>

      {/* Bottom Tabs Bar */}
      <div className="w-full border-t border-gray-100 bg-white absolute bottom-0">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 flex gap-4 sm:gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => onTabChange?.(tab)}
              className={`shrink-0 py-4 text-[10px] sm:text-[11px] font-bold tracking-widest transition-all relative ${activeTab === tab ? 'text-[#00AEEF]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00AEEF]"></div>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
