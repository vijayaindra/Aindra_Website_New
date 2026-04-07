
import React from 'react';

export const InvestorStrip: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
        Backed by top-tier investors
      </p>
      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="h-10 w-24 md:w-32 bg-slate-100 rounded-full animate-pulse transition-all hover:bg-slate-200"
          />
        ))}
      </div>
    </div>
  );
};
