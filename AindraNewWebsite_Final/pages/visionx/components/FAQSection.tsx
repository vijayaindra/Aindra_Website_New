import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What is the maximum resolution of the VisionX whole slide scanner?",
    answer: "VisionX offers sub-micron resolution, typically 0.25 to 0.5 µm/pixel. This ensures that even the most minute cellular details are captured with diagnostic-grade clarity, matching or exceeding traditional high-power microscopy."
  },
  {
    id: "02",
    question: "How does the scanner handle focusing on uneven or thick tissue samples?",
    answer: "The system utilizes a high-speed, predictive autofocus mechanism that maps multiple focal points across the tissue before scanning. This ensures consistent sharpness even for specimens with varying thickness or slight topography changes."
  },
  {
    id: "03",
    question: "What slide formats and sizes are compatible with the VisionX system?",
    answer: "VisionX is optimized for standard 25 x 75 mm (1 x 3 inch) glass slides. It handles a wide range of preparations, including H&E stained histology, cytology smears, and immunohistochemistry (IHC) slides."
  },
  {
    id: "04",
    question: "Can the scanner operate in a high-volume pathology laboratory?",
    answer: "Yes. While the compact VisionX series is ideal for on-demand and remote settings, our architecture is designed for reliability and high throughput. Our fully automated systems can run 24/7 to meet the demands of busy diagnostic centers."
  },
  {
    id: "05",
    question: "What image file formats are used for storage and digital pathology sharing?",
    answer: "The scanner generates industry-standard Whole Slide Image (WSI) files, including DICOM-compliant formats and common open formats. This allows for seamless integration with third-party LIS and PACS systems."
  },
  {
    id: "06",
    question: "Does the system provide tools for digital collaboration and remote consultation?",
    answer: "Absolutely. VisionX is integrated with our cloud-native platform, allowing pathologists to securely view, annotate, and share digitized slides for peer review or second opinions from any authorized device globally."
  },
  {
    id: "07",
    question: "How does the scanning speed compare to traditional manual microscopy review?",
    answer: "Digitization significantly speeds up the workflow. A typical histology slide can be scanned in under 2 minutes, and once digitized, pathologists can navigate the entire tissue area instantly without manual stage adjustments."
  },
  {
    id: "08",
    question: "Is the VisionX software compliant with medical data privacy regulations like HIPAA?",
    answer: "Yes, Aindra's software ecosystem is built with security as a priority. We are fully HIPAA and GDPR compliant, utilizing end-to-end encryption and robust access controls to protect sensitive patient diagnostic data."
  },
  {
    id: "09",
    question: "What kind of maintenance and technical support is provided for the scanner?",
    answer: "We offer comprehensive support packages that include remote diagnostic monitoring, regular preventive maintenance, and rapid on-site technical assistance to ensure your lab's digital workflow remains uninterrupted."
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