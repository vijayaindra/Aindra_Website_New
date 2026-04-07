
import React, { useEffect, useRef, useState } from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 0,
    title: "Feature 1: Precision Staining",
    description: "Our advanced Clustr platform delivers unrivaled accuracy in tissue staining, ensuring consistent results across high-volume laboratory workloads. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 1,
    title: "Feature 2: AI-Driven Insights",
    description: "Leverage the power of deep learning to identify patterns and anomalies with superhuman precision. Clustr's AI core processes millions of pixels to assist pathologists in faster decision making.",
    image: "https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Feature 3: Scalable Workflow",
    description: "Seamlessly integrate Clustr into your existing laboratory information systems. Our modular design allows you to scale from single-clinic operations to multi-site diagnostic networks.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Feature 4: Real-time Monitoring",
    description: "Keep track of every slide and every stain in real-time. Our intuitive dashboard provides immediate feedback on system performance and reagent levels to prevent downtime.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd+auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Feature 5: Cloud Connectivity",
    description: "Securely access your data from anywhere in the world. Clustr's cloud-native architecture ensures your diagnostic results are backed up and available for remote consultation.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
  }
];

const AIChipIcon = () => (
  <svg width="62" height="62" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#00AEEF] mb-6">
    <rect x="25" y="25" width="50" height="50" rx="6" stroke="currentColor" strokeWidth="3.5" />
    <rect x="38" y="38" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="3.5" />
    <path d="M35 25V18M45 25V18M55 25V18M65 25V18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M35 82V75M45 82V75M55 82V75M65 82V75" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M18 35H25M18 45H25M18 55H25M18 65H25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M75 35H82M75 45H82M75 55H82M75 65H82" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M30 12C20.0589 12 12 20.0589 12 30M12 70C12 79.9411 20.0589 88 30 88M70 88C79.9411 88 88 79.9411 88 70M88 30C88 20.0589 79.9411 12 70 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="15" fontWeight="900" fontFamily="Inter">AI</text>
  </svg>
);

const FeatureCard = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`flex flex-col items-start w-full max-w-[340px] ${className}`} style={style}>
    <AIChipIcon />
    <h3 className="text-[21px] font-bold text-[#111827] mb-3 tracking-tight">AI-Ready Platform</h3>
    <p className="text-[14px] leading-[1.6] text-gray-500 font-normal">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    </p>
  </div>
);

const BenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const transitionStart = 0.30;
  const transitionDuration = 0.40;
  
  const benefitsStage = Math.min(1, scrollProgress / transitionStart);
  const fadeStage = Math.max(0, Math.min(1, (scrollProgress - transitionStart) / transitionDuration));
  
  const easedFade = fadeStage * fadeStage * (3 - 2 * fadeStage);

  const benefitsTranslate = 120 - (benefitsStage * 350) - (easedFade * 200);
  const benefitsScale = 1 - (easedFade * 0.08);

  const featuresEntryTranslate = 60 * (1 - easedFade);
  const featuresEntryScale = 0.94 + (0.06 * easedFade);

  const currentFeature = features[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '500vh' }}>
      <section className="sticky top-0 w-full h-screen bg-white overflow-hidden flex flex-col">
        <div className="relative z-40 bg-white px-4 md:px-8 pt-4 pb-4">
          <div className="flex flex-col md:flex-row items-start w-full">
            <div className="w-[120px] md:w-[160px] shrink-0 pt-1 mr-6 md:mr-10">
              <div className="flex flex-col items-start w-full">
                <div className="h-4 relative w-full overflow-hidden">
                   <span className={`absolute inset-0 text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-1000 ease-in-out ${scrollProgress < (transitionStart + transitionDuration / 2) ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ color: '#00AEEF' }}>
                    BENEFITS
                  </span>
                  <span className={`absolute inset-0 text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-1000 ease-in-out ${scrollProgress >= (transitionStart + transitionDuration / 2) ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} style={{ color: '#00AEEF' }}>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </h2>
            </div>
          </div>
        </div>

        <div 
          className="flex-grow relative z-10 px-4 md:px-8 overflow-hidden"
          style={{ 
            opacity: 1 - easedFade,
            visibility: easedFade === 1 ? 'hidden' : 'visible',
            transform: `scale(${benefitsScale})`,
            transition: 'opacity 0.15s linear' 
          }}
        >
          <div className="h-full flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 h-full pb-8 relative gap-x-4">
              <div 
                className="relative flex flex-col justify-end pr-2 will-change-transform"
                style={{ transform: `translateY(${benefitsTranslate}px)`, opacity: scrollProgress > 0.01 ? 1 : 0 }}
              >
                <FeatureCard />
              </div>
              <div 
                className="relative flex flex-col justify-end px-2 will-change-transform"
                style={{ transform: `translateY(${benefitsTranslate}px)`, opacity: scrollProgress > 0.01 ? 1 : 0 }}
              >
                <FeatureCard />
              </div>
              <div 
                className="relative flex flex-col pl-6 space-y-12 pt-6 will-change-transform"
                style={{ transform: `translateY(${benefitsTranslate * 0.7}px)` }} 
              >
                <FeatureCard />
                <FeatureCard />
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 pt-24 z-20 pointer-events-none"
          style={{ 
            opacity: easedFade,
            visibility: easedFade < 0.01 ? 'hidden' : 'visible',
            transform: `translateY(${featuresEntryTranslate}px) scale(${featuresEntryScale})`,
            pointerEvents: easedFade > 0.9 ? 'auto' : 'none',
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-[#f8fafb] rounded-[48px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 min-h-[440px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="w-full md:w-[58%] overflow-hidden">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] bg-white group">
                    <img 
                      key={currentFeature.image}
                      src={currentFeature.image} 
                      alt={currentFeature.title} 
                      className="w-full h-full object-cover block animate-in fade-in zoom-in-95 duration-1000 ease-out transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-500/5 mix-blend-screen pointer-events-none"></div>
                  </div>
                </div>
                <div className="w-full md:w-[42%] flex flex-col justify-center">
                  <div className="mb-4 inline-flex items-center space-x-3">
                     <span className="text-[11px] font-extrabold text-blue-500 uppercase tracking-[0.2em]">INNOVATION {activeIndex + 1}</span>
                     <div className="h-[2px] w-8 bg-blue-100"></div>
                  </div>
                  <h2 key={`title-${activeIndex}`} className="text-[32px] md:text-[36px] font-bold text-gray-900 mb-6 leading-[1.1] animate-in slide-in-from-right-4 duration-500 ease-out">
                    {currentFeature.title}
                  </h2>
                  <p key={`desc-${activeIndex}`} className="text-[16px] leading-relaxed text-gray-600 font-normal animate-in slide-in-from-right-8 duration-700 ease-out">
                    {currentFeature.description}
                  </p>
                  <div className="mt-8">
                     <button className="text-[14px] font-bold text-[#00AEEF] hover:text-blue-600 flex items-center group transition-colors">
                       Explore Clustr Platform 
                       <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                       </svg>
                     </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center items-center gap-4 w-full max-w-[400px] mx-auto">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="group relative h-4 flex-1 flex items-center focus:outline-none"
                  >
                    <div className={`h-[4px] w-full rounded-full transition-all duration-500 ${
                      index === activeIndex ? 'bg-black' : 'bg-gray-200 group-hover:bg-gray-300'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30"></div>
      </section>
    </div>
  );
};

export default BenefitsSection;
