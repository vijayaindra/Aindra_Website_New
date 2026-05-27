import React from 'react';
import medgeneraLogo from '../assets/media/medgenera.png';
import yourstoryLogo from '../assets/media/yourstory.png';
import economicTimesLogo from '../assets/media/economic-times.png';
import techcircleLogo from '../assets/media/techcircle.png';
import geektimeLogo from '../assets/media/geektime.png';
import venturebeatLogo from '../assets/media/venturebeat.png';
import backgroundImage from '../assets/ProductImages/Background Image.png';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionContainer, sectionShell, sectionY } from './layout';

const mediaLogos = [
  { name: 'Medgenera', src: medgeneraLogo, scale: 'scale-[1.2] md:scale-[1.45]' },
  { name: 'YourStory', src: yourstoryLogo, scale: 'scale-[1.15] md:scale-[1.35]' },
  { name: 'The Economic Times', src: economicTimesLogo, scale: 'scale-[1.15] md:scale-[1.3]' },
  { name: 'Techcircle', src: techcircleLogo, scale: 'scale-[1.15] md:scale-[1.35]' },
  { name: 'Geektime', src: geektimeLogo, scale: 'scale-[1.15] md:scale-[1.35]' },
  { name: 'VentureBeat', src: venturebeatLogo, scale: 'scale-[1.15] md:scale-[1.35]' }
];

export const TrustAndMarketingSection: React.FC = () => {
  return (
    <section className={`relative w-full overflow-visible lg:overflow-hidden bg-white ${sectionShell} ${sectionY}`}>
      <div className={sectionContainer}>
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white lg:grid lg:grid-cols-12">
          <div className="relative overflow-hidden lg:col-span-7 flex flex-col justify-center px-7 sm:px-10 md:px-12 lg:px-14 py-12 md:py-14 lg:py-16 max-[900px]:py-10 min-h-[460px] md:min-h-[560px] max-[900px]:min-h-[420px]">
            <div className="absolute inset-0 z-0">
              <img
                src={backgroundImage}
                alt="Medical Background"
                className="w-full h-full object-cover scale-110 blur-[40px] opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/60"></div>
            </div>

            <div className="relative z-10 space-y-9 max-w-[46rem]">
              <h2 className="text-[2.05rem] sm:text-[2.35rem] md:text-[3.35rem] lg:text-[4.1rem] max-[900px]:text-[clamp(2rem,3.35vw,2.6rem)] font-medium text-white tracking-tight leading-[1.04]">
                Medical-Grade AI. Validated for Clinical Use.
              </h2>
              <p className="text-white/80 text-[1.23rem] sm:text-[1.45rem] md:text-[1.95rem] lg:text-[2.15rem] max-[900px]:text-[clamp(1.12rem,2.25vw,1.45rem)] font-light leading-[1.32]">
                Aindra is building the new standard for computational pathology with 10M+ slides processed across 50+ cities.
              </p>

              <div className="flex items-start justify-between w-full max-w-[34rem] pt-3">
                <div className="text-center min-w-[6.4rem]">
                  <div className="w-20 h-20 sm:w-[5.5rem] sm:h-[5.5rem] rounded-full border border-white/30 text-white/90 flex items-center justify-center text-[13px] sm:text-[15px] font-bold leading-tight mx-auto">CDSCO</div>
                  <div className="mt-2.5 text-[13px] sm:text-sm text-white/70 uppercase tracking-wider">Approved</div>
                </div>
                <div className="text-center min-w-[6.4rem]">
                  <div className="w-20 h-20 sm:w-[5.5rem] sm:h-[5.5rem] rounded-full border border-white/30 text-white/90 flex items-center justify-center text-[13px] sm:text-[15px] font-bold leading-tight mx-auto">CE-IVD</div>
                  <div className="mt-2.5 text-[13px] sm:text-sm text-white/70 uppercase tracking-wider">Certified</div>
                </div>
                <div className="text-center min-w-[6.4rem]">
                  <div className="w-20 h-20 sm:w-[5.5rem] sm:h-[5.5rem] rounded-full border border-white/30 text-white/90 flex items-center justify-center text-xs sm:text-[13px] font-bold leading-tight px-1 mx-auto">ISO 13485</div>
                  <div className="mt-2.5 text-[13px] sm:text-sm text-white/70 uppercase tracking-wider">Compliant</div>
                </div>
              </div>

              <div className="pt-5 flex flex-wrap gap-4">
                <a href="#/about#credibility" className="px-9 sm:px-10 py-3.5 sm:py-4 bg-white text-slate-900 rounded-full font-bold text-[15px] sm:text-base tracking-wider uppercase hover:bg-slate-100 transition-all inline-flex items-center justify-center">
                  View Validation Data
                </a>
                <a href="#/about#credibility" className="px-9 sm:px-10 py-3.5 sm:py-4 border border-white/30 text-white rounded-full font-bold text-[15px] sm:text-base tracking-wider uppercase hover:bg-white/10 transition-all inline-flex items-center justify-center">
                  Clinical Publications
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white flex flex-col justify-start px-6 sm:px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14 max-[900px]:py-8 border-t lg:border-t-0 lg:border-l border-slate-100">
            <div className="space-y-6 md:space-y-7">
              <SectionEyebrow label="In the Media" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
                Recognized for Innovation in MedTech
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                {mediaLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="h-32 sm:h-36 md:h-40 lg:h-44 flex items-center justify-center px-0.5"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`max-h-28 sm:max-h-32 md:max-h-36 lg:max-h-40 w-auto object-contain ${logo.scale}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
