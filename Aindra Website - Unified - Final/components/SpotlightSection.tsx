
import React from 'react';
import hpvBlogImage from '../assets/spotlight/blog-hpv-cervical-cancer.png';
import aiPathologyBlogImage from '../assets/spotlight/blog-ai-digital-pathology.png';
import telemedicineBlogImage from '../assets/spotlight/blog-telemedicine.png';

interface NewsItem {
  image: string;
  title: string;
  date: string;
  description: string;
  url: string;
}

export const SpotlightSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      image: hpvBlogImage,
      title: 'MYTHS vs FACTS: HPV AND CERVICAL CANCER',
      date: 'Posted on July 10, 2020',
      description: 'Cervical cancer is the second most common cancer affecting and causing deaths among women in India. Cervical cancer is caused by the Human Papilloma Virus or HPV. The lower part...',
      url: 'https://aindrasystems.wordpress.com/2020/07/10/myths-vs-facts-hpv-and-cervical-cancer/'
    },
    {
      image: aiPathologyBlogImage,
      title: 'The Rise of AI in Digital Pathology - Beyond Just Image Analysis',
      date: 'Posted on April 21, 2025',
      description: "Artificial intelligence is transforming digital pathology in ways that extend far beyond basic image recognition. While early applications focused primarily on automating slide review and identifying tissue abnormalities, today's AI systems...",
      url: 'https://aindrasystems.wordpress.com/2025/04/21/the-rise-of-ai-in-digital-pathology-beyond-just-image-analysis/'
    },
    {
      image: telemedicineBlogImage,
      title: 'Digitization of healthcare system with Telemedicine',
      date: 'Posted on June 16, 2020',
      description: 'It has been three months since 1.38 billion citizens of India are under lockdown to follow “social distancing”. This has been implemented by the Government slow down...',
      url: 'https://aindrasystems.wordpress.com/2019/05/20/medical-device-regulation-indian-perspective/'
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

          <div className="hidden items-center space-x-3 mt-4 md:mt-0">
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
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/3] bg-slate-100 mb-8 overflow-hidden"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl leading-tight font-semibold text-slate-900 mb-4 tracking-tight hover:text-[#005bc4] transition-colors"
              >
                {item.title}
              </a>
              <div className="text-sm text-slate-500 mb-5">{item.date}</div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5 font-light">
                {item.description}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078d4] text-[18px] font-medium mb-6 hover:underline"
              >
                Read more
              </a>
              <div className="w-full h-px bg-slate-200 mt-auto"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
