import React from 'react';
import { sectionContainer, sectionShell } from '../../../components/layout';
import purposeDrivenInnovationImage from '../../../assets/Aindra_team/Purpose-driven innovation.png';
import clinicalReliabilityFirstImage from '../../../assets/Aindra_team/Clinical reliability first.png';
import collaborativeGrowthMindsetImage from '../../../assets/Aindra_team/Collaborative growth mindset.png';
import accessibleImpactAtScaleImage from '../../../assets/Aindra_team/Accessible impact at scale.png';
import { SectionEyebrow } from '../../../components/SectionEyebrow';

const benefits = [
  {
    title: 'Purpose-driven innovation',
    description:
      'We build practical healthcare technologies that directly improve screening quality, clinical confidence, and patient outcomes.',
    circleOnLeft: true,
    image: purposeDrivenInnovationImage,
  },
  {
    title: 'Clinical reliability first',
    description:
      'Our solutions are designed for consistent performance in real-world labs with strong focus on diagnostic relevance and workflow stability.',
    circleOnLeft: false,
    image: clinicalReliabilityFirstImage,
  },
  {
    title: 'Collaborative growth mindset',
    description:
      'We combine multidisciplinary expertise and open collaboration to deliver scalable, future-ready healthcare innovation.',
    circleOnLeft: true,
    image: collaborativeGrowthMindsetImage,
  },
  {
    title: 'Accessible impact at scale',
    description:
      'Our mission is to make precision diagnostics faster, smarter, and more accessible across diverse healthcare environments.',
    circleOnLeft: false,
    image: accessibleImpactAtScaleImage,
  },
];

const BenefitItem = ({
  title,
  description,
  circleOnLeft = true,
  image,
}: {
  title: string;
  description: string;
  circleOnLeft?: boolean;
  image: string;
}) => (
  <div className="flex items-center gap-8 flex-row">
    <img
      src={image}
      alt={title}
      className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-center shrink-0 block"
    />
    <div className="max-w-md">
      <h3 className="text-[24px] font-semibold text-gray-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-[17px] leading-relaxed text-gray-600 font-normal">{description}</p>
    </div>
  </div>
);

const BenefitsSection: React.FC = () => {
  return (
    <section className={`${sectionShell} w-full bg-white py-16 md:py-20 lg:py-24`}>
      <div className={sectionContainer}>
        <div className="flex flex-col md:flex-row items-start w-full mb-14 md:mb-16">
          <div className="w-[120px] md:w-[160px] shrink-0 pt-1 mr-6 md:mr-10 mb-6 md:mb-0">
            <SectionEyebrow label="Our Values" />
          </div>

          <div className="w-full md:flex-1 md:pl-10">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[1.2] text-[#111827] tracking-[-0.015em] max-w-[1000px]">
              Building healthcare technology that makes diagnostics faster, smarter, and more accessible.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-14 md:gap-y-16 gap-x-12 md:gap-x-16 md:pl-10">
          {benefits.map((benefit) => (
            <BenefitItem
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              circleOnLeft={benefit.circleOnLeft}
              image={benefit.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
