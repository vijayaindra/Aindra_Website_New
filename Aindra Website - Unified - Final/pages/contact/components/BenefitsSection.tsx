import React from 'react';
import { ResponsiveBenefitsTemplate } from '../../../components/ResponsiveBenefitsTemplate';

const benefits = [
  {
    title: 'Clinical Support Coverage',
    description: 'Get guided assistance across onboarding, diagnostics workflows, and issue triage from the Aindra team.',
  },
  {
    title: 'Faster Issue Resolution',
    description: 'Structured support flow helps your team report issues clearly and receive precise, actionable responses.',
  },
  {
    title: 'Product-led Assistance',
    description: 'Support experiences are aligned to your specific product setup, workflow context, and deployment type.',
  },
  {
    title: 'Continuous Improvement',
    description: 'Feedback from support interactions feeds into product quality and operational reliability improvements.',
  },
];

const features = [
  {
    title: 'Feature 1: Guided Support Intake',
    description:
      'Capture issue context consistently so support teams can triage faster and reduce back-and-forth communication.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 2: Workflow-aware Responses',
    description:
      'Support recommendations are framed around real pathology lab workflows for faster actionability.',
    image: 'https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 3: Scalable Engagement',
    description:
      'Serve single sites and large multi-center programs through clear escalation and follow-up pathways.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 4: Real-time Tracking',
    description:
      'Monitor support progress and status transparently to keep teams aligned during issue resolution.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Feature 5: Connected Communication',
    description:
      'Enable secure handoffs between operators, experts, and support staff for complete case continuity.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <ResponsiveBenefitsTemplate
      eyebrow="Support"
      headline="A responsive support experience built for clinical teams, real workflows, and rapid resolution."
      benefits={benefits}
      features={features}
      featureCta={{ text: 'Contact Support', href: '#/contact' }}
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
