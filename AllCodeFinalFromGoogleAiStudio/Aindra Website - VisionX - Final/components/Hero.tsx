import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  active?: boolean;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center transition-all duration-500 ease-in-out h-[84px] overflow-hidden rounded-none ${
      active 
        ? 'bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] w-[180px] px-4' 
        : 'bg-[#f0f2f4] w-[120px] px-3 hover:bg-[#ebedef]'
    }`}
  >
    <div className="flex items-center justify-between w-full">
      <span className={`text-[15px] font-bold tracking-tight transition-colors duration-300 ${active ? 'text-black' : 'text-gray-900'}`}>
        {name}
      </span>
      <div className={`transition-all duration-500 flex items-center justify-center ${active ? 'w-16 h-16' : 'w-10 h-10 opacity-60'}`}>
        <img 
          src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=100" 
          alt={name} 
          className="w-full h-full object-contain mix-blend-multiply" 
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
  const [activeVariant, setActiveVariant] = useState('VX1');

  const variants = [
    { id: 'VX1', label: 'VX1' },
    { id: 'VX6', label: 'VX6' },
    { id: 'VX mini', label: 'VX mini' },
    { id: 'VXF', label: 'VXF' }
  ];

  const tabs = ['OVERVIEW', 'IMAGE QUALITY', 'SPECIFICATIONS', 'RESOURCES'];

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[85vh] flex flex-col">
      {/* Product Selector at top - Exact match of provided reference visuals */}
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

      <div className="flex-grow flex flex-col md:flex-row items-center px-6 md:px-16 pt-4 pb-20 relative">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10 pr-4 md:pr-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            VisionX {activeVariant === 'VX1' ? '1 slide' : activeVariant}
          </h1>
          <div className="w-24 h-[1px] bg-gray-200 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-[540px]">
            VisionX automates and standardizes slide staining to reduce variability, 
            eliminate manual errors, and cut down on repeat tests freeing your lab 
            to focus on what matters: delivering fast, confident diagnostic results.
          </p>
        </div>

        {/* Right Content - Machine Image & Graphics */}
        <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
          {/* Decorative circular graphic */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full border border-gray-100 relative opacity-40">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-100"></div>
            </div>
          </div>
          
          {/* Machine Image */}
          <div className="relative z-10 w-[450px] drop-shadow-2xl transition-all duration-700 ease-in-out transform">
            <div className="bg-white rounded-[40px] p-2 shadow-2xl overflow-hidden border border-gray-100">
               <img 
                key={activeVariant}
                src="https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=800" 
                alt={`VisionX ${activeVariant} Device`} 
                className="w-full h-auto rounded-[32px] object-cover animate-in fade-in duration-700"
              />
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Sparkling icon at bottom right of image area */}
          <div className="absolute bottom-10 right-10 text-gray-300">
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2.4 9.6h9.6l-7.2 5.4 2.4 9-7.2-5.4-7.2 5.4 2.4-9-7.2-5.4h9.6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Tabs Bar */}
      <div className="w-full border-t border-gray-100 bg-white absolute bottom-0">
        <div className="px-6 md:px-16 flex space-x-12">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => onTabChange?.(tab)}
              className={`py-4 text-[11px] font-bold tracking-widest transition-all relative ${activeTab === tab ? 'text-[#00AEEF]' : 'text-gray-400 hover:text-gray-600'}`}
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