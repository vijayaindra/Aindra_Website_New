import React from 'react';
import { Navbar } from '../../components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';
import ProcessFlow from './components/ProcessFlow';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="w-full pt-20 sm:pt-24">
        <div className="px-4 md:px-8">
          <Breadcrumbs />
          <Hero />
        </div>
        <BenefitsSection />
        <FAQSection />
        <ProcessFlow />
      </main>
      
      <Footer />
      
      <AIAssistant />
    </div>
  );
};

export default App;
