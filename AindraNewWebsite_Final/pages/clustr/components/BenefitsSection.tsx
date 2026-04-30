
import React, { useEffect, useRef, useState } from 'react';
import { sectionContainer, sectionShell } from '../../../components/layout';

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

const benefits: Benefit[] = [
  {
    title: 'Enhanced Efficiency',
    description:
      'Digitizing the pathology workflow streamlines processes, making reporting and analysis faster and more reliable.',
  },
  {
    title: 'Workplace Flexibility',
    description:
      'Cloud access empowers pathologists to view and report slides anytime, anywhere, boosting productivity.',
  },
  {
    title: 'Risk Elimination',
    description:
      'No more shipping physical slides for consultations, removing transportation risks and delays.',
  },
  {
    title: 'Expanded Expertise',
    description:
      'Share cases effortlessly with expert pathologists for second opinions and grow your service network geographically.',
  },
];

const features: Feature[] = [
  {
    id: 0,
    title: 'Remote Slide Access',
    description:
      'Gain secure remote access to high-resolution slide images for efficient reporting from any location.',
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 1,
    title: 'Multi-User Sharing',
    description:
      'Easily share slides with multiple pathologists or collaborators for consultations and reviews.',
    image: "https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: 'Digital Reporting',
    description:
      'Generate professional reports complete with digital signatures for quick and compliant sign-off.',
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: 'Real-time Monitoring',
    description:
      'Keep track of every slide and every stain in real-time. Our intuitive dashboard provides immediate feedback on system performance and reagent levels to prevent downtime.',
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: 'Advanced Image Viewer',
    description:
      'Integrated viewer supports pan, zoom, and annotations on high-resolution images for precise analysis.',
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

const FeatureCard = ({
  title,
  description,
  className = "",
  style = {},
}: {
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={`flex flex-col items-start w-full max-w-[340px] ${className}`} style={style}>
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

  const transition1 = 0.5;
  const yellowExitProgress = Math.min(1, scrollProgress / 0.1);
  const yellowOpacity = 1 - yellowExitProgress;
  const yellowTranslateY = -(yellowExitProgress * 150);
  const greenEnterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05) / 0.1));
  const greenExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.25) / 0.2));
  const greenOpacity = greenEnterProgress * (1 - greenExitProgress);
  const greenTranslateY = (100 * (1 - greenEnterProgress)) - (400 * greenExitProgress);
  const stage1Opacity = Math.max(0, Math.min(1, (transition1 - scrollProgress) * 10));
  const stage2Opacity = scrollProgress > 0.35
    ? Math.min(1, (scrollProgress - 0.35) * 8)
    : 0;
  const stage2TranslateY = 80 * (1 - Math.min(1, stage2Opacity));

  const currentFeature = features[activeIndex];

  return (
    <div ref={containerRef} className={`${sectionShell} relative w-full`} style={{ height: '500vh' }}>
      <section className="sticky top-20 sm:top-24 w-full h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] bg-white overflow-hidden flex flex-col">
        <div className={`${sectionContainer} relative h-full flex flex-col`}>
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
                  Clustr revolutionizes telepathology with seamless slide reporting, viewing, and sharing.
                </h2>
              </div>
            </div>
        </div>

        <div 
          className="flex-grow relative z-10 overflow-hidden"
          style={{ 
            opacity: stage1Opacity,
            visibility: stage1Opacity < 0.01 ? 'hidden' : 'visible',
            pointerEvents: stage1Opacity > 0.5 ? 'auto' : 'none',
          }}
        >
            <div className="h-full flex flex-col md:flex-row w-full">
              <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
              <div className="flex-1 relative h-full">
                <div
                  className="absolute right-0 top-12 w-[340px] flex flex-col space-y-16"
                  style={{
                    opacity: yellowOpacity,
                    transform: `translateY(${yellowTranslateY}px)`,
                    visibility: yellowOpacity < 0.01 ? 'hidden' : 'visible',
                  }}
                >
                  <FeatureCard title={benefits[0].title} description={benefits[0].description} />
                  <FeatureCard title={benefits[1].title} description={benefits[1].description} />
                </div>
                <div
                  className="absolute left-0 bottom-24 w-full flex flex-col md:flex-row gap-x-12"
                  style={{
                    opacity: greenOpacity,
                    transform: `translateY(${greenTranslateY}px)`,
                    visibility: greenOpacity < 0.01 ? 'hidden' : 'visible',
                  }}
                >
                  <FeatureCard title={benefits[2].title} description={benefits[2].description} className="flex-1" />
                  <FeatureCard title={benefits[3].title} description={benefits[3].description} className="flex-1" />
                </div>
              </div>
            </div>
        </div>

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
                  <div className="w-full md:w-[45%] flex flex-col justify-center">
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
                      <a href="#/contact" className="text-[14px] font-bold text-[#00AEEF] hover:text-blue-600 flex items-center group transition-colors">
                        Explore Clustr Platform 
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
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
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
