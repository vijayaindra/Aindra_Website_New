
import React, { useMemo, useState } from 'react';
import kidwaiLogo from '../../../assets/TrustedByLogo/KIDWAI Memorial Institute of Oncology.png';
import rvMetropolisLogo from '../../../assets/TrustedByLogo/RV Metropolis.png';
import kmcManipalLogo from '../../../assets/TrustedByLogo/KMC Manipal.png';
import rajarajeswariLogo from '../../../assets/TrustedByLogo/Rajarajeswari Medical College.jpeg';
import impaLogo from '../../../assets/TrustedByLogo/logo-21.webp';
import biracLogo from '../../../assets/Investors/investor1.png';
import iusstfLogo from '../../../assets/Investors/investor2.png';
import villgroLogo from '../../../assets/Investors/investor3.png';
import millenniumAllianceLogo from '../../../assets/Investors/investor4.png';
import ikpLogo from '../../../assets/Investors/investor5.png';
import forgeLogo from '../../../assets/Investors/investor6.png';
import iitMadrasLogo from '../../../assets/Research_Partner/research-partners1.png';
import iitMandiLogo from '../../../assets/Research_Partner/research-partners2.png';
import iiscLogo from '../../../assets/Research_Partner/research-partners3.png';
import adarshTeamImage from '../../../assets/Aindra_team/Adarsh.jpg';
import atulTeamImage from '../../../assets/Aindra_team/Atul.jpg';
import sudhirTeamImage from '../../../assets/Aindra_team/Sudhir.jpeg';
import vijayTeamImage from '../../../assets/Aindra_team/Vijay.jpg';
import charanTeamImage from '../../../assets/Aindra_team/Charan.jpg';
import abhyanandTeamImage from '../../../assets/Aindra_team/Abhyanand.jpg';
import farhanTeamImage from '../../../assets/Aindra_team/Farhan.jpeg';
import harshithaTeamImage from '../../../assets/Aindra_team/Harshitha.png';
import anilImage from '../../../assets/Anil.jpg';
import arunImage from '../../../assets/Arun-Venkatesh.png';
import drShantiImage from '../../../assets/Dr_shanti.jpeg';
import rajanImage from '../../../assets/Rajan.jpg';
import vijaysimhaImage from '../../../assets/Vijaysimha.jpg';
import adityaAjmeraImage from '../../../assets/aditya-ajmera.jpg';
import bhushanImage from '../../../assets/bhushan.jpg';

interface TeamMember {
  name: string;
  role?: string;
  image: string;
  isLogo?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Adarsh Natarajan',
    role: 'CEO',
    image: adarshTeamImage
  },
  {
    name: 'Atul Bisht',
    role: 'Product Manager',
    image: atulTeamImage
  },
  {
    name: 'Sudhir Kumar',
    role: 'Electronics & Embedded Engineer',
    image: sudhirTeamImage
  },
  {
    name: 'Vijay Kumar',
    role: 'Team Lead',
    image: vijayTeamImage
  },
  {
    name: 'Charan Nagasayana',
    role: 'QA Associate',
    image: charanTeamImage
  },
  {
    name: 'Abhyanand Jha',
    role: 'Software Engineer',
    image: abhyanandTeamImage
  },
  {
    name: 'Farhan Sidhik',
    role: 'Product Designer',
    image: farhanTeamImage
  },
  {
    name: 'Harshitha Samudrala',
    role: 'Software Engineer',
    image: harshithaTeamImage
  }
];

const advisors: TeamMember[] = [
  {
    name: 'Aditya Ajmera',
    role: 'CEO, Chimco Bio Medical Engineering Co.',
    image: adityaAjmeraImage
  },
  {
    name: 'Dr. Shanti Bhattacharya',
    role: 'Faculty, IIT Madras',
    image: drShantiImage
  },
  {
    name: 'Dr. Anil Kumar Sao',
    role: 'Chairperson, SCEE IIT Mandi | Computer Vision Expert',
    image: anilImage
  },
  {
    name: 'ThiyagaRajan M',
    role: 'Innovation Leader, Intuit | Serial Entrepreneur',
    image: rajanImage
  },
  {
    name: 'Arun Venkatesh',
    role: 'CTO at Vilgro',
    image: arunImage
  },
  {
    name: 'Vijay Simha',
    role: 'CEO, OneBreath Inc. | Business Thinker & Strategy Guru',
    image: vijaysimhaImage
  },
  {
    name: 'Bhushan KC',
    role: 'CEO, BinBag',
    image: bhushanImage
  }
];

const medicalPartners: TeamMember[] = [
  {
    name: 'Indian Association of Pathologists and Microbiologists',
    image: impaLogo,
    isLogo: true
  },
  {
    name: 'RV Metropolis',
    image: rvMetropolisLogo,
    isLogo: true
  },
  {
    name: 'KMC Manipal',
    image: kmcManipalLogo,
    isLogo: true
  },
  {
    name: 'Rajarajeswari Medical College',
    image: rajarajeswariLogo,
    isLogo: true
  },
  {
    name: 'KIDWAI Memorial Institute of Oncology',
    image: kidwaiLogo,
    isLogo: true
  }
];

const investors: TeamMember[] = [
  {
    name: 'BIRAC',
    image: biracLogo,
    isLogo: true
  },
  {
    name: 'IUSSTF',
    image: iusstfLogo,
    isLogo: true
  },
  {
    name: 'Villgro',
    image: villgroLogo,
    isLogo: true
  },
  {
    name: 'Millennium Alliance',
    image: millenniumAllianceLogo,
    isLogo: true
  },
  {
    name: 'IKP Knowledge Park',
    image: ikpLogo,
    isLogo: true
  },
  {
    name: 'Forge',
    image: forgeLogo,
    isLogo: true
  }
];

const researchPartners: TeamMember[] = [
  {
    name: 'Indian Institute of Technology Madras',
    image: iitMadrasLogo,
    isLogo: true
  },
  {
    name: 'Indian Institute of Technology Mandi',
    image: iitMandiLogo,
    isLogo: true
  },
  {
    name: 'Indian Institute of Science',
    image: iiscLogo,
    isLogo: true
  }
];

const categories = [
  "Aindra Team",
  "Advisors",
  "Investors",
  "Medical Partners",
  "Research Partners"
];

const TeamSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Aindra Team");
  const isMedicalPartnersView = activeCategory === 'Medical Partners';
  const visibleMembers = useMemo(
    () => {
      if (activeCategory === 'Advisors') return advisors;
      if (activeCategory === 'Investors') return investors;
      if (activeCategory === 'Research Partners') return researchPartners;
      if (isMedicalPartnersView) return medicalPartners;
      return teamMembers;
    },
    [activeCategory, isMedicalPartnersView]
  );

  return (
    <section className="w-full bg-[#f0f7ff] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
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
              {visibleMembers.map((member, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-500 group-hover:shadow-xl group-hover:border-blue-100">
                    <div className="h-[270px] sm:h-[300px] bg-white flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className={`w-full h-full transition-all duration-700 ${
                        member.isLogo
                          ? 'object-contain p-6 sm:p-8 grayscale-0'
                          : 'object-cover grayscale group-hover:grayscale-0'
                      }`}
                    />
                    </div>
                    <div className="p-5 bg-[#EBF5FB]/95 border-t border-blue-100 min-h-[90px]">
                      <h4 className="text-[17px] font-bold text-[#00AEEF] leading-snug mb-0.5">
                        {member.name}
                      </h4>
                      {!isMedicalPartnersView && member.role ? (
                        <p className="text-[15px] font-bold text-gray-900">
                          {member.role}
                        </p>
                      ) : null}
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
