
import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-[1520px]">
        {/* Side Label matching the site pattern */}
        <div className="w-[120px] md:w-[160px] shrink-0 pt-2 mr-6 md:mr-10 mb-8 md:mb-0">
          <div className="flex flex-col items-start w-full">
            <span className="text-[12px] font-bold tracking-[0.08em] uppercase mb-1.5 ml-0.5 text-[#00AEEF]">
              WHO WE ARE
            </span>
            <div className="relative w-full flex items-center pr-1">
              <div className="flex-grow h-[1px] bg-gray-200"></div>
              <div className="w-[8px] h-[8px] border border-gray-300 rounded-full bg-white -ml-[4px]"></div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] text-gray-900 tracking-tight mb-12 max-w-5xl">
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
