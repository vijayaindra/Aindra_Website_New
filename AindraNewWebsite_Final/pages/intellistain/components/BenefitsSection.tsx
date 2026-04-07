import React from 'react';
import { ResponsiveBenefitsTemplate } from '../../../components/ResponsiveBenefitsTemplate';

const benefits = [
  {
    title: 'Precision Staining',
    description: 'Achieve consistent staining quality across high-volume runs with reduced human variation and fewer rework cycles.',
  },
  {
    title: 'AI-Assisted Validation',
    description: 'Built-in intelligence supports quality checks and highlights outliers before they affect downstream diagnostics.',
  },
  {
    title: 'Scalable Workflow',
    description: 'Integrates into existing lab operations and scales from single sites to distributed diagnostic networks.',
  },
  {
    title: 'Operational Reliability',
    description: 'Track performance and utilization with clear visibility so labs can reduce downtime and optimize throughput.',
  },
];

const features = [
  {
    title: 'Feature 1: Precision Staining',
    description:
      'Our Intellistain platform delivers repeatable, high-quality staining results for routine and high-throughput laboratory workflows.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 2: AI-Driven Insights',
    description:
      'Deep-learning aided checks help identify anomalies quickly and maintain confidence in slide quality across large batches.',
    image: 'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 3: Scalable Workflow',
    description:
      'Modular design and interoperable workflows allow smooth expansion from pilot deployments to multi-center operations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 4: Real-time Monitoring',
    description:
      'Continuous visibility into processing and status helps teams proactively maintain quality and reduce turnaround risk.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 5: Cloud Connectivity',
    description:
      'Secure access and distributed collaboration enable consistent diagnostics across teams and locations.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <ResponsiveBenefitsTemplate
      eyebrow="Benefits"
      headline="Designed for consistent stain quality, faster workflows, and dependable lab-scale operations."
      benefits={benefits}
      features={features}
      featureCta={{ text: 'Explore Intellistain', href: '#/intellistain' }}
    />
  );
};

export default BenefitsSection;
