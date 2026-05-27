import React from 'react';

interface ScrollSectionLeftNavProps {
  items: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
  isCompactHeight: boolean;
}

export const ScrollSectionLeftNav: React.FC<ScrollSectionLeftNavProps> = ({
  items,
  activeIndex,
  onSelect,
  isCompactHeight,
}) => {
  const itemSegment = 100 / Math.max(items.length, 1);

  return (
    <div className={`relative ${isCompactHeight ? 'mb-7' : 'mb-12'}`}>
      <div className="absolute left-[3px] top-4 bottom-4 w-[2px] bg-slate-100 rounded-full"></div>

      <div
        className="absolute left-[3px] w-[2px] bg-cyan-500 transition-all duration-700 rounded-full"
        style={{
          top: `${activeIndex * itemSegment}%`,
          height: `${itemSegment}%`,
          marginTop: '16px',
        }}
      ></div>

      <div className={`flex flex-col ${isCompactHeight ? 'space-y-5' : 'space-y-7'}`}>
        {items.map((item, idx) => (
          <button
            key={item}
            onClick={() => onSelect(idx)}
            className="flex items-center space-x-6 group transition-all duration-500 text-left"
          >
            <div
              className={`relative w-2 h-2 rounded-full border-2 transition-all duration-500 z-10 ${
                idx === activeIndex
                  ? 'bg-cyan-500 border-cyan-500 scale-125'
                  : 'bg-white border-slate-200 group-hover:border-slate-400'
              }`}
            />
            <span
              className={`text-2xl ${isCompactHeight ? 'lg:text-[24px]' : 'lg:text-3xl'} font-bold tracking-tight transition-all duration-500 ${
                idx === activeIndex
                  ? 'text-slate-900 translate-x-1'
                  : 'text-slate-300 group-hover:text-slate-500'
              }`}
            >
              {item}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
