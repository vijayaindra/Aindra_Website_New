import React from 'react';

interface ResourceCardProps {
  title: string;
  imageUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, imageUrl }) => (
  <div className="w-full max-w-[340px] group cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col">
    <div className="aspect-[4/5] bg-gray-50 overflow-hidden flex items-center justify-center p-2">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover shadow-sm group-hover:scale-[1.02] transition-transform duration-700" 
      />
    </div>
    <div className="bg-white p-5 border-t border-gray-100 flex items-center justify-between">
      <span className="text-[17px] font-semibold text-gray-900 tracking-tight">{title}</span>
      <div className="w-10 h-10 rounded-full bg-[#00AEEF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:bg-[#0096ce] transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
);

const ResourcesSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-20 max-w-[1440px] mx-auto animate-in fade-in duration-700">
      {/* Top Heading consistent with other sections */}
      <div className="mb-20">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <ResourceCard 
          title="Download Brochure" 
          imageUrl="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800" 
        />
        
        {/* Optional: Add more placeholders if needed in the future, currently keeping it matching the screenshot */}
      </div>
    </section>
  );
};

export default ResourcesSection;