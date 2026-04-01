
import React from 'react';

export const BackgroundLines: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Vertical Lines */}
      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 px-6 md:px-12 lg:px-24">
        <div className="border-r border-slate-100 h-full"></div>
        <div className="border-r border-slate-100 h-full hidden md:block"></div>
        <div className="border-r border-slate-100 h-full"></div>
        <div className="border-r border-slate-100 h-full hidden lg:block"></div>
        <div className="border-r border-slate-100 h-full"></div>
        <div className="border-r border-slate-100 h-full hidden md:block"></div>
        <div className="border-r border-slate-100 h-full hidden lg:block"></div>
      </div>
      
      {/* Horizontal subtle gradient at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </div>
  );
};
