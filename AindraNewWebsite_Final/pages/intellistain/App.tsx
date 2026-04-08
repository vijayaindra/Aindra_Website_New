
import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { sectionContainer, sectionShell } from '../../components/layout';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
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

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="w-full pt-20 sm:pt-24">
        <section className={sectionShell}>
          <div className={sectionContainer}>
            <Breadcrumbs />
          </div>
        </section>
        
        <Hero 
          activeTab={activeSection} 
          onTabChange={setActiveSection} 
        />

        {activeSection === 'OVERVIEW' ? (
          <BenefitsSection />
        ) : activeSection === 'STAINING QUALITY' ? (
          <ImageQualitySection />
        ) : activeSection === 'SPECIFICATIONS' ? (
          <SpecificationsSection />
        ) : activeSection === 'RESOURCES' ? (
          <ResourcesSection />
        ) : (
          <div className="py-40 text-center text-gray-400 font-medium bg-gray-50 border-y border-gray-100">
            {activeSection} content coming soon...
          </div>
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
