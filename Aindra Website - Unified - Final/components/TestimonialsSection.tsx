
import React, { useEffect, useRef, useState } from 'react';
import drVaniRavikumarImage from '../assets/testimonials/dr-vani.jpg';
import drKristianOlsonImage from '../assets/testimonials/Dr.Kristian-Olson.png';
import drMalathiMImage from '../assets/testimonials/Dr.Malathi M.jpg';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Vani Ravikumar",
    role: "Director, RV Metropolis",
    quote: "With over 30 years of experience into Onco Pathology, Dr.Vani has been instrumental in leading the research and Validation activities at AIndra. She has been closely associated with the AIndra team with valuable feedbacks for CervAstra",
    image: drVaniRavikumarImage
  },
  {
    name: "Dr. Kristian Olson",
    role: "Director of the Consortium for Affordable Medical Technologies",
    quote: "Kristian Olson is the Director of the Consortium for Affordable Medical Technologies (CAMTech). He is both a Pediatrician and Internist and also serves as a Clinician Educator at the Massachusetts General Hospital and an Assistant Professor at Harvard Medical School. He has worked in Darfur, Indonesia, Cambodia, Ethiopia, Uganda, and India, is a serial innovator and one of the architects of the CAMTech Innovation platform. He completed an undergraduate degree in biology at the University of British Columbia, medical school at the Vanderbilt University School of Medicine and his residency training in the Combined Harvard Medicine and Pediatrics Program. He trained in the Masters of Public Health program at the University of Sydney as a US Fulbright Scholar and completed a Diploma in Tropical Medicine at the London School of Hygiene and Tropical Medicine in 2003. In 2009, he was named to the Scientific American Top 10 Honor Roll as an individual who has demonstrated leadership in applying new technologies and biomedical discoveries for the benefit of humanity.",
    image: drKristianOlsonImage
  },
  {
    name: "Dr. Malathi M",
    role: "Associate Proffessor, Cytology, Kidwai Hospital",
    quote: "Dr. Malathi has a rich experience of over 40 years in the field of Oncopathology and is the Principal Investigator for Aindra's Clinical Validations. She has rendered immense support and feedback for Aindra's Cervical Cancer screening tool CervAstra.",
    image: drMalathiMImage
  }
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const activeTestimonial = testimonials[activeIndex];

  const changeTestimonial = (targetIndex: number) => {
    if (isTransitioning || targetIndex === activeIndex) return;
    setIsTransitioning(true);
    transitionTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex(targetIndex);
      setIsTransitioning(false);
    }, 220);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    changeTestimonial(prevIndex);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      changeTestimonial(nextIndex);
    }, 6000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [activeIndex, isTransitioning]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) window.clearTimeout(transitionTimeoutRef.current);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

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

          <div className="hidden items-center space-x-3 mt-4 md:mt-0">
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
          
          {/* Circular Portrait Placeholder Area */}
          <div className="relative z-20 w-64 h-64 md:w-[340px] md:h-[340px] flex-shrink-0 lg:-mr-24">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className={`w-full h-full rounded-full border-[8px] border-white shadow-xl object-cover bg-slate-100 transition-all duration-300 ease-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            />
          </div>

          {/* Quote Container: More compact pill shape */}
          <div className="relative z-10 w-full lg:max-w-4xl bg-white border border-slate-900 rounded-[60px] md:rounded-[120px] py-12 px-8 md:px-24 lg:pl-36 lg:pr-16 shadow-sm min-h-[300px] flex flex-col justify-center mt-[-60px] lg:mt-0 overflow-hidden">
            
            <div className={`relative transition-all duration-300 ease-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <div className="relative">
                {/* Opening Quotes Icon */}
                <div className="absolute -left-8 md:-left-10 -top-2 text-[#005bc4]">
                  <svg width="30" height="22" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 30V15C0 6.7 6.7 0 15 0H18V6H15C10 6 6 10 6 15V18H12V30H0ZM22 30V15C22 6.7 28.7 0 37 0H40V6H37C32 6 28 10 28 15V18H34V30H22Z" />
                  </svg>
                </div>

                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-normal">
                  {activeTestimonial.quote}
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
                  {activeTestimonial.name}
                </h4>
                <p className="text-slate-500 font-medium text-xs md:text-sm">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeTestimonial(idx)}
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
