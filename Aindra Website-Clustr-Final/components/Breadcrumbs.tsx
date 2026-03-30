
import React from 'react';

const Breadcrumbs: React.FC = () => {
  return (
    <nav className="flex px-6 py-4 text-xs text-gray-400 items-center space-x-2">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
      <span>&gt;</span>
      <span className="hover:text-gray-600 cursor-pointer">Clustr</span>
    </nav>
  );
};

export default Breadcrumbs;
