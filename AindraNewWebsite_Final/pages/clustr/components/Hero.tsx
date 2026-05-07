
import React from 'react';
import clustrImage from '../../../assets/ProductImages/Clustr-optimized.webp';
import { sectionContainerWide, sectionShell } from '../../../components/layout';

const Hero: React.FC = () => {
  return (
    <section className="product-hero-section">
      <div className={`product-hero-body flex flex-col md:flex-row ${sectionShell} ${sectionContainerWide} relative`}>
        <div className="w-full md:w-1/2 z-10 pr-0 md:pr-14 lg:pr-20">
          <h1 className="product-hero-title font-bold tracking-tight text-gray-900 mb-6 md:mb-8">
            Clustr
          </h1>
          <div className="w-24 h-[1px] bg-gray-200 mb-8"></div>
          <p className="product-hero-description text-gray-500 font-normal">
            Clustr automates and standardizes slide staining to reduce variability,
            eliminate manual errors, and cut down on repeat tests freeing your lab
            to focus on what matters: delivering fast, confident diagnostic results.
          </p>
        </div>

        <div className="w-full md:w-1/2 relative flex items-center justify-center mt-8 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="product-hero-image-wrap rounded-full border border-gray-100 relative opacity-40">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100"></div>
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-100"></div>
            </div>
          </div>

          <div className="relative z-10 product-hero-image-wrap drop-shadow-2xl transition-all duration-700 ease-in-out transform">
            <img
              src={clustrImage}
              alt="Clustr Platform"
              className="product-hero-image animate-in fade-in duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
