
import React from 'react';
import { sectionContainer, sectionShell } from '../../../components/layout';
import { SectionEyebrow } from '../../../components/SectionEyebrow';

const WhoWeAre: React.FC = () => {
  return (
    <section className={`${sectionShell} w-full bg-white py-16 md:py-20 lg:py-24`}>
      <div className={`flex flex-col md:flex-row ${sectionContainer}`}>
        {/* Side Label matching the site pattern */}
        <div className="w-[120px] md:w-[160px] shrink-0 pt-1 mr-6 md:mr-10 mb-8 md:mb-0">
          <SectionEyebrow label="Who We Are" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 md:pl-10">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] mb-12 max-w-[1000px]">
            Let's build the future together
          </h2>
          
          <div className="space-y-8 max-w-[1100px]">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700 font-normal text-justify">
              At Aindra, we believe that innovation must serve purpose. Our values are grounded in using cutting-edge AI and imaging technologies to solve real-world diagnostic challenges in healthcare. We design solutions that are not only intelligent and accurate but also intuitive and scalable, keeping the end-user pathologists, clinicians, and lab technicians at the heart of every decision.
            </p>
            
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700 font-normal text-justify">
              Integrity guides how we operate, both internally and in every partnership we build. We prioritize transparency, ethical AI, and regulatory rigor to ensure trust at every stage of deployment. Whether we're working with a rural public health program or a corporate hospital network, we're accountable for delivering results that are clinically relevant, operationally sound, and socially impactful.
            </p>
            
            <p className="text-[17px] md:text-[18px] leading-relaxed text-gray-700 font-normal text-justify">
              We thrive on collaboration and continuous learning. With a culture that values diverse perspectives and open communication, our teams work cross-functionally to deliver solutions that are precise, adaptable, and future-ready. Ultimately, our goal is to build lasting relationships with stakeholders who share our vision of a more equitable, efficient, and accessible healthcare ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
