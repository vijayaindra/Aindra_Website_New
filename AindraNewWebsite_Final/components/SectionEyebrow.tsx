import React from 'react';

interface SectionEyebrowProps {
  label: string;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ label, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 align-middle ${className}`}>
      <div className="h-px w-10 sm:w-14 bg-slate-200" aria-hidden="true" />
      <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase leading-none whitespace-nowrap">
        {label}
      </span>
      <div className="h-[7px] w-[7px] rounded-full border border-slate-200" aria-hidden="true" />
    </div>
  );
};
