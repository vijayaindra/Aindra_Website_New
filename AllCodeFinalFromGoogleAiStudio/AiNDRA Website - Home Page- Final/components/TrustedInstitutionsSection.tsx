
import React from 'react';

export const TrustedInstitutionsSection: React.FC = () => {
  // Array of 14 items for the 2x7 grid shown in the screenshot
  const gridItems = Array.from({ length: 14 });

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

        {/* Institutions Logo Grid - More compact padding */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-l border-t border-slate-200">
          {gridItems.map((_, i) => (
            <div 
              key={i} 
              className="aspect-[2/1] border-r border-b border-slate-200 flex items-center justify-center p-6 transition-colors duration-300 hover:bg-slate-50 group"
            >
               <div className="w-full h-full bg-slate-100/30 rounded flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                 <div className="w-6 h-6 rounded-full bg-slate-200"></div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
