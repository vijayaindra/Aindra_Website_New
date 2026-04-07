
import React from 'react';
import { Navbar } from '../../components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import JourneySection from './components/JourneySection';
import ImpactSection from './components/ImpactSection';
import TeamSection from './components/TeamSection';
import CredibilitySection from './components/CredibilitySection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="w-full pt-20 sm:pt-24">
        <div className="px-4 md:px-8">
          <Breadcrumbs />
        </div>
        <Hero />
        <BenefitsSection />
        <JourneySection />
        <ImpactSection />
        <TeamSection />
        <CredibilitySection />
      </main>
      
      <Footer />
      
      <AIAssistant />
    </div>
  );
};

export default App;
