
import React from 'react';

export const TrustedInstitutionsSection: React.FC = () => {
  const institutions = [
    { short: 'KMIO', full: 'Kidwai Memorial Institute of Oncology' },
    { short: 'APOLLO', full: 'Apollo Hospitals' },
    { short: 'MANIPAL', full: 'Manipal Hospitals' },
    { short: 'NH', full: 'Narayana Health' },
    { short: 'TMH', full: 'Tata Memorial Hospital' },
    { short: 'AIIMS', full: 'AIIMS Delhi' },
    { short: 'FORTIS', full: 'Fortis Healthcare' },
    { short: 'MAX', full: 'Max Healthcare' },
    { short: 'MEDANTA', full: 'Medanta' },
    { short: 'ASTER', full: 'Aster DM Healthcare' },
    { short: 'CLOUDNINE', full: 'Cloudnine Hospitals' },
    { short: 'COLUMBIA', full: 'Columbia Asia' },
    { short: 'KIMS', full: 'KIMS Hospitals' },
    { short: 'CARE', full: 'Care Hospitals' },
  ];

  return (
    <section className="relative pt-12 pb-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area - Reduced margin and height */}
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-12 mb-10">
          <div className="flex items-center space-x-2">
             <div className="w-8 h-px bg-slate-200"></div>
             <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase whitespace-nowrap">Partners</span>
             <div className="w-2 h-2 rounded-full border border-slate-200"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-medium text-slate-900 tracking-tight">
            Trusted by leading healthcare institutions
          </h2>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-l border-t border-slate-200">
          {institutions.map((item, i) => (
            <div 
              key={i} 
              className="aspect-[2/1] border-r border-b border-slate-200 flex items-center justify-center p-6 transition-colors duration-300 hover:bg-slate-50 group"
            >
              <div className="text-center leading-tight">
                <div className={`text-[10px] font-bold uppercase tracking-tight ${item.short === 'CARE' ? 'text-[#00a3ff]' : 'text-slate-400'}`}>
                  {item.short}
                </div>
                <div className="mt-1 text-[9px] text-slate-400">
                  {item.full}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
