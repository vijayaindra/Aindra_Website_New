import React, { useEffect, useRef, useState } from 'react';

interface JobOpening {
  id: number;
  title: string;
  location: string;
}

const jobs: JobOpening[] = [
  { id: 1, title: 'Developer', location: 'Bangalore, Karnataka - Full time' },
  { id: 2, title: 'Electronics Engineer', location: 'Bangalore, Karnataka - Full time' },
  { id: 3, title: 'Mechatronics Engineer', location: 'Bangalore, Karnataka - Full time' },
  { id: 4, title: 'Mechanical Engineer', location: 'Bangalore, Karnataka - Full time' },
];

const BenefitItem = ({ title, description, circleOnLeft = true }: { title: string, description: string, circleOnLeft?: boolean }) => (
  <div className={`flex items-center gap-8 ${circleOnLeft ? 'flex-row' : 'flex-row-reverse'}`}>
    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#EBF0F3] shrink-0" />
    <div className="max-w-md">
      <h3 className="text-[24px] font-semibold text-gray-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-[17px] leading-relaxed text-gray-600 font-normal">
        {description}
      </p>
    </div>
  </div>
);

const JobItem: React.FC<{ job: JobOpening }> = ({ job }) => (
  <div className="group border-t border-gray-100 py-8 flex items-center justify-between transition-colors hover:bg-gray-50/50">
    <div className="flex flex-col">
      <h3 className="text-[22px] md:text-[24px] font-semibold text-gray-900 mb-1.5">{job.title}</h3>
      <p className="text-[14px] text-gray-400 font-normal">{job.location}</p>
    </div>
    <button className="w-10 h-10 rounded-full bg-[#00AEEF] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110 active:scale-95">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
);

const FormField = ({ label, children, required = true, sublabel = "" }: { label: string, children?: React.ReactNode, required?: boolean, sublabel?: string }) => (
  <div className="mb-6">
    <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-2">
      {label} {required && <span className="text-red-500">*</span>}
      {sublabel && <span className="ml-2 text-gray-400 lowercase font-normal">{sublabel}</span>}
    </label>
    {children}
  </div>
);

