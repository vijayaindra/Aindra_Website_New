import React, { useEffect, useRef, useState } from 'react';
import { VISIONX_VARIANT_EVENT } from './Hero';

type VisionXVariant = 'VX1' | 'VX6' | 'VX mini' | 'VXF';

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

interface VisionXContent {
  benefits: Benefit[];
  features: Feature[];
}

const featureImages = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
];

const visionXContent: Record<'VX1' | 'VX6' | 'VX mini' | 'VXF', VisionXContent> = {
  VX1: {
    benefits: [
      {
        title: 'Rapid Turnaround',
        description:
          'Scan slides in 150 seconds for immediate digital access, accelerating pathology workflows.',
      },
      {
        title: 'Space-Saving Design',
        description:
          'Ultra-compact footprint fits seamlessly into any lab, even space-constrained environments.',
      },
      {
        title: 'Cost Efficiency',
        description:
          'Subscription-based pricing delivers high performance without massive upfront costs.',
      },
      {
        title: 'Remote Collaboration',
        description:
          'High-res images with initial AI analysis upload to Clustr for secure sharing and expert consultations anywhere.',
      },
    ],
    features: [
      {
        id: 0,
        title: '150-Second Scanning',
        description:
          'Capture 15x15mm slide areas in just 150 seconds with automated brightfield technology.',
        image: featureImages[0],
      },
      {
        id: 1,
        title: 'High-Resolution Imaging',
        description:
          '0.52μm pixel resolution at 20x with 40x digital zoom for crisp, detailed views.',
        image: featureImages[1],
      },
      {
        id: 2,
        title: 'Single-Slide Capacity',
        description:
          'Designed for quick, on-demand single-slide processing with minimal setup.',
        image: featureImages[2],
      },
      {
        id: 3,
        title: 'Automated Z-Stacking',
        description:
          'Precision focusing technique ensures sharp images across entire slide thickness.',
        image: featureImages[3],
      },
      {
        id: 4,
        title: 'Onboard AI Analysis',
        description:
          'VisionX analyzes images onboard with Astra AI, providing initial analysis and heatmaps before uploading to Clustr cloud.',
        image: featureImages[4],
      },
    ],
  },
  VX6: {
    benefits: [
      {
        title: 'High-Throughput Efficiency',
        description:
          'Batch-scan up to 6 slides in minutes, ideal for busy labs handling high volumes.',
      },
      {
        title: 'Unmatched Reliability',
        description:
          'Robust design with global shutter camera ensures consistent, high-quality results.',
      },
      {
        title: 'Scalable Operations',
        description:
          'Expands lab capacity economically, supporting growth without infrastructure overhauls.',
      },
      {
        title: 'Enhanced Diagnostics',
        description:
          'Onboard AI initial analysis with heatmaps speeds up pathologist review via Clustr upload.',
      },
    ],
    features: [
      {
        id: 0,
        title: '150-Second Per Slide',
        description:
          'Processes 15x15mm areas per slide in 150 seconds across 6-slide batches.',
        image: featureImages[0],
      },
      {
        id: 1,
        title: 'Multi-Slide Loader',
        description:
          '6-slide capacity for uninterrupted, high-volume scanning sessions.',
        image: featureImages[1],
      },
      {
        id: 2,
        title: 'Superior Resolution',
        description:
          'Delivers 0.52μm pixels at 20x magnification with advanced 40x zoom.',
        image: featureImages[2],
      },
      {
        id: 3,
        title: 'Z-Stacking Focus',
        description:
          'Automated multi-layer focusing captures every detail without manual adjustments.',
        image: featureImages[3],
      },
      {
        id: 4,
        title: 'Onboard AI Analysis',
        description:
          'VisionX performs real-time Astra AI processing for initial analysis and heatmaps, then uploads to Clustr telepathology platform.',
        image: featureImages[4],
      },
    ],
  },
  'VX mini': {
    benefits: [
      {
        title: 'Ultimate Portability',
        description:
          'Even smaller and lighter than VX1, perfect for point-of-care or mobile pathology.',
      },
      {
        title: 'Instant Productivity',
        description:
          '150-second scans with onboard AI enable rapid digitization in resource-limited settings.',
      },
      {
        title: 'Affordable Entry',
        description:
          'Compact innovation at low cost, democratizing digital pathology for all labs.',
      },
      {
        title: 'Flexible Deployment',
        description:
          'Fits anywhere—clinics, field labs, or research—with AI heatmaps uploading to Clustr.',
      },
    ],
    features: [
      {
        id: 0,
        title: 'Ultra-Fast Scanning',
        description:
          '150 seconds for 15x15mm areas, optimized for speed in a tiny package.',
        image: featureImages[0],
      },
      {
        id: 1,
        title: 'Miniaturized High-Res',
        description:
          'Maintains 0.52μm resolution at 20x with digital 40x zoom despite compact size.',
        image: featureImages[1],
      },
      {
        id: 2,
        title: 'Single-Slide Efficiency',
        description:
          'Streamlined loader for one-slide-at-a-time precision scanning.',
        image: featureImages[2],
      },
      {
        id: 3,
        title: 'Smart Auto-Focus',
        description:
          'Advanced Z-stacking ensures focus across depths in a portable form factor.',
        image: featureImages[3],
      },
      {
        id: 4,
        title: 'Onboard AI Analysis',
        description:
          'VisionX delivers initial AI analysis and heatmaps directly, ready for Clustr cloud upload and telepathology sharing.',
        image: featureImages[4],
      },
    ],
  },
  VXF: {
    benefits: [
      {
        title: 'Brilliant Fluorescence Capture',
        description:
          'Reveals intricate fluorescent details with superior clarity, enhancing research and diagnostic confidence.',
      },
      {
        title: 'Customizable for Any Lab',
        description:
          'Three configurable filter sets adapt perfectly to your specific fluorescent markers and protocols.',
      },
      {
        title: 'Rapid Digital Transition',
        description:
          'Scans fluorescent slides quickly, enabling instant digital sharing and analysis workflows.',
      },
      {
        title: 'Seamless Integration',
        description:
          'Pairs effortlessly with ClustrPath for telepathology review of fluorescence data across teams.',
      },
    ],
    features: [
      {
        id: 0,
        title: 'Fluorescent-Optimized Scanning',
        description:
          'High-sensitivity capture of fluorescent samples with minimal photobleaching and maximum signal.',
        image: featureImages[0],
      },
      {
        id: 1,
        title: 'Triple Filter Configuration',
        description:
          'Three customizable filter sets tailored to customer wavelengths—DAPI, FITC, TRITC, or your choice.',
        image: featureImages[1],
      },
      {
        id: 2,
        title: 'High-Resolution Fluorescence',
        description:
          'Delivers crisp 20x optics with digital zoom for publication-quality fluorescent whole slides.',
        image: featureImages[2],
      },
      {
        id: 3,
        title: 'Automated Slide Handling',
        description:
          'Precise Z-stacking and focus for even the faintest fluorescent signals across entire slides.',
        image: featureImages[3],
      },
      {
        id: 4,
        title: 'ClustrPath Compatible',
        description:
          'Direct upload of fluorescence scans to telepathology platform for collaborative review.',
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
  const [activeVariant, setActiveVariant] = useState<VisionXVariant>('VX1');

  const normalizedVariant: 'VX1' | 'VX6' | 'VX mini' | 'VXF' =
    activeVariant === 'VX6'
      ? 'VX6'
      : activeVariant === 'VX mini'
        ? 'VX mini'
        : activeVariant === 'VXF'
          ? 'VXF'
          : 'VX1';
  const currentContent = visionXContent[normalizedVariant];
  const currentBenefits = currentContent.benefits;
  const currentFeatures = currentContent.features;
  const benefitsHeading =
    normalizedVariant === 'VXF'
      ? 'VXF fluorescent slide scanners capture stunning high-resolution fluorescence imaging.'
      : 'VisionX whole slide scanners deliver fast, high-quality digital pathology imaging with onboard AI.';

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % currentFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentFeatures.length]);

  useEffect(() => {
    const handleVariantChange = (event: Event) => {
      const variant = (event as CustomEvent<VisionXVariant>).detail;
      if (variant) setActiveVariant(variant);
    };

    window.addEventListener(VISIONX_VARIANT_EVENT, handleVariantChange);
    return () => window.removeEventListener(VISIONX_VARIANT_EVENT, handleVariantChange);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [normalizedVariant]);

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
        
        {/* Persistent Sticky Header */}
        <div className="relative z-50 bg-white px-4 md:px-6 pt-6 pb-4">
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
                {benefitsHeading}
              </h2>
            </div>
          </div>
        </div>

        {/* STAGE 1: Benefits Elements Animation */}
        <div 
          className="flex-grow relative z-10 px-4 md:px-6 overflow-hidden"
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
          className="absolute inset-0 flex flex-col justify-center px-4 md:px-6 pt-24 z-20"
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
      </section>
    </div>
  );
};

export default BenefitsSection;
