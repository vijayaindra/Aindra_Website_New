
import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { sectionContainer, sectionContainerWide, sectionShell } from '../../components/layout';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
import type { IntellistainVariant } from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import ImageQualitySection from './components/ImageQualitySection';
import SpecificationsSection from './components/SpecificationsSection';
import ResourcesSection from './components/ResourcesSection';
import FAQSection from './components/FAQSection';
import ProcessFlow from './components/ProcessFlow';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('OVERVIEW');
  const [activeVariant, setActiveVariant] = useState<IntellistainVariant>('IS15');
  const tabs = ['OVERVIEW', 'STAINING QUALITY', 'SPECIFICATIONS', 'RESOURCES'];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="w-full pt-20 sm:pt-24 lg:pl-[190px]">
        <section className={sectionShell}>
          <div className={sectionContainer}>
            <Breadcrumbs />
          </div>
        </section>
        
        <Hero 
          activeTab={activeSection} 
          onTabChange={setActiveSection} 
          activeVariant={activeVariant}
          onVariantChange={setActiveVariant}
        />

        <section className={`${sectionShell} relative`}>
          <div className="hidden lg:block fixed top-28 left-6 z-30 pointer-events-none">
              <aside className="w-[170px] pointer-events-auto">
              <div className="pr-2 py-1">
                <p className="text-[13px] font-bold tracking-[0.14em] text-[#00AEEF] uppercase mb-4">
                  Explore Intellistain
                </p>
                <div className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSection(tab)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-md text-[12px] font-bold tracking-[0.07em] uppercase transition-colors duration-200 ${
                        activeSection === tab
                          ? 'bg-[#EAF7FD] text-[#00AEEF]'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              </aside>
          </div>
          <div className={`${sectionContainerWide} lg:hidden overflow-x-auto`}>
            <div className="flex min-w-max gap-2 py-3">
              {tabs.map((tab) => (
                <button
                  key={`mobile-${tab}`}
                  onClick={() => setActiveSection(tab)}
                  className={`shrink-0 px-2.5 py-1.5 rounded-md text-[12px] font-bold tracking-[0.07em] uppercase transition-colors duration-200 ${
                    activeSection === tab
                      ? 'bg-[#EAF7FD] text-[#00AEEF]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeSection === 'OVERVIEW' ? (
          <BenefitsSection />
        ) : activeSection === 'STAINING QUALITY' ? (
          <ImageQualitySection />
        ) : activeSection === 'SPECIFICATIONS' ? (
          <SpecificationsSection activeVariant={activeVariant} />
        ) : activeSection === 'RESOURCES' ? (
          <ResourcesSection />
        ) : (
          <BenefitsSection />
        )}
        
        <FAQSection />
        <ProcessFlow />
      </main>
      
      <Footer />
      
      <AIAssistant />
    </div>
  );
};

export default App;