const ApplicationForm = () => {
  return (
    <div className="mt-20 bg-[#f1f4f6] rounded-[32px] p-8 md:p-16 border border-gray-100 w-full">
      <div className="text-center mb-16">
        <h2 className="text-[32px] md:text-[42px] font-bold text-gray-900 mb-4 tracking-tight">Interested in Joining Aindra?</h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Whether there's an opening or you want to be considered for future roles, use the form below to share your interest with us.
        </p>
      </div>

      <form className="max-w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <FormField label="Your Full Name">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
              <input type="text" placeholder="Last" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </div>
          </FormField>
          
          <div className="md:col-span-2">
            <FormField label="Email">
              <input type="email" placeholder="email@example.com" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </FormField>
          </div>

          <div className="md:col-span-2">
            <FormField label="Phone Number">
              <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </FormField>
          </div>

          <FormField label="Location">
            <input type="text" placeholder="City, Country" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <FormField label="Gender">
            <input type="text" placeholder="Preferred Gender" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Linkdln Profile">
              <input type="url" placeholder="https://linkedin.com/in/username" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
            </FormField>
          </div>

          <div className="md:col-span-2">
            <FormField label="Position Applying For">
              <div className="relative">
                <select className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm appearance-none" defaultValue="">
                  <option value="" disabled>Select a position</option>
                  <option value="Developer">Developer</option>
                  <option value="Electronics Engineer">Electronics Engineer</option>
                  <option value="Mechatronics Engineer">Mechatronics Engineer</option>
                  <option value="Mechanical Engineer">Mechanical Engineer</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </FormField>
          </div>

          <FormField label="Years of Experience">
            <input type="text" placeholder="e.g. 5 years" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <FormField label="Available From">
            <input type="text" placeholder="Date or Notice Period" className="w-full px-5 py-3 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm" />
          </FormField>

          <FormField label="CV" sublabel="Accepted file types: pdf, doc, docx, txt, rtf">
            <div className="flex items-center gap-4">
              <button type="button" className="px-6 py-2 bg-white rounded-full text-[11px] font-bold uppercase shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">Choose File</button>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">Max 10MB</span>
            </div>
          </FormField>

          <FormField label="Cover Letter" sublabel="Accepted file types: pdf, doc, docx, txt, rtf">
            <div className="flex items-center gap-4">
              <button type="button" className="px-6 py-2 bg-white rounded-full text-[11px] font-bold uppercase shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">Choose File</button>
              <span className="text-[11px] text-gray-400 uppercase tracking-wider">Max 10MB</span>
            </div>
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Tell us why you're a great fit">
              <textarea placeholder="Share your motivation, relevant skills, or career goals" rows={6} className="w-full px-6 py-5 rounded-[24px] bg-white border-none shadow-sm focus:ring-2 focus:ring-[#00AEEF] outline-none text-sm resize-none"></textarea>
            </FormField>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button type="submit" className="px-12 py-4 bg-[#00AEEF] text-white text-[18px] font-bold rounded-full shadow-lg shadow-blue-500/20 hover:bg-[#0096ce] transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider">
            Sumbit Application
          </button>
        </div>
      </form>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const transitionPoint = 0.4; 
  
  const item1EnterProgress = Math.max(0, Math.min(1, scrollProgress / 0.1));
  const item1ExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.15) / 0.1));
  const item1Opacity = item1EnterProgress * (1 - item1ExitProgress);
  const item1TranslateY = (40 * (1 - item1EnterProgress)) - (100 * item1ExitProgress);

  const item2EnterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.05) / 0.1));
  const item2ExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.18) / 0.1));
  const item2Opacity = item2EnterProgress * (1 - item2ExitProgress);
  const item2TranslateY = (80 * (1 - item2EnterProgress)) - (200 * item2ExitProgress);

  const item3EnterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.22) / 0.1));
  const item3ExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.35) / 0.1));
  const item3Opacity = item3EnterProgress * (1 - item3ExitProgress);
  const item3TranslateY = (40 * (1 - item3EnterProgress)) - (100 * item3ExitProgress);

  const item4EnterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.25) / 0.1));
  const item4ExitProgress = Math.max(0, Math.min(1, (scrollProgress - 0.38) / 0.1));
  const item4Opacity = item4EnterProgress * (1 - item4ExitProgress);
  const item4TranslateY = (80 * (1 - item4EnterProgress)) - (200 * item4ExitProgress);

  const positionsEnterProgress = Math.max(0, Math.min(1, (scrollProgress - 0.38) * 10));
  const positionsOpacity = positionsEnterProgress;
  const positionsTranslateY = 60 * (1 - positionsEnterProgress);

  const stage1Opacity = Math.max(0, Math.min(1, (transitionPoint - scrollProgress) * 12));

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '600vh' }}>
      <section className="sticky top-0 w-full min-h-screen bg-white flex flex-col">
        
        <div className="relative z-50 bg-white px-4 md:px-8 pt-6 pb-4">
          <div className="flex flex-col md:flex-row items-start w-full">
            <div className="w-[120px] md:w-[160px] shrink-0 pt-1 mr-6 md:mr-10">
              <div className="flex flex-col items-start w-full">
                <div className="h-4 relative w-full overflow-hidden">
                   <span className={`absolute inset-0 text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-700 ease-in-out ${scrollProgress < transitionPoint ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ color: '#00AEEF' }}>
                    BENEFITS
                  </span>
                  <span className={`absolute inset-0 text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-700 ease-in-out ${scrollProgress >= transitionPoint ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} style={{ color: '#00AEEF' }}>
                    POSITIONS
                  </span>
                </div>
                <div className="relative w-full flex items-center pr-1 mt-1">
                  <div className="flex-grow h-[1px] bg-gray-200"></div>
                  <div className="w-[8px] h-[8px] border border-gray-300 rounded-full bg-white -ml-[4px]"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-0 relative overflow-hidden h-24 md:h-32">
              <h2 className={`absolute inset-0 text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px] transition-all duration-700 ${scrollProgress < transitionPoint ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                Our team values focus, dedication, innovation and the power of what can happen when they converge.
              </h2>
              <h2 className={`absolute inset-0 text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px] transition-all duration-700 ${scrollProgress >= transitionPoint ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                Current openings at Aindra Systems
              </h2>
            </div>
          </div>
        </div>

        {/* Benefits Container (Fades out) */}
        <div className="flex-grow relative z-10"
          style={{ 
            opacity: stage1Opacity,
            visibility: stage1Opacity < 0.01 ? 'hidden' : 'visible',
            pointerEvents: stage1Opacity > 0.5 ? 'auto' : 'none'
          }}
        >
          <div className="h-full flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-12 relative">
            <div className="absolute inset-0 flex flex-col pt-12 gap-24 md:pl-[200px] pointer-events-none">
              <div 
                style={{ 
                  opacity: item1Opacity,
                  transform: `translateY(${item1TranslateY}px)`,
                  visibility: item1Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-300 ease-out pointer-events-auto"
              >
                <BenefitItem 
                  title="Health and wellness" 
                  description="We care about you and your health. That's why we offer a comprehensive benefits program that you can customize to your life." 
                  circleOnLeft={true}
                />
              </div>

              <div 
                style={{ 
                  opacity: item2Opacity,
                  transform: `translateY(${item2TranslateY}px)`,
                  alignSelf: 'flex-end',
                  visibility: item2Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-300 ease-out md:pr-24 pointer-events-auto"
              >
                <BenefitItem 
                  title="Work-life balance" 
                  description="When we're at our best, everyone benefits, and so does our work. We offer flexible work schedules that adjust to your life." 
                  circleOnLeft={false}
                />
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col pt-12 gap-24 md:pl-[200px] pointer-events-none">
              <div 
                style={{ 
                  opacity: item3Opacity,
                  transform: `translateY(${item3TranslateY}px)`,
                  visibility: item3Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-300 ease-out pointer-events-auto"
              >
                <BenefitItem 
                  title="Paid time-off" 
                  description="We offer a generous PTO policy that promotes rest and the happiness of our team." 
                  circleOnLeft={true}
                />
              </div>

              <div 
                style={{ 
                  opacity: item4Opacity,
                  transform: `translateY(${item4TranslateY}px)`,
                  alignSelf: 'flex-end',
                  visibility: item4Opacity < 0.01 ? 'hidden' : 'visible'
                }}
                className="transition-all duration-300 ease-out md:pr-24 pointer-events-auto"
              >
                <BenefitItem 
                  title="Educational assistance" 
                  description="We want to grow with you. Aindra offers reimbursement for educational development." 
                  circleOnLeft={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Positions Container (Fades in and scrolls naturally) */}
        <div 
          className="w-full max-w-[1440px] mx-auto px-4 md:px-8 pb-32 relative z-20"
          style={{ 
            opacity: positionsOpacity,
            visibility: positionsOpacity < 0.01 ? 'hidden' : 'visible',
            pointerEvents: positionsOpacity > 0.8 ? 'auto' : 'none',
            transform: `translateY(${positionsTranslateY}px)`
          }}
        >
          {/* Jobs List - Still indented to match design */}
          <div className="flex mb-12">
            <div className="hidden md:block w-[120px] md:w-[160px] mr-6 md:mr-10 shrink-0"></div>
            <div className="flex-1 pr-4 md:pr-12">
              <div className="flex flex-col border-b border-gray-100 max-w-4xl">
                {jobs.map((job) => (
                  <JobItem key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Application Form - Full Width Stretched */}
          <div className="w-full">
            <ApplicationForm />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-40"></div>
      </section>
    </div>
  );
};

export default BenefitsSection;