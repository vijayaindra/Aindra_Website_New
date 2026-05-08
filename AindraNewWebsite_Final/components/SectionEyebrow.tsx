import React from 'react';

interface SectionEyebrowProps {
  label: string;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ label, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-3 align-middle ${className}`}>
      <div className="h-px w-12 sm:w-16 bg-slate-200" aria-hidden="true" />
      <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase leading-none whitespace-nowrap">
        {label}
      </span>
      <div className="h-[9px] w-[9px] rounded-full border border-slate-200" aria-hidden="true" />
    </div>
  );
};
