import React, { useEffect, useRef, useState } from 'react';
import { INTELLISTAIN_VARIANT_EVENT } from './Hero';
import { sectionContainer, sectionShell } from '../../../components/layout';
import intellistain15Image from '../../../assets/ProductImages/IS-15.png';
import intellistain30Image from '../../../assets/ProductImages/IS-30.png';
import visionXImage from '../../../assets/ProductImages/VisionX2 (1).png';
import visionX6Image from '../../../assets/ProductImages/VX6.png';
import astraImage from '../../../assets/ProductImages/AstraThumbnail.png';

type IntellistainVariant = 'IS15' | 'IS30';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface IntellistainContent {
  benefits: Benefit[];
  features: Feature[];
}

const featureImages = [
  intellistain15Image,
  intellistain30Image,
  visionXImage,
  visionX6Image,
  astraImage,
];

const intellistainContent: Record<IntellistainVariant, IntellistainContent> = {
  IS15: {
    benefits: [
      {
        title: 'Space Optimization',
        description:
          'Compact 18x18-inch footprint fits effortlessly in small labs without sacrificing performance.',
      },
      {
        title: 'Superior Consistency',
        description:
          'Dip mechanics with agitation ensures clear, reproducible staining for histology and cytology slides.',
      },
      {
        title: 'Reagent Savings',
        description:
          'Intelligent trough design minimizes waste, filling only half for smaller loads to cut costs.',
      },
      {
        title: 'Routine Efficiency',
        description:
          'One-stop solution for all staining needs, freeing staff for higher-value tasks.',
      },
    ],
    features: [
      {
        id: 0,
        title: '15-Slide Capacity',
        description:
          'Processes up to 15 slides per run with precise dip staining mechanics.',
        image: featureImages[0],
      },
      {
        id: 1,
        title: 'Customizable Programs',
        description:
          'User-friendly touch screen for creating unlimited staining protocols.',
        image: featureImages[1],
      },
      {
        id: 2,
        title: 'Agitation Mechanism',
        description:
          'Periodic slide agitation in reagents for unparalleled clarity and quality.',
        image: featureImages[2],
      },
      {
        id: 3,
        title: 'Intelligent Troughs',
        description:
          'Efficient reagent use adapts to load size, reducing wastage significantly.',
        image: featureImages[3],
      },
      {
        id: 4,
        title: 'Versatile Applications',
        description:
          'Stains histology, cytology, and hematology slides with state-of-the-art mechatronics.',
        image: featureImages[4],
      },
    ],
  },
  IS30: {
    benefits: [
      {
        title: 'High-Volume Productivity',
        description:
          'Handles 30 slides per run, ideal for busy labs needing scalable staining.',
      },
      {
        title: 'Unrivaled Consistency',
        description:
          'Advanced dip mechanics deliver exceptional staining quality every time.',
      },
      {
        title: 'Operational Savings',
        description:
          'Optimized reagent troughs slash waste and costs for larger batches.',
      },
      {
        title: 'Lab Versatility',
        description:
          'Supports all slide types, integrating seamlessly into digital pathology workflows.',
      },
    ],
    features: [
      {
        id: 0,
        title: '30-Slide Capacity',
        description:
          'High-capacity runs for up to 30 slides using reliable dip staining.',
        image: featureImages[0],
      },
      {
        id: 1,
        title: 'Programmable Touch Interface',
        description:
          'Intuitive software for endless custom staining programs and protocols.',
        image: featureImages[1],
      },
      {
        id: 2,
        title: 'Precision Agitation',
        description:
          'Special mechatronics agitates slides for consistent, high-clarity results.',
        image: featureImages[2],
      },
      {
        id: 3,
        title: 'Adaptive Reagent System',
        description:
          'Smart troughs optimize fill levels based on slide volume for efficiency.',
        image: featureImages[3],
      },
      {
        id: 4,
        title: 'Multi-Sample Support',
        description:
          'Handles histology, cytology, and hematology with compact, tabletop design.',
        image: featureImages[4],
      },
    ],
  },
};

