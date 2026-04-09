
import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = Array(6).fill({
  name: "Adarsh Natrajan",
  role: "Founder",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
});

const categories = [
  "Aindra Team",
  "Advisors",
  "Investors",
  "Medical Partners",
  "Research Partners"
];

const TeamSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Aindra Team");

  return (
    <section className="w-full bg-[#f0f7ff] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start mb-20 w-full px-6 md:px-10">
          {/* Section Label: Standardized width and padding */}
          <div className="w-full md:w-[25%] lg:w-[20%] shrink-0 mb-6 md:mb-0">
            <div className="flex flex-col w-full">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#00AEEF] uppercase mb-2">
                TEAM
              </span>
              <div className="flex items-center w-full">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <div className="w-[10px] h-[10px] rounded-full border border-gray-400 bg-white mr-2"></div>
              </div>
            </div>
          </div>
          
          {/* Headline: Aligned with the grid */}
          <div className="flex-1 md:pl-12 lg:pr-24">
            <h2 className="text-[24px] md:text-[34px] lg:text-[42px] font-bold text-[#111827] leading-[1.2] tracking-tight max-w-[800px]">
              We are a team dedicated to innovating traditional healthcare
            </h2>
          </div>
        </div>

        {/* Content Area: Sidebar and Grid */}
        <div className="flex flex-col md:flex-row w-full px-6 md:px-10">
          {/* Sidebar Categories: Standardized width */}
          <div className="w-full md:w-[25%] lg:w-[20%] shrink-0 md:pr-10 mb-12 md:mb-0">
            <div className="flex flex-col border-t border-gray-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center justify-between w-full py-5 border-b border-gray-200 transition-all group ${
                    activeCategory === cat ? 'text-[#00AEEF]' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className="text-[14px] md:text-[15px] font-semibold text-left">
                    {cat}
                  </span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    activeCategory === cat ? 'border-[#00AEEF] bg-[#00AEEF]' : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                    {activeCategory === cat && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid: Optimized column counts for different viewports */}
          <div className="flex-1 md:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-500 group-hover:shadow-xl group-hover:border-blue-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Info Box - matching the blue overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#EBF5FB]/95 backdrop-blur-sm border-t border-blue-100">
                      <h4 className="text-[17px] font-bold text-[#00AEEF] mb-0.5">
                        {member.name}
                      </h4>
                      <p className="text-[13px] font-medium text-gray-900">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
