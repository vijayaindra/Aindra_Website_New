
import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "How does the Aindra Telepathology platform facilitate remote diagnostics?",
    answer: "Our platform provides a secure, web-based interface that allows pathologists to view high-resolution Whole Slide Images (WSI) from any location. It features specialized tools for annotation, measurement, and reporting, effectively bridging the distance between the clinic and the expert."
  },
  {
    id: "02",
    question: "What image formats and digital scanners are compatible with the system?",
    answer: "We support all major vendor-neutral formats (SVS, NDPI, TIFF, DICOM, etc.). The platform is designed to be scanner-agnostic, ensuring seamless integration with your existing digital pathology hardware regardless of the manufacturer."
  },
  {
    id: "03",
    question: "Can multiple consultants collaborate on a single case in real-time?",
    answer: "Yes, the platform includes a 'Live Consultation' mode where multiple specialists can simultaneously view, pan, zoom, and discuss a slide. Changes and annotations made by one user are visible to others instantly, facilitating rapid consensus."
  },
  {
    id: "04",
    question: "How does the platform handle massive file sizes for digital slides?",
    answer: "Our proprietary multi-resolution tile-streaming technology ensures that only the necessary portion of a slide is loaded at the required magnification. This enables smooth navigation even on standard internet connections without the need to download multi-gigabyte files."
  },
  {
    id: "05",
    question: "Is the platform compliant with international data security standards?",
    answer: "Security is our top priority. We are fully compliant with HIPAA, GDPR, and ISO 27001 standards. Data is protected with end-to-end AES-256 encryption, and we provide granular access controls to ensure patient confidentiality."
  },
  {
    id: "06",
    question: "Does the Telepathology platform integrate with AI-assisted screening tools?",
    answer: "Absolutely. Our platform serves as an orchestrator for AI models. It can automatically run pre-screening algorithms to highlight regions of interest or calculate mitotic counts, presenting these insights directly within the viewer to aid the remote pathologist."
  },
  {
    id: "07",
    question: "How can a lab manage second opinion requests from external experts?",
    answer: "The system features a dedicated 'Referral Portal.' Labs can easily assign cases to external consultants with a few clicks. The expert receives a secure link, reviews the case, and submits their report directly back into the primary laboratory workflow."
  },
  {
    id: "08",
    question: "What are the minimal hardware requirements for a pathologist to use the platform?",
    answer: "Because it is cloud-native, pathologists only need a modern web browser and a high-quality, calibrated monitor. We recommend a minimum of 10Mbps bandwidth for optimal performance while navigating high-magnification fields."
  },
  {
    id: "09",
    question: "How does the platform help in managing pathology workloads across multiple sites?",
    answer: "The platform offers a centralized 'Global Worklist' that allows pathology networks to distribute cases based on sub-specialty expertise or current site load, significantly reducing turnaround times and optimizing resource utilization."
  }
];

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section className="w-full bg-white py-14 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto">
        <div className="w-full md:w-[120px] lg:w-[160px] shrink-0 pt-2 mr-0 md:mr-6 lg:mr-10 mb-6 md:mb-0">
          <div className="flex flex-col items-start w-full">
            <span className="text-[12px] font-bold tracking-[0.08em] uppercase mb-1.5 ml-0.5 text-[#00AEEF]">
              FAQ
            </span>
            <div className="relative w-full flex items-center pr-1">
              <div className="flex-grow h-[1px] bg-gray-200"></div>
              <div className="w-[8px] h-[8px] border border-gray-300 rounded-full bg-white -ml-[4px]"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] mb-16">
            Telepathology Platform FAQs
          </h2>
          <div className="border-b border-gray-200">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="group border-t border-gray-200 transition-colors hover:bg-gray-50/50"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full py-8 flex items-center text-left focus:outline-none"
                  >
                    <span className="w-16 md:w-24 text-[16px] md:text-[18px] font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                      {faq.id}
                    </span>
                    <span className={`flex-1 text-[16px] md:text-[18px] font-semibold pr-8 transition-colors ${isOpen ? 'text-[#00AEEF]' : 'text-[#111827]'}`}>
                      {faq.question}
                    </span>
                    <div className="relative w-7 h-7 shrink-0 transition-all duration-300">
                      {isOpen ? (
                        <div className="bg-[#00AEEF] w-full h-full rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      ) : (
                        <div className="bg-gray-200 w-full h-full rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-80 pb-10' : 'max-h-0'
                    }`}
                  >
                    <div className="flex">
                      <div className="w-16 md:w-24 shrink-0"></div>
                      <p className="flex-1 text-[15px] md:text-[16px] leading-relaxed text-gray-500 max-w-[780px] animate-in fade-in slide-in-from-top-2 duration-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
