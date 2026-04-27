import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "How does Astra improve staining precision compared to manual methods?",
    answer: "Astra utilizes advanced micro-fluidics and sensor-driven feedback loops to ensure exact reagent volumes and incubation times, eliminating the variability inherent in manual tissue processing."
  },
  {
    id: "02",
    question: "Is the Astra platform compatible with existing Laboratory Information Systems (LIS)?",
    answer: "Yes, Astra is built on an open API architecture, allowing for seamless bi-directional integration with most major LIS providers for automated reporting and slide tracking."
  },
  {
    id: "03",
    question: "What types of tissue samples are supported by the precision staining module?",
    answer: "Our system is optimized for a wide range of human and animal tissues, including formal-fixed paraffin-embedded (FFPE) blocks and frozen sections across various diagnostic categories."
  },
  {
    id: "04",
    question: "How does the AI assist pathologists in the diagnostic workflow?",
    answer: "The AI core pre-screens slides to highlight areas of interest, potential anomalies, and provides quantitative scoring for specific biomarkers, significantly reducing review time."
  },
  {
    id: "05",
    question: "What are the available deployment options (Cloud vs On-premise)?",
    answer: "We offer flexible deployment models including secure cloud-native environments for remote access and fully air-gapped on-premise installations for maximum data sovereignty."
  },
  {
    id: "06",
    question: "How do you handle medical data security and patient privacy (HIPAA)?",
    answer: "Aindra adheres to global data protection standards, utilizing end-to-end encryption, anonymized metadata for AI processing, and full HIPAA/GDPR compliance across all systems."
  },
  {
    id: "07",
    question: "What is the typical turnaround time for a batch of 50 slides?",
    answer: "Astra can process a batch of 50 high-precision slides in approximately 45 minutes, representing a 60% increase in efficiency compared to traditional automated stainers."
  },
  {
    id: "08",
    question: "Do you provide specialized training and support for lab technicians?",
    answer: "Comprehensive on-site training, 24/7 technical support, and a dedicated customer success manager are included with every Astra installation to ensure smooth operations."
  },
  {
    id: "09",
    question: "How can we request a physical demo or a pilot study in our facility?",
    answer: "You can schedule a consultation with our clinical specialists through the 'Contact Us' button above. We offer tailored pilot programs for qualifying diagnostic centers."
  }
];

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-[1520px]">
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
            Frequently Asked Questions
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