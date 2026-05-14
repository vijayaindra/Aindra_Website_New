
import React from 'react';
import { sectionContainerWide, sectionShell } from '../../../components/layout';
import careersImage from '../../../assets/Aindra_team/Careers.png';

const Hero: React.FC = () => {
  return (
    <section className="product-hero-section">
      <div className={`product-hero-body flex flex-col md:flex-row md:items-start ${sectionShell} ${sectionContainerWide} relative`}>
        <div className="w-full md:w-1/2 z-10 pr-0 md:pr-14 lg:pr-20">
          <h1 className="product-hero-title font-bold tracking-tight text-gray-900 mb-6 md:mb-8">
            About Us
          </h1>
          <div className="w-24 h-[1px] bg-gray-200 mb-8"></div>
          <p className="product-hero-description text-gray-500 font-normal">
            At Aindra, we build healthcare technology solutions for faster, smarter, and more accessible diagnostics.
          </p>
          <p className="product-hero-description text-gray-500 font-normal mt-4">
            We aim to empower healthcare providers with reliable tools for early detection and better patient outcomes.
          </p>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-end md:justify-start">
          <div className="relative flex items-center justify-center w-full max-w-[560px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-[560px] aspect-[16/10] rounded-full border border-gray-100 relative opacity-40">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100"></div>
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-100"></div>
              </div>
            </div>

            <div className="relative z-10 w-full max-w-[560px] aspect-[16/10] drop-shadow-2xl transition-all duration-700 ease-in-out transform">
              <img
                src={careersImage}
                alt="About Aindra"
                className="w-full h-full object-contain animate-in fade-in duration-700"
              />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[560px] px-2 md:px-0 mt-1 md:mt-2">
            <p className="text-center text-[18px] md:text-[22px] leading-[1.3] font-bold text-[#00000]">
              "Our mission is to democratize healthcare by making medical imaging accessible to everyone around the world."
            </p>
            <div className="mt-3 md:mt-4 text-right">
              <p className="text-[20px] md:text-[26px] leading-[1.1] font-semibold text-gray-700">— Adarsh Natrajan</p>
              <p className="text-[15px] md:text-[20px] leading-[1.2] text-gray-400">Founder, Aindra Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
