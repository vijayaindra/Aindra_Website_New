import React from 'react';
import { ResponsiveBenefitsTemplate } from '../../../components/ResponsiveBenefitsTemplate';

const benefits = [
  {
    title: 'Diagnostic-grade Imaging',
    description: 'Capture high-quality digital slides with consistent visual fidelity suitable for clinical review and collaboration.',
  },
  {
    title: 'Fast Review Cycles',
    description: 'Accelerate review by combining scanner output with workflow-aware digital tooling for rapid case turnaround.',
  },
  {
    title: 'Cross-site Collaboration',
    description: 'Share and review scans securely across distributed teams without compromising quality or process control.',
  },
  {
    title: 'Operational Scalability',
    description: 'Deploy VisionX from focused labs to broad network programs with consistent performance characteristics.',
  },
];

const features = [
  {
    title: 'Feature 1: High-resolution Scanning',
    description:
      'VisionX captures whole-slide images with diagnostic clarity, preserving morphology for confident digital pathology review.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 2: AI-Driven Insights',
    description:
      'Integrated intelligence helps prioritize suspicious regions and improves reviewer efficiency in demanding workflows.',
    image: 'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 3: Workflow Integration',
    description:
      'Designed to fit existing LIS/PACS-style processes so teams can adopt digital review with minimal friction.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 4: Real-time Monitoring',
    description:
      'Track scanner activity and throughput in real-time to support uptime, planning, and quality assurance.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 5: Cloud Connectivity',
    description:
      'Enable secure, distributed access to scanned slides for collaborative diagnostics and remote consultations.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <ResponsiveBenefitsTemplate
      eyebrow="Benefits"
      headline="Built for high-fidelity digital scanning, faster case review, and scalable pathology operations."
      benefits={benefits}
      features={features}
      featureCta={{ text: 'Explore VisionX', href: '#/visionx' }}
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
