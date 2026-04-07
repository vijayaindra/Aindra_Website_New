
import React from 'react';

const timelineEvents = [
  {
    subYear: "12",
    image: "https://images.unsplash.com/photo-1532187875605-2fe35851142b?auto=format&fit=crop&q=80&w=1200",
    caption: "AINDRA STARTUP LABS",
    description: "Aindra started in 2012 with a vision to revolutionize cancer diagnostics using computer vision and AI. We've grown from a small group of researchers into a global leader."
  },
  {
    subYear: "13",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=1200",
    caption: "CORE TEAM EXPANSION",
    description: "In 2013, we onboarded our first wave of expert histopathologists and software engineers, establishing the interdisciplinary foundation of Aindra Systems."
  },
  {
    subYear: "14",
    image: "https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1200",
    caption: "PROTOTYPE PHASE",
    description: "By 2014, our first functional prototype for automated staining was developed, marking a significant milestone in proving our core engineering concept."
  },
  {
    subYear: "15",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    caption: "CLINICAL VALIDATION",
    description: "2015 saw the beginning of intensive clinical trials across major hospitals, ensuring our precision staining met the rigorous standards of modern pathology."
  },
  {
    subYear: "16",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    caption: "PATENT ACQUISITION",
    description: "Aindra secured pivotal design and utility patents in 2016, protecting our unique micro-fluidic staining technology and AI diagnostic algorithms."
  },
  {
    subYear: "17",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200",
    caption: "AI CORE V1.0",
    description: "In 2017, we officially launched our AI core, allowing for real-time tissue analysis and automated cell identification with over 95% accuracy."
  },
  {
    subYear: "18",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    caption: "GLOBAL EXPANSION",
    description: "Expanding beyond our initial markets, 2018 saw Aindra's first international installations, bringing Astra to diagnostic centers across Europe and Asia."
  },
  {
    subYear: "19",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200",
    caption: "STRATEGIC ALLIANCES",
    description: "In 2019, we formed strategic partnerships with global pharmaceutical leaders to integrate our staining precision into their drug development pipelines."
  },
  {
    subYear: "20",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
    caption: "TELE-PATHOLOGY SHIFT",
    description: "Amidst global challenges in 2020, we accelerated our cloud diagnostic modules, enabling pathologists to work remotely without compromising on precision."
  },
  {
    subYear: "21",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
    caption: "ASTRA GEN-2 LAUNCH",
    description: "2021 marked the release of the second-generation Astra platform, featuring a more compact footprint and 40% faster processing times."
  },
  {
    subYear: "22",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200",
    caption: "REAGENT OPTIMIZATION",
    description: "Our 2022 software update introduced smart reagent management, reducing lab waste by 30% through predictive consumption AI algorithms."
  },
  {
    subYear: "23",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=1200",
    caption: "SMART LAB AUTOMATION",
    description: "In 2023, Aindra introduced fully robotic slide handling, creating a zero-touch workflow from tissue preparation to final digital analysis."
  },
  {
    subYear: "24",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    caption: "PREDICTIVE ANALYTICS",
    description: "Leveraging a decade of data, 2024 saw the launch of our predictive diagnostic module, helping clinicians identify risk factors months in advance."
  },
  {
    subYear: "25",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
    caption: "THE FUTURE OF MEDICINE",
    description: "Looking towards 2025, Aindra is setting the standard for the fully autonomous diagnostic laboratory, making precision medicine accessible to every corner of the world."
  }
];

const JourneySection: React.FC = () => {
  return (
    <section className="w-full bg-white relative">
      <div className="w-full">
        {/* Sticky Header Section */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="flex flex-col md:flex-row items-start pt-12 pb-8 w-full">
            <div className="w-full md:w-[25%] lg:w-[20%] shrink-0 mb-8 md:mb-0">
              <div className="flex flex-col w-full">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase mb-2 pl-6 md:pl-10">
                  OUR JOURNEY
                </span>
                <div className="flex items-center w-full">
                  <div className="flex-1 h-[1px] bg-gray-200"></div>
                  <div className="w-[10px] h-[10px] rounded-full border border-gray-300 bg-white mr-2"></div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 px-6 md:px-12 lg:pr-24 md:pl-8">
              <h2 className="text-[22px] md:text-[30px] lg:text-[38px] font-bold text-[#111827] leading-[1.2] tracking-tight max-w-[900px]">
                Our path from a small lab to a global leader in medical AI diagnostics.
              </h2>
            </div>
          </div>
        </div>

        {/* Timeline Content - Snap Container */}
        <div className="w-full relative snap-y snap-proximity">
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* Left Sidebar Column - Digit "20" - Sticky Anchor */}
            <div className="w-full md:w-[25%] lg:w-[20%] shrink-0 pl-6 md:pl-10">
              <div className="sticky top-[160px] pt-10">
                <span className="text-[80px] md:text-[110px] lg:text-[150px] font-light leading-[0.85] text-[#60A5FA] tracking-tighter select-none">
                  20
                </span>
                <div className="mt-4 h-[2px] w-12 bg-blue-100 rounded-full"></div>
              </div>
            </div>

            {/* Scrolling Content Area */}
            <div className="flex-1 flex flex-col px-6 md:px-0">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.subYear} 
                  // scroll-mt-[160px] matches the sticky '20' top offset
                  // snap-start ensures that as the user scrolls, the entry locks into position
                  className={`flex flex-col md:flex-row snap-start scroll-mt-[160px] ${index !== 0 ? 'mt-40 md:mt-64' : 'pt-10'}`}
                >
                  {/* Digit "XX" Container - Vertically level with sticky "20" */}
                  <div className="md:pl-8 shrink-0">
                    <span className="text-[80px] md:text-[110px] lg:text-[150px] font-light leading-[0.85] text-[#60A5FA] tracking-tighter select-none block">
                      {event.subYear}
                    </span>
                  </div>
                  
                  {/* Content Container */}
                  <div className="flex-1 md:pl-12 lg:pl-16 mt-8 md:mt-2">
                    <div className="max-w-[580px] mb-8 group">
                      <div className="relative w-full aspect-[16/9] bg-[#EBF5FB] rounded-sm overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-[1.01]">
                        <img 
                          src={event.image} 
                          alt={event.caption} 
                          className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                        />
                      </div>
                      <p className="mt-3 text-[11px] text-gray-400 font-bold uppercase tracking-widest">{event.caption}</p>
                    </div>

                    <p className="text-[14px] md:text-[15px] text-gray-500 leading-[1.8] max-w-[500px] font-normal pb-32 pr-6 border-b border-gray-50 last:border-0">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Spacer for bottom visibility */}
              <div className="h-[50vh]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
