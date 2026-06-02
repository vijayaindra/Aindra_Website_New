
import React, { useEffect, useRef, useState } from 'react';
import intellistain15Image from '../../../assets/ProductImages/IS-15.png';
import intellistain30Image from '../../../assets/ProductImages/IS-30.png';
import { sectionContainerWide, sectionShell } from '../../../components/layout';

export const INTELLISTAIN_VARIANT_EVENT = 'intellistain:variant-change';
export type IntellistainVariant = 'IS15' | 'IS30';

interface ProductCardProps {
  name: string;
  imageSrc: string;
  active?: boolean;
  compact?: boolean;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageSrc, active = false, compact = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center transition-all duration-500 ease-in-out overflow-hidden rounded-none ${
      compact
        ? active
          ? 'h-11 sm:h-12 w-[112px] sm:w-[124px] px-2.5 sm:px-3'
          : 'h-11 sm:h-12 w-[90px] sm:w-[98px] px-2'
        : 'h-14 sm:h-16 md:h-[84px]'
    } ${
      active 
        ? `bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)] ${compact ? '' : 'w-[132px] sm:w-[160px] md:w-[180px] px-3 sm:px-4'}` 
        : `bg-[#f0f2f4] hover:bg-[#ebedef] ${compact ? '' : 'w-[96px] sm:w-[108px] md:w-[120px] px-2 sm:px-3'}`
    }`}
  >
    <div className="flex items-center justify-between w-full">
      <span className={`font-bold tracking-tight transition-colors duration-300 ${compact ? 'text-[12px] sm:text-[13px]' : 'text-xs sm:text-sm md:text-[15px]'} ${active ? 'text-black' : 'text-gray-900'}`}>
        {name}
      </span>
      <div className={`transition-all duration-500 flex items-center justify-center overflow-hidden rounded-md ${
        compact ? (active ? 'w-11 h-11' : 'w-8 h-8 opacity-60') : (active ? 'w-16 h-16' : 'w-10 h-10 opacity-60')
      }`}>
        <img 
          src={imageSrc}
          alt={name} 
          className="w-full h-full object-contain" 
        />
      </div>
    </div>
  </button>
);

interface HeroProps {
  onTabChange?: (tab: string) => void;
  activeTab?: string;
  activeVariant?: IntellistainVariant;
  onVariantChange?: (variant: IntellistainVariant) => void;
}

const Hero: React.FC<HeroProps> = ({
  activeVariant,
  onVariantChange,
}) => {
  const [internalActiveVariant, setInternalActiveVariant] = useState<IntellistainVariant>('IS15');
  const [showStickySelector, setShowStickySelector] = useState(false);
  const heroBodyRef = useRef<HTMLDivElement | null>(null);
  const selectedVariant = activeVariant ?? internalActiveVariant;

  const variants = [
    { id: 'IS15' as IntellistainVariant, label: 'IS15', image: intellistain15Image },
    { id: 'IS30' as IntellistainVariant, label: 'IS30', image: intellistain30Image }
  ];
  const activeVariantData = variants.find((variant) => variant.id === selectedVariant) ?? variants[0];

  const handleVariantSelect = (variant: IntellistainVariant) => {
    if (activeVariant === undefined) {
      setInternalActiveVariant(variant);
    }
    onVariantChange?.(variant);
  };

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(INTELLISTAIN_VARIANT_EVENT, { detail: selectedVariant }));
  }, [selectedVariant]);

  useEffect(() => {
    const handleScroll = () => {
      const heroBody = heroBodyRef.current;
      if (!heroBody) return;

      const rect = heroBody.getBoundingClientRect();
      const navbarOffset = window.innerWidth >= 640 ? 96 : 80;
      setShowStickySelector(rect.bottom <= navbarOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="product-hero-section">
      {/* Product Selector at top */}
      <div className={`${sectionShell} product-hero-selector`}>
        <div className={`${sectionContainerWide} flex justify-center items-center`}>
        <div className="flex items-center space-x-4 bg-[#f0f2f4]/30 p-1">
          {variants.map((variant) => (
            <ProductCard 
              key={variant.id}
              name={variant.label} 
              imageSrc={variant.image}
              active={selectedVariant === variant.id}
              onClick={() => handleVariantSelect(variant.id)}
            />
          ))}
        </div>
        </div>
      </div>

      <div
        className={`fixed top-[76px] sm:top-[92px] left-0 right-0 z-40 pointer-events-none transition-all duration-300 ease-out ${
          showStickySelector ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
          <div className={`mx-auto w-fit max-w-[calc(100vw-1rem)] bg-white/90 backdrop-blur-sm border border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-2 py-1 overflow-x-auto transition-all duration-300 ease-out ${
            showStickySelector ? 'pointer-events-auto' : 'pointer-events-none'
          }`}>
            <div className="flex items-center space-x-2 min-w-max">
              {variants.map((variant) => (
                <ProductCard
                  key={`sticky-${variant.id}`}
                  name={variant.label}
                  imageSrc={variant.image}
                  active={selectedVariant === variant.id}
                  compact
                  onClick={() => handleVariantSelect(variant.id)}
                />
              ))}
            </div>
          </div>
        </div>

      <div ref={heroBodyRef} className={`product-hero-body flex flex-col md:flex-row ${sectionShell} ${sectionContainerWide} relative`}>
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10 pr-0 md:pr-14 lg:pr-20">
          <h1 className="product-hero-title font-bold tracking-tight text-gray-900 mb-6 md:mb-8">
            Intellistain {selectedVariant === 'IS15' ? '15 slide' : '30 slide'}
          </h1>
          <div className="w-24 h-[1px] bg-gray-200 mb-8"></div>
          <p className="product-hero-description text-gray-500 font-normal">
            Intellistain automates and standardizes slide staining to reduce variability, 
            eliminate manual errors, and cut down on repeat tests freeing your lab 
            to focus on what matters: delivering fast, confident diagnostic results.
          </p>
        </div>

        {/* Right Content - Machine Image & Graphics */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center mt-8 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="product-hero-image-wrap rounded-full border border-gray-100 relative opacity-40">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-100"></div>
            </div>
          </div>
          
          <div className="relative z-10 product-hero-image-wrap drop-shadow-2xl transition-all duration-700 ease-in-out transform">
            <img
              key={selectedVariant}
              src={activeVariantData.image}
              alt={`Intellistain ${selectedVariant} Device`}
              className="product-hero-image animate-in fade-in duration-700"
            />
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Hero;
