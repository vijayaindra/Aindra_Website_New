import React from 'react';
import { sectionContainer, sectionShell } from '../../../components/layout';
import imageDesign from '../../../assets/Why_choose_us/image_design.png';
import astraImage from '../../../assets/ProductImages/After.png';
import clustrImage from '../../../assets/ProductImages/ClustrHomePage.png';
import cervAstraImage from '../../../assets/ProductImages/CervAstra.png';
import lungAstraImage from '../../../assets/ProductImages/LungAstra.png';
import proAstraImage from '../../../assets/ProductImages/ProAstra.png';
import { SectionEyebrow } from '../../../components/SectionEyebrow';

const journeyImages = [
  imageDesign,
  astraImage,
  clustrImage,
  cervAstraImage,
  lungAstraImage,
  proAstraImage,
];

const timelineEvents = [
  {
    subYear: '12',
    caption: 'AINDRA STARTUP LABS',
    description:
      "Aindra started in 2012 with a vision to revolutionize cancer diagnostics using computer vision and AI. We've grown from a small group of researchers into a global leader.",
  },
  {
    subYear: '13',
    caption: 'CORE TEAM EXPANSION',
    description:
      'In 2013, we onboarded our first wave of expert histopathologists and software engineers, establishing the interdisciplinary foundation of Aindra Systems.',
  },
  {
    subYear: '14',
    caption: 'PROTOTYPE PHASE',
    description:
      'By 2014, our first functional prototype for automated staining was developed, marking a significant milestone in proving our core engineering concept.',
  },
  {
    subYear: '15',
    caption: 'CLINICAL VALIDATION',
    description:
      '2015 saw the beginning of intensive clinical trials across major hospitals, ensuring our precision staining met the rigorous standards of modern pathology.',
  },
  {
    subYear: '16',
    caption: 'PATENT ACQUISITION',
    description:
      'Aindra secured pivotal design and utility patents in 2016, protecting our unique micro-fluidic staining technology and AI diagnostic algorithms.',
  },
  {
    subYear: '17',
    caption: 'AI CORE V1.0',
    description:
      'In 2017, we officially launched our AI core, allowing for real-time tissue analysis and automated cell identification with over 95% accuracy.',
  },
  {
    subYear: '18',
    caption: 'GLOBAL EXPANSION',
    description:
      "Expanding beyond our initial markets, 2018 saw Aindra's first international installations, bringing Astra to diagnostic centers across Europe and Asia.",
  },
  {
    subYear: '19',
    caption: 'STRATEGIC ALLIANCES',
    description:
      'In 2019, we formed strategic partnerships with global pharmaceutical leaders to integrate our staining precision into their drug development pipelines.',
  },
  {
    subYear: '20',
    caption: 'TELE-PATHOLOGY SHIFT',
    description:
      'Amidst global challenges in 2020, we accelerated our cloud diagnostic modules, enabling pathologists to work remotely without compromising on precision.',
  },
  {
    subYear: '21',
    caption: 'ASTRA GEN-2 LAUNCH',
    description:
      '2021 marked the release of the second-generation Astra platform, featuring a more compact footprint and 40% faster processing times.',
  },
  {
    subYear: '22',
    caption: 'REAGENT OPTIMIZATION',
    description:
      'Our 2022 software update introduced smart reagent management, reducing lab waste by 30% through predictive consumption AI algorithms.',
  },
  {
    subYear: '23',
    caption: 'SMART LAB AUTOMATION',
    description:
      'In 2023, Aindra introduced fully robotic slide handling, creating a zero-touch workflow from tissue preparation to final digital analysis.',
  },
  {
    subYear: '24',
    caption: 'PREDICTIVE ANALYTICS',
    description:
      'Leveraging a decade of data, 2024 saw the launch of our predictive diagnostic module, helping clinicians identify risk factors months in advance.',
  },
  {
    subYear: '25',
    caption: 'THE FUTURE OF MEDICINE',
    description:
      'Looking towards 2025, Aindra is setting the standard for the fully autonomous diagnostic laboratory, making precision medicine accessible to every corner of the world.',
  },
];

const JourneySection: React.FC = () => {
  return (
    <section className={`${sectionShell} w-full bg-white py-16 md:py-20 lg:py-24`}>
      <div className={sectionContainer}>
        <div className="flex flex-col md:flex-row items-start mb-14 md:mb-16">
          <div className="w-[120px] md:w-[160px] shrink-0 mr-6 md:mr-10 mb-8 md:mb-0">
            <SectionEyebrow label="Our Journey" />
          </div>

          <div className="flex-1 md:pl-10">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold text-[#111827] leading-[1.2] tracking-[-0.015em] max-w-[1000px]">
              Our path from a small lab to a global leader in medical AI diagnostics.
            </h2>
          </div>
        </div>

        <div className="flex gap-0">
          <div className="hidden md:block w-[90px] md:w-[120px] mr-2 md:mr-4 shrink-0">
            <div className="sticky top-28">
              <span className="block text-[80px] lg:text-[110px] font-light leading-[0.95] text-[#60A5FA] tracking-normal tabular-nums select-none">20</span>
            </div>
          </div>

          <div className="flex-1 space-y-12 md:space-y-14">
            {timelineEvents.map((event, index) => (
              <article key={event.subYear} className="grid grid-cols-[112px_1fr] lg:grid-cols-[128px_1fr] items-start gap-3 lg:gap-4 pb-10 border-b border-gray-100 last:border-b-0 last:pb-0">
                <span className="text-[44px] sm:text-[72px] lg:text-[110px] font-light leading-[0.95] text-[#60A5FA] tracking-normal tabular-nums text-right select-none whitespace-nowrap">
                  <span className="md:hidden">{`20${event.subYear}`}</span>
                  <span className="hidden md:inline">{event.subYear}</span>
                </span>

                <div className="grid grid-cols-1 xl:grid-cols-[minmax(260px,360px)_1fr] gap-6 xl:gap-8 items-start">
                  <div className="relative aspect-[16/10] bg-[#EBF5FB] rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src={journeyImages[index % journeyImages.length]}
                      alt={event.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-3">{event.caption}</p>
                    <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] max-w-[720px]">{event.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
