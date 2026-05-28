import React, { useEffect, useRef, useState } from 'react';
import beforeImage from '../../../assets/ProductImages/Before.png';
import afterImage from '../../../assets/ProductImages/After.png';
import { BeforeAfterComparison } from '../../../components/BeforeAfterComparison';
import { sectionContainer, sectionShell } from '../../../components/layout';
import { SectionEyebrow } from '../../../components/SectionEyebrow';
import acceleratedDiagnosisIcon from '../../../assets/Icon/Accelerated Diagnosis.png';
import earlyDetectionPrecisionIcon from '../../../assets/Icon/Early Detection Precision.png';
import pathologistEmpowermentIcon from '../../../assets/Icon/Pathologist Empowerment.png';
import seamlessWorkflowIntegrationIcon from '../../../assets/Icon/Seamless Workflow Integration.png';

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
    title: 'Accelerated Diagnosis',
    description:
      'Provides initial analysis and heatmaps, slashing review time for pathologists.',
  },
  {
    title: 'Early Detection Precision',
    description:
      'Pinpoints abnormalities with AI accuracy, enabling earlier interventions for better outcomes.',
  },
  {
    title: 'Pathologist Empowerment',
    description:
      'Augments expertise with visual heatmaps, reducing diagnostic fatigue and errors.',
  },
  {
    title: 'Seamless Workflow Integration',
    description:
      'Analyzes VisionX scans onboard, then uploads to Clustr for telepathology collaboration.',
  },
];

const features: Feature[] = [
  {
    id: 0,
    title: 'Multi-Cancer Analysis',
    description:
      'Supports cervical, lung, prostate, and thyroid cancer detection from whole slide images.',
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 1,
    title: 'Abnormality Heatmaps',
    description:
      'Generates intuitive visual heatmaps highlighting suspected cancerous regions.',
    image: "https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: 'Real-Time Processing',
    description:
      'Onboard AI delivers rapid initial findings without cloud dependency.',
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: 'Clustr Upload Ready',
    description:
      'Seamlessly transfers analysis and heatmaps to ClustrPath for expert review.',
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    title: 'Self-Learning Capability',
    description:
      'Improves accuracy over time through pathologist feedback loops.',
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
  }
];

const BENEFIT_ICON_WRAPPER_CLASS = 'mb-5 shrink-0 w-fit';
const BENEFIT_ICON_CLASS = 'h-[144px] w-auto object-contain block';

const benefitIconByTitle: Record<string, string> = {
  'Accelerated Diagnosis': acceleratedDiagnosisIcon,
  'Early Detection Precision': earlyDetectionPrecisionIcon,
  'Pathologist Empowerment': pathologistEmpowermentIcon,
  'Seamless Workflow Integration': seamlessWorkflowIntegrationIcon,
};

