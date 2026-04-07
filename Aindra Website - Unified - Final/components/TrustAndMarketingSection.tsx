import React from 'react';
import medgeneraLogo from '../assets/media/medgenera.png';
import yourstoryLogo from '../assets/media/yourstory.png';
import economicTimesLogo from '../assets/media/economic-times.png';
import techcircleLogo from '../assets/media/techcircle.png';
import geektimeLogo from '../assets/media/geektime.png';
import venturebeatLogo from '../assets/media/venturebeat.png';

const mediaLogos = [
  { name: 'Medgenera', src: medgeneraLogo },
  { name: 'YourStory', src: yourstoryLogo },
  { name: 'The Economic Times', src: economicTimesLogo },
  { name: 'Techcircle', src: techcircleLogo },
  { name: 'Geektime', src: geektimeLogo },
  { name: 'VentureBeat', src: venturebeatLogo }
];

export const TrustAndMarketingSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row min-h-[680px]">
      <div className="relative w-full md:w-[60%] flex flex-col justify-center p-12 md:p-20 lg:p-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop"
            alt="Medical Background"
            className="w-full h-full object-cover scale-110 blur-[40px] opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/60"></div>
        </div>

        <div className="relative z-10 space-y-8 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
            Medical-Grade AI. Validated for Clinical Use.
          </h2>
          <p className="text-white/80 text-lg md:text-3xl font-light leading-relaxed">
            Aindra is building the new standard for computational pathology with 10M+ slides processed across 50+ cities.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-white/30 text-white/90 flex items-center justify-center text-[10px] font-bold">CDSCO</div>
              <div className="mt-1 text-[10px] text-white/60 uppercase tracking-wider">Approved</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-white/30 text-white/90 flex items-center justify-center text-[10px] font-bold">CE-IVD</div>
              <div className="mt-1 text-[10px] text-white/60 uppercase tracking-wider">Certified</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border border-white/30 text-white/90 flex items-center justify-center text-[10px] font-bold">ISO 13485</div>
              <div className="mt-1 text-[10px] text-white/60 uppercase tracking-wider">Compliant</div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold text-sm tracking-wider uppercase hover:bg-slate-100 transition-all">
              View Validation Data
            </button>
            <button className="px-8 py-3 border border-white/30 text-white rounded-full font-bold text-sm tracking-wider uppercase hover:bg-white/10 transition-all">
              Clinical Publications
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[40%] bg-white flex flex-col justify-center p-12 md:p-16 lg:p-20 border-l border-slate-100">
        <div className="space-y-8">
          <div className="text-xs font-bold tracking-[0.2em] text-[#00a3ff] uppercase">In the Media</div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
            Recognized for Innovation in MedTech
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {mediaLogos.map((logo) => (
              <div
                key={logo.name}
                className="h-20 border border-slate-100 bg-white flex items-center justify-center px-5"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
