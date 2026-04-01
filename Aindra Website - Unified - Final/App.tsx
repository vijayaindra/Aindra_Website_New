
import React, { useEffect, useMemo, useState } from 'react';
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
import AboutPage from './pages/about/App';
import AstraPage from './pages/astra/App';
import CareersPage from './pages/careers/App';
import ContactPage from './pages/contact/App';
import IntellistainPage from './pages/intellistain/App';
import VisionXPage from './pages/visionx/App';
import ClustrPage from './pages/clustr/App';

const VALID_ROUTES = new Set([
  '/',
  '/about',
  '/astra',
  '/careers',
  '/contact',
  '/intellistain',
  '/visionx',
  '/clustr',
]);

const normalizeRoute = (route: string): string => {
  if (!route) return '/';
  const clean = route.split('?')[0].split('#')[0];
  const normalized = clean.startsWith('/') ? clean : `/${clean}`;
  if (normalized.length > 1) {
    return normalized.replace(/\/+$/, '').toLowerCase();
  }
  return normalized.toLowerCase();
};

const getCurrentRoute = (): string => {
  const hashRoute = window.location.hash.replace(/^#/, '');
  if (hashRoute.startsWith('/')) {
    const normalizedHash = normalizeRoute(hashRoute);
    return VALID_ROUTES.has(normalizedHash) ? normalizedHash : '/';
  }

  const pathRoute = normalizeRoute(window.location.pathname);
  return VALID_ROUTES.has(pathRoute) ? pathRoute : '/';
};

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-cyan-100 bg-[#f5f7fa] scroll-smooth">
      <Navbar />

      <main className="relative z-10">
        <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
          <Hero />
          <div className="mt-24">
            <InvestorStrip />
          </div>
        </section>

        <UnifiedWorkflowSection />

        <div id="products">
          <ProductsShowcaseSection />
        </div>

        <SolutionsShowcase />

        <WhyChooseUsSection />

        <TestimonialsSection />

        <TrustedInstitutionsSection />

        <SpotlightSection />

        <TrustAndMarketingSection />

        <Footer />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [route, setRoute] = useState<string>(() => getCurrentRoute());

  useEffect(() => {
    const syncRoute = () => setRoute(getCurrentRoute());
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const currentPage = useMemo(() => {
    switch (route) {
      case '/about':
        return <AboutPage />;
      case '/astra':
        return <AstraPage />;
      case '/careers':
        return <CareersPage />;
      case '/contact':
        return <ContactPage />;
      case '/intellistain':
        return <IntellistainPage />;
      case '/visionx':
        return <VisionXPage />;
      case '/clustr':
        return <ClustrPage />;
      case '/':
      default:
        return <HomePage />;
    }
  }, [route]);

  return currentPage;
};

export default App;
