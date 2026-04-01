
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvestorStrip } from './components/InvestorStrip';
import { UnifiedWorkflowSection } from './components/UnifiedWorkflowSection';
import { ProductsShowcaseSection } from './components/ProductsShowcaseSection';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustedInstitutionsSection } from './components/TrustedInstitutionsSection';
import { SpotlightSection } from './components/SpotlightSection';
import { TrustAndMarketingSection } from './components/TrustAndMarketingSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-cyan-100 bg-white scroll-smooth">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Section 1: Hero & Investors */}
        <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
          <Hero />
          <div className="mt-24">
            <InvestorStrip />
          </div>
        </section>

        {/* Section 2: Unified Page (Narrative + 4 Step Horizontal Workflow) */}
        <UnifiedWorkflowSection />

        {/* Section 3: Unified Product Showcase (Persistent Header + Dynamic Content) */}
        <div id="products">
          <ProductsShowcaseSection />
        </div>

        {/* Section 4: Solutions Showcase (CervAstra, etc.) */}
        <SolutionsShowcase />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Section 6: Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Trusted Institutions */}
        <TrustedInstitutionsSection />

        {/* Section 8: Aindra in the Spotlight */}
        <SpotlightSection />

        {/* Section 9: Trust and Marketing */}
        <TrustAndMarketingSection />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
