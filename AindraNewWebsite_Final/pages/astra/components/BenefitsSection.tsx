import React from 'react';
import { ResponsiveBenefitsTemplate } from '../../../components/ResponsiveBenefitsTemplate';

const benefits = [
  {
    title: 'AI-first Screening',
    description: 'Automate primary screening assistance with morphology-aware AI to reduce repetitive manual review burden.',
  },
  {
    title: 'Faster Triage',
    description: 'Prioritize suspicious cases quickly so pathologists can focus attention where clinical impact is highest.',
  },
  {
    title: 'Consistent Reporting Inputs',
    description: 'Standardize insight generation to support reproducible diagnostic decisions across teams and sites.',
  },
  {
    title: 'Scalable Digital Deployment',
    description: 'Run Astra within modern pathology workflows and expand to multi-center programs with confidence.',
  },
];

const features = [
  {
    title: 'Feature 1: Precision Screening',
    description:
      'Astra applies robust computer vision models to detect clinically relevant regions with high consistency.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 2: AI-Driven Insights',
    description:
      'Generate interpretable cues and review aids that help experts move through cases faster without sacrificing quality.',
    image: 'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 3: Workflow Integration',
    description:
      'Connect with existing lab processes and reporting pipelines to streamline adoption and daily operations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 4: Real-time Monitoring',
    description:
      'Track processing and throughput health in real-time for better planning and quality governance.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 5: Cloud Connectivity',
    description:
      'Collaborate across teams through secure digital access and centralized case review experiences.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <ResponsiveBenefitsTemplate
      eyebrow="Benefits"
      headline="Purpose-built AI analysis to improve screening efficiency, consistency, and clinical decision support."
      benefits={benefits}
      features={features}
      featureCta={{ text: 'Explore Astra', href: '#/astra' }}
      comparison={{
        beforeImage: 'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1600',
        afterImage: 'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1600',
        beforeLabel: 'Before',
        afterLabel: 'After',
      }}
    />
  );
};

export default BenefitsSection;
