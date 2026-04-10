import React, { useEffect, useMemo, useRef, useState } from 'react';

interface BenefitCard {
  title: string;
  description: string;
}

interface FeatureSlide {
  title: string;
  description: string;
  image: string;
}

interface ComparisonConfig {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

interface ResponsiveBenefitsTemplateProps {
  eyebrow?: string;
  headline: string;
  benefits: BenefitCard[];
  features: FeatureSlide[];
  comparison?: ComparisonConfig;
  featureCta?: { text: string; href?: string };
}

const clampPercent = (value: number) => Math.max(0, Math.min(100, value));

export const ResponsiveBenefitsTemplate: React.FC<ResponsiveBenefitsTemplateProps> = ({
  eyebrow = 'Benefits',
  headline,
  benefits,
  features,
  comparison,
  featureCta,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    if (!isDragging) return;

    const updatePosition = (clientX: number) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setSliderPos(clampPercent(next));
    };

    const onMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onTouchMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX);
    const onEnd = () => setIsDragging(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging]);

  const activeFeature = useMemo(() => features[activeIndex], [features, activeIndex]);
  const startDrag = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(clampPercent(next));
    setIsDragging(true);
  };

  return (
    <section className="w-full bg-white px-4 md:px-6 lg:px-8 py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 md:mb-12">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#00AEEF]">{eyebrow}</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight text-[#111827] max-w-[1000px]">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-14">
          {benefits.map((card) => (
            <article key={card.title} className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF8FF] text-[#00AEEF]">
                <span className="text-xs font-extrabold uppercase tracking-wide">AI</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-600">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-100 bg-[#f8fafb] p-4 sm:p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl aspect-[16/10]">
                <img
                  key={activeFeature.image}
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00AEEF]">Feature {activeIndex + 1}</span>
                <div className="h-[2px] w-8 bg-blue-100" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-[1.1]">{activeFeature.title}</h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">{activeFeature.description}</p>
              {featureCta && (
                <a
                  href={featureCta.href ?? '#'}
                  className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#00AEEF] px-5 py-2 text-sm font-bold text-white hover:bg-[#0096ce] transition-colors"
                >
                  {featureCta.text}
                </a>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center items-center gap-3 w-full max-w-[420px] mx-auto">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative h-4 flex-1 flex items-center"
                aria-label={`Go to feature ${index + 1}`}
              >
                <div className={`h-[4px] w-full rounded-full transition-all duration-500 ${index === activeIndex ? 'bg-black' : 'bg-gray-200 group-hover:bg-gray-300'}`} />
              </button>
            ))}
          </div>
        </div>

        {comparison && (
          <div className="mt-12 md:mt-14">
            <div
              ref={sliderRef}
              className="relative w-full max-w-[1080px] mx-auto aspect-[21/10] overflow-hidden rounded-2xl border border-gray-100 shadow-2xl select-none"
              onMouseDown={(e) => startDrag(e.clientX)}
              onTouchStart={(e) => startDrag(e.touches[0].clientX)}
            >
              <img src={comparison.afterImage} alt={comparison.afterLabel ?? 'After'} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute top-4 right-4 rounded bg-black/25 px-3 py-1 text-sm font-bold text-white">
                {comparison.afterLabel ?? 'After'}
              </div>

              <div className="absolute inset-y-0 left-0 overflow-hidden border-r-[3px] border-white/70" style={{ width: `${sliderPos}%` }}>
                <img src={comparison.beforeImage} alt={comparison.beforeLabel ?? 'Before'} className="h-full w-full object-cover" />
                <div className="absolute top-4 left-4 rounded bg-black/25 px-3 py-1 text-sm font-bold text-white">
                  {comparison.beforeLabel ?? 'Before'}
                </div>
              </div>

              <div className="absolute inset-y-0 w-[4px] bg-white z-10 pointer-events-none" style={{ left: `${sliderPos}%` }}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
