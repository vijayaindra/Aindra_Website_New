
import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kristian Olson",
    role: "Director at CamTech",
    quote: "Aindra is delivering what pathology needs better care at lower cost. Designed for India, but scalable globally, it brings precision, efficiency, and AI-readiness to diagnostic workflows. Tools like Intellistain and VisionX empower pathologists to focus on what matters faster, more accurate cancer detection.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief Pathologist at City Labs",
    quote: "The automation level AiNDRA provides is a game-changer for high-volume laboratories. We've seen a significant reduction in processing time without compromising on the quality of diagnostic insights. It's truly the future of clinical pathology.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Prof. Amit Shah",
    role: "Head of Oncology Research",
    quote: "Seeing such precision in AI-assisted diagnosis gives us immense confidence in the future of cancer screening. Aindra's ability to condense complex workflows into a unified digital experience is exactly what the healthcare sector needs right now.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Clinical Consultant, Madrid",
    quote: "Efficiency and accuracy usually don't go hand in hand in pathology, but Aindra proves otherwise. Their cloud-based analysis platform Astra has bridged the gap for our remote clinics, allowing expert review from anywhere in the world.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "HealthTech Innovator",
    quote: "Scaling diagnostics globally requires robust, reliable, and user-friendly tools. VisionX is a masterpiece of engineering that makes high-resolution digital scanning accessible to everyone, from small clinics to large research hospitals.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Diagnostic Lead, HealthPlus",
    quote: "The seamless integration with our existing LIS systems made the transition to digital pathology incredibly smooth. The AI-driven heatmaps are particularly helpful for highlighting areas of concern that require a pathologist's immediate attention.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&auto=format&fit=crop"
  }
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 relative">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
             <div className="w-8 h-px bg-slate-200"></div>
             <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase">Testimonials</span>
             <div className="w-2 h-2 rounded-full border border-slate-200"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-[1.1] tracking-tight">
            Hear what others have to say
          </h2>

          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#00a3ff] flex items-center justify-center text-[#00a3ff] hover:bg-[#00a3ff] hover:text-white transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#00a3ff] flex items-center justify-center text-[#00a3ff] hover:bg-[#00a3ff] hover:text-white transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content: Portrait + Quote Box */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          
          {/* Circular Portrait Area */}
          <div className="relative z-20 w-64 h-64 md:w-[340px] md:h-[340px] flex-shrink-0 lg:-mr-24">
            <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-xl bg-slate-50 relative">
              {testimonials.map((t, idx) => (
                <img 
                  key={idx}
                  src={t.image} 
                  alt={t.name} 
                  className={`absolute inset-0 w-full h-full object-cover scale-110 grayscale-[0.2] transition-opacity duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          {/* Quote Container: More compact pill shape */}
          <div className="relative z-10 w-full lg:max-w-4xl bg-white border border-slate-900 rounded-[60px] md:rounded-[120px] py-12 px-8 md:px-24 lg:pl-36 lg:pr-16 shadow-sm min-h-[300px] flex flex-col justify-center mt-[-60px] lg:mt-0 overflow-hidden">
            
            <div className="relative h-48 md:h-40 flex items-center">
              {testimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center ${idx === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className="relative">
                    {/* Opening Quotes Icon */}
                    <div className="absolute -left-8 md:-left-10 -top-2 text-[#005bc4]">
                       <svg width="30" height="22" viewBox="0 0 40 30" fill="currentColor">
                         <path d="M0 30V15C0 6.7 6.7 0 15 0H18V6H15C10 6 6 10 6 15V18H12V30H0ZM22 30V15C22 6.7 28.7 0 37 0H40V6H37C32 6 28 10 28 15V18H34V30H22Z" />
                       </svg>
                    </div>

                    <p className="text-base md:text-lg text-slate-700 leading-relaxed font-normal">
                      {t.quote}
                    </p>

                    {/* Closing Quotes Icon */}
                    <div className="absolute -right-6 -bottom-2 text-[#005bc4]">
                      <svg width="30" height="22" viewBox="0 0 40 30" fill="currentColor" className="rotate-180">
                         <path d="M0 30V15C0 6.7 6.7 0 15 0H18V6H15C10 6 6 10 6 15V18H12V30H0ZM22 30V15C22 6.7 28.7 0 37 0H40V6H37C32 6 28 10 28 15V18H34V30H22Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-[#005bc4] tracking-tight mb-0.5">
                      {t.name}
                    </h4>
                    <p className="text-slate-500 font-medium text-xs md:text-sm">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-4 h-1.5 bg-[#005bc4]' : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