const AIChipIcon = () => (
  <svg width="58" height="58" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00AEEF] mb-6">
    <rect x="25" y="25" width="50" height="50" rx="8" stroke="currentColor" strokeWidth="2.5" />
    <rect x="38" y="38" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M35 25V18M45 25V18M55 25V18M65 25V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M35 82V75M45 82V75M55 82V75M65 82V75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M18 35H25M18 45H25M18 55H25M18 65H25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M75 35H82M75 45H82M75 55H82M75 65H82" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="800" fontFamily="Inter">AI</text>
  </svg>
);

const FeatureCard = ({
  title,
  description,
  className = '',
  style = {},
}: {
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={`flex flex-col items-start w-full max-w-[340px] transition-all duration-1000 ease-out ${className}`} style={style}>
    <AIChipIcon />
    <h3 className="text-[21px] font-bold text-[#111827] mb-3 tracking-tight">{title}</h3>
    <p className="text-[14px] leading-[1.6] text-gray-500 font-normal">
      {description}
    </p>
  </div>
);

const BenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVariant, setActiveVariant] = useState<IntellistainVariant>('IS15');

  const currentContent = intellistainContent[activeVariant];
  const currentBenefits = currentContent.benefits;
  const currentFeatures = currentContent.features;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % currentFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentFeatures.length]);

  useEffect(() => {
    const handleVariantChange = (event: Event) => {
      const variant = (event as CustomEvent<IntellistainVariant>).detail;
      if (variant === 'IS15' || variant === 'IS30') setActiveVariant(variant);
    };

    window.addEventListener(INTELLISTAIN_VARIANT_EVENT, handleVariantChange);
    return () => window.removeEventListener(INTELLISTAIN_VARIANT_EVENT, handleVariantChange);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [activeVariant]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      let progress = -rect.top / totalScrollable;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stage breaks
  const transition1 = 0.5; // Switch point between Benefits and Features
  
  // Phase 1: Right vertical stack cards exit (0.0 to 0.1)
  const yellowExitProgress = Math.min(1, scrollProgress / 0.1);
  const yellowOpacity = 1 - yellowExitProgress;
  const yellowTranslateY = -(yellowExitProgress * 150);

  // Phase 2: Bottom horizontal row cards
  // Enter phase (0.05 to 0.15)
  const greenEnterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05) / 0.1));
  // Exit phase (0.25 to 0.45)
  const greenExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.25) / 0.2));
  
  const greenOpacity = greenEnterProgress * (1 - greenExitProgress);
  const greenTranslateY = (100 * (1 - greenEnterProgress)) - (400 * greenExitProgress);

  // Global stage opacities
  const stage1Opacity = Math.max(0, Math.min(1, (transition1 - scrollProgress) * 10));
  
  // Features stage entry starts as the benefits row exits
  const stage2Opacity = scrollProgress > 0.35 
    ? Math.min(1, (scrollProgress - 0.35) * 8)
    : 0;
    
  const stage2TranslateY = 80 * (1 - Math.min(1, stage2Opacity));

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '500vh' }}>
      <section className="sticky top-20 sm:top-24 w-full h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] bg-white overflow-hidden flex flex-col">
        <div className={`${sectionContainer} ${sectionShell} relative h-full flex flex-col`}>
        
        {/* Persistent Sticky Header */}
        <div className="relative z-50 bg-white pt-6 pb-4">
          <div className="flex flex-col md:flex-row items-start w-full">
            <div className="w-[120px] md:w-[160px] shrink-0 pt-1 mr-6 md:mr-10">
              <div className="flex flex-col items-start w-full">
                <div className="h-4 relative w-full overflow-hidden">
                   <span className={`absolute inset-0 text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-700 ease-in-out ${scrollProgress < transition1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ color: '#00AEEF' }}>
                    BENEFITS
                  </span>
                  <span className={`absolute inset-0 text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-700 ease-in-out ${scrollProgress >= transition1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} style={{ color: '#00AEEF' }}>
                    FEATURES
                  </span>
                </div>
                <div className="relative w-full flex items-center pr-1 mt-1">
                  <div className="flex-grow h-[1px] bg-gray-200"></div>
                  <div className="w-[8px] h-[8px] border border-gray-300 rounded-full bg-white -ml-[4px]"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-0">
              <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
                IntelliStain automated slide stainers deliver consistent, high-quality results using dip mechanics.
              </h2>
            </div>
          </div>
        </div>

        {/* STAGE 1: Benefits Elements Animation */}
        <div 
          className="flex-grow relative z-10 overflow-hidden"
          style={{ 
            opacity: stage1Opacity,
            visibility: stage1Opacity < 0.01 ? 'hidden' : 'visible',
            pointerEvents: stage1Opacity > 0.5 ? 'auto' : 'none'
          }}
        >
          <div className="h-full flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
            
            <div className="flex-1 relative h-full">
              {/* Initial right-side vertical cards stack (Exits first) */}
              <div 
                className="absolute right-0 top-12 w-[340px] flex flex-col space-y-16"
                style={{ 
                  opacity: yellowOpacity,
                  transform: `translateY(${yellowTranslateY}px)`,
                  visibility: yellowOpacity < 0.01 ? 'hidden' : 'visible'
                }}
              >
                <FeatureCard
                  title={currentBenefits[0].title}
                  description={currentBenefits[0].description}
                />
                <FeatureCard
                  title={currentBenefits[1].title}
                  description={currentBenefits[1].description}
                />
              </div>

              {/* Bottom Horizontal Row */}
              <div 
                className="absolute left-0 bottom-24 w-full flex flex-col md:flex-row gap-x-12"
                style={{ 
                  opacity: greenOpacity,
                  transform: `translateY(${greenTranslateY}px)`,
                  visibility: greenOpacity < 0.01 ? 'hidden' : 'visible'
                }}
              >
                <FeatureCard
                  title={currentBenefits[2].title}
                  description={currentBenefits[2].description}
                  className="flex-1"
                />
                <FeatureCard
                  title={currentBenefits[3].title}
                  description={currentBenefits[3].description}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* STAGE 2: Features Carousel (Enters after Benefits row moves UP) */}
        <div 
          className="absolute inset-0 flex flex-col justify-center pt-24 z-20"
          style={{ 
            opacity: stage2Opacity,
            visibility: stage2Opacity < 0.01 ? 'hidden' : 'visible',
            transform: `translateY(${stage2TranslateY}px)`,
            pointerEvents: stage2Opacity > 0.8 ? 'auto' : 'none',
          }}
        >
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-[#f8fafb] rounded-[48px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 min-h-[460px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="w-full md:w-[55%] overflow-hidden">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] bg-white">
                    <img 
                      key={currentFeatures[activeIndex].image}
                      src={currentFeatures[activeIndex].image} 
                      alt={currentFeatures[activeIndex].title} 
                      className="w-full h-full object-cover block animate-in fade-in zoom-in-95 duration-1000"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[45%] flex flex-col justify-center">
                  <div className="mb-4 inline-flex items-center space-x-3">
                     <span className="text-[11px] font-extrabold text-[#00AEEF] uppercase tracking-[0.2em]">INNOVATION {activeIndex + 1}</span>
                     <div className="h-[2px] w-8 bg-blue-100"></div>
                  </div>
                  <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 mb-6 leading-[1.1]">
                    {currentFeatures[activeIndex].title}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-gray-600 font-normal">
                    {currentFeatures[activeIndex].description}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center items-center gap-4 w-full max-w-[400px] mx-auto">
                {currentFeatures.map((_, index) => (
                  <button key={index} onClick={() => setActiveIndex(index)} className="group relative h-4 flex-1 flex items-center">
                    <div className={`h-[4px] w-full rounded-full transition-all duration-500 ${index === activeIndex ? 'bg-black' : 'bg-gray-200 group-hover:bg-gray-300'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-40"></div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
