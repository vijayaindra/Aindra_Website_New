import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="w-full">
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