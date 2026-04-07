import React from 'react';
import { Navbar } from '../../components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="w-full pt-20 sm:pt-24">
        <Hero />
        <WhoWeAre />
        <BenefitsSection />
      </main>
      
      <Footer />
      
      <AIAssistant />
    </div>
  );
};

export default App;
