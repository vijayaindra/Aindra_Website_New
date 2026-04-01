
import React from 'react';

export const SpotlightSection: React.FC = () => {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      title: "Lorem Ipsum is simply dummy text",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      image: "https://images.unsplash.com/photo-1579154235602-3c2c2446a1e6?q=80&w=800&auto=format&fit=crop",
      title: "Lorem Ipsum is simply dummy text",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
      title: "Lorem Ipsum is simply dummy text",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
             <div className="w-8 h-px bg-slate-200"></div>
             <span className="text-[10px] font-bold tracking-[0.2em] text-[#00a3ff] uppercase whitespace-nowrap">Media Mentions</span>
             <div className="w-2 h-2 rounded-full border border-slate-200"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight flex-1 md:ml-12">
            Aindra in the Spotlight
          </h2>

          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <button className="w-10 h-10 rounded-full border border-[#00a3ff] flex items-center justify-center text-[#00a3ff] hover:bg-[#00a3ff] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-[#00a3ff] flex items-center justify-center text-[#00a3ff] hover:bg-[#00a3ff] hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {newsItems.map((item, i) => (
            <div key={i} className="flex flex-col group">
              <div className="aspect-[4/3] bg-slate-100 mb-8 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                {item.description}
              </p>
              <div className="w-full h-px bg-slate-200 mt-auto"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
