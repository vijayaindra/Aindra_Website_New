import React from 'react';
import { ResponsiveBenefitsTemplate } from '../../../components/ResponsiveBenefitsTemplate';

const benefits = [
  {
    title: 'Precision Staining',
    description: 'Deliver consistent, reproducible staining outcomes across high-throughput pathology workloads.',
  },
  {
    title: 'AI-Driven Insights',
    description: 'Use machine intelligence to surface patterns and anomalies for faster, more confident review.',
  },
  {
    title: 'Scalable Workflow',
    description: 'Adopt in single labs or distributed networks with modular workflows that grow with demand.',
  },
  {
    title: 'Real-time Visibility',
    description: 'Monitor throughput, reagent health, and system status to reduce downtime and improve utilization.',
  },
];

const features = [
  {
    title: 'Feature 1: Precision Staining',
    description:
      'Clustr enables highly consistent tissue staining with process controls designed for demanding clinical environments.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 2: AI-Driven Insights',
    description:
      'Deep-learning assisted review helps teams detect subtle variation and improve workflow confidence at scale.',
    image: 'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 3: Scalable Workflow',
    description:
      'Integrate with existing systems and expand from pilot deployments to multi-site diagnostic networks.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 4: Real-time Monitoring',
    description:
      'Track operations and quality metrics in real-time so teams can respond quickly and avoid process interruptions.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 5: Cloud Connectivity',
    description:
      'Enable secure remote access and collaboration for distributed pathology teams and expert consultation.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <ResponsiveBenefitsTemplate
      eyebrow="Benefits"
      headline="Built to improve staining consistency, diagnostic efficiency, and scalability in modern pathology labs."
      benefits={benefits}
      features={features}
      featureCta={{ text: 'Explore Clustr', href: '#/clustr' }}
    />
  );
};

export default BenefitsSection;
