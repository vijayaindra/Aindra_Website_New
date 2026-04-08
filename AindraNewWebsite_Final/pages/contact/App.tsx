
import React from 'react';
import { Navbar } from '../../components/Navbar';
import { sectionContainer, sectionShell } from '../../components/layout';
import Breadcrumbs from './components/Breadcrumbs';
import ContactHero from './components/ContactHero';
import ContactDetails from './components/ContactDetails';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="w-full pt-20 sm:pt-24">
        <section className={sectionShell}>
          <div className={sectionContainer}>
            <Breadcrumbs />
          </div>
        </section>
        <ContactHero />
        <ContactDetails />
      </main>
      
      <Footer />
      
      <AIAssistant />
    </div>
  );
};

export default App;