const BenefitIcon = ({ title }: { title: string }) => {
  const icon = benefitIconByTitle[title];
  return (
    <div className={BENEFIT_ICON_WRAPPER_CLASS}>
      {icon ? <img src={icon} alt={`${title} icon`} className={BENEFIT_ICON_CLASS} /> : null}
    </div>
  );
};

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
    <BenefitIcon title={title} />
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

  // Stage breaks
  const transition1 = 0.4;  // End of Benefits phase
  const transition2 = 0.75; // Features phase
  
  // Phase 1: Right vertical stack cards exit (0.0 to 0.1)
  const yellowExitProgress = Math.min(1, scrollProgress / 0.1);
  const yellowOpacity = 1 - yellowExitProgress;
  const yellowTranslateY = -(yellowExitProgress * 150);

  // Phase 2: Bottom horizontal row cards (Marked in prompt)
  // Enter phase (0.05 to 0.15)
  const greenEnterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05) / 0.1));
  // Exit phase (0.25 to 0.38) - This is where they move UP as per the red arrow
  const greenExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.25) / 0.13));
  
  const greenOpacity = greenEnterProgress * (1 - greenExitProgress);
  // Initial enter is from +100 to 0. Exit is from 0 to -400 (moving up out of frame)
  const greenTranslateY = (100 * (1 - greenEnterProgress)) - (400 * greenExitProgress);

  // Global stage opacities
  const stage1Opacity = Math.max(0, Math.min(1, (transition1 - scrollProgress) * 10));
  
  // Features stage entry starts as the benefits row exits
  const stage2Opacity = scrollProgress > 0.35 && scrollProgress < transition2 
    ? Math.min(1, (scrollProgress - 0.35) * 8) * (1 - Math.max(0, (scrollProgress - (transition2 - 0.08)) * 12))
    : 0;
    
  const stage3Opacity = Math.max(0, Math.min(1, (scrollProgress - transition2) * 5));

  const stage2TranslateY = 80 * (1 - stage2Opacity);
  const stage3TranslateY = 80 * (1 - stage3Opacity);
  const eyebrowLabel = scrollProgress < transition1 ? 'Benefits' : scrollProgress < transition2 ? 'Features' : 'Comparison';

  return (
    <div ref={containerRef} className={`${sectionShell} relative w-full`} style={{ height: '800vh' }}>
      <section className="sticky top-20 sm:top-24 w-full h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] max-h-[900px]:top-16 max-h-[900px]:h-[calc(100svh-4rem)] max-h-[900px]:min-h-0 max-h-[900px]:py-3 max-h-[820px]:h-[calc(100svh-3.5rem)] min-h-[700px] xl:min-h-[740px] bg-white overflow-visible lg:overflow-hidden flex flex-col">
        <div className={`${sectionContainer} relative h-full flex flex-col pt-14 sm:pt-16`}>
        
        {/* Persistent Sticky Header (Headline remains constant) */}
        <div className="relative z-50 bg-white pt-4 xl:pt-6 pb-3 xl:pb-4">
          <div className="flex flex-col md:flex-row items-start w-full">
            <div className="w-[120px] md:w-[160px] shrink-0 pt-1 mr-6 md:mr-10">
              <SectionEyebrow label={eyebrowLabel} />
            </div>
            <div className="flex-1 mt-0">
              <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
                Astra AI suite powers precise pathology analysis with abnormality detection and heatmaps.
              </h2>
            </div>
          </div>
        </div>

        {/* STAGE 1: Benefits Elements Animation */}
        <div 
          className="flex-grow relative z-10"
          style={{ 
            opacity: stage1Opacity,
            visibility: stage1Opacity < 0.01 ? 'hidden' : 'visible',
            pointerEvents: stage1Opacity > 0.5 ? 'auto' : 'none'
          }}
        >
          <div className="h-full flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
            
            <div 
              className="flex-1 pt-8 md:pt-10"
              style={{ 
                opacity: Math.max(yellowOpacity, greenOpacity),
                transform: `translateY(${Math.min(yellowTranslateY, greenTranslateY)}px)`
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-14 items-start">
                <FeatureCard
                  title={benefits[0].title}
                  description={benefits[0].description}
                />
                <FeatureCard
                  title={benefits[1].title}
                  description={benefits[1].description}
                />
                <FeatureCard
                  title={benefits[2].title}
                  description={benefits[2].description}
                />
                <FeatureCard
                  title={benefits[3].title}
                  description={benefits[3].description}
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
                      key={features[activeIndex].image}
                      src={features[activeIndex].image} 
                      alt={features[activeIndex].title} 
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
                    {features[activeIndex].title}
                  </h2>
                  <p className="text-[16px] leading-relaxed text-gray-600 font-normal">
                    {features[activeIndex].description}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex justify-center items-center gap-4 w-full max-w-[400px] mx-auto">
                {features.map((_, index) => (
                  <button key={index} onClick={() => setActiveIndex(index)} className="group relative h-4 flex-1 flex items-center">
                    <div className={`h-[4px] w-full rounded-full transition-all duration-500 ${index === activeIndex ? 'bg-black' : 'bg-gray-200 group-hover:bg-gray-300'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* STAGE 3: Image Comparison (Before/After) */}
        <div 
          className="absolute inset-0 flex flex-col justify-center pt-24 z-30"
          style={{ 
            opacity: stage3Opacity,
            visibility: stage3Opacity < 0.01 ? 'hidden' : 'visible',
            transform: `translateY(${stage3TranslateY}px)`,
            pointerEvents: stage3Opacity > 0.8 ? 'auto' : 'none',
          }}
        >
          <div className="w-full h-full flex flex-col md:flex-row">
            <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
            <div className="flex-1 flex flex-col justify-center items-center h-full pb-10">
              <BeforeAfterComparison
                className="max-w-[1080px] aspect-[1417/736] cursor-ew-resize"
                beforeImage={beforeImage}
                afterImage={afterImage}
                beforeLabel="Before"
                afterLabel="After"
                initialPosition={50}
              />
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
