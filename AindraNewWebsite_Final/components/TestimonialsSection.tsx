
import React, { useEffect, useRef, useState } from 'react';
import drVaniRavikumarImage from '../assets/testimonials/dr-vani.jpg';
import drKristianOlsonImage from '../assets/testimonials/Dr.Kristian-Olson.png';
import drMalathiMImage from '../assets/testimonials/Dr.Malathi M.jpg';
import { sectionContainer, sectionShell } from './layout';
import { SectionEyebrow } from './SectionEyebrow';

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
  const intervalRef = useRef<number | null>(null);
  const activeTestimonial = testimonials[activeIndex];

  const changeTestimonial = (targetIndex: number) => {
    if (targetIndex === activeIndex) return;
    setActiveIndex(targetIndex);
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
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className={`relative pt-16 md:pt-20 lg:pt-24 pb-12 ${sectionShell} bg-white overflow-hidden`}>
      <div className={sectionContainer}>
        
        {/* Header Area */}
        <div className="mb-10 md:mb-12 grid grid-cols-12 items-center gap-4 md:gap-8">
          <div className="col-span-12 lg:col-span-3 pt-1">
            <SectionEyebrow label="Testimonials" />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <h2 className="px-3 text-center lg:px-0 text-2xl sm:text-3xl md:text-[46px] lg:text-[52px] font-medium text-slate-900 leading-[1.1] tracking-tight">
              Hear what others have to say
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-3 mt-4 lg:mt-0 flex items-center justify-center lg:justify-end space-x-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#00a3ff] flex items-center justify-center text-[#00a3ff] hover:bg-[#00a3ff]/10 active:bg-[#00a3ff] active:text-white transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#00a3ff] flex items-center justify-center text-[#00a3ff] hover:bg-[#00a3ff]/10 active:bg-[#00a3ff] active:text-white transition-all active:scale-95"
              aria-label="Next testimonial"
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
          <div className="relative z-20 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[320px] lg:h-[320px] flex-shrink-0 lg:-mr-14">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-full h-full rounded-full border-[8px] border-white shadow-xl object-cover bg-slate-100"
            />
          </div>

          {/* Quote Container: More compact pill shape */}
          <div className="relative z-10 w-full lg:max-w-4xl bg-white border border-slate-900 rounded-[32px] sm:rounded-[48px] md:rounded-[64px] lg:rounded-[96px] py-8 sm:py-10 md:py-12 px-5 sm:px-8 md:px-12 lg:pl-28 lg:pr-14 shadow-sm min-h-[360px] sm:min-h-[400px] md:h-[420px] flex flex-col justify-center mt-[-40px] sm:mt-[-56px] lg:mt-0 overflow-visible md:overflow-hidden">
            
            <div className="relative">
              <div className="relative pl-0 sm:pl-0 pr-0 sm:pr-0">
                {/* Opening Quotes Icon */}
                <div className="hidden md:block absolute md:-left-8 md:-top-2 text-[#005bc4]">
                  <svg className="w-6 h-5 sm:w-8 sm:h-6" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 30V15C0 6.7 6.7 0 15 0H18V6H15C10 6 6 10 6 15V18H12V30H0ZM22 30V15C22 6.7 28.7 0 37 0H40V6H37C32 6 28 10 28 15V18H34V30H22Z" />
                  </svg>
                </div>

                <div className="max-h-none md:max-h-[230px] overflow-visible md:overflow-y-auto pr-2">
                  <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
                    {activeTestimonial.quote}
                  </p>
                </div>

                {/* Closing Quotes Icon */}
                <div className="hidden md:block absolute md:-right-3 -bottom-2 text-[#005bc4]">
                  <svg className="w-6 h-5 sm:w-8 sm:h-6 rotate-180" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 30V15C0 6.7 6.7 0 15 0H18V6H15C10 6 6 10 6 15V18H12V30H0ZM22 30V15C22 6.7 28.7 0 37 0H40V6H37C32 6 28 10 28 15V18H34V30H22Z" />
                  </svg>
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-8">
                <h4 className="text-base sm:text-lg font-bold text-[#005bc4] tracking-tight mb-0.5">
                  {activeTestimonial.name}
                </h4>
                <p className="text-slate-500 font-medium text-xs md:text-sm">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="mt-6 md:mt-0 flex items-center justify-center space-x-2 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2">
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
