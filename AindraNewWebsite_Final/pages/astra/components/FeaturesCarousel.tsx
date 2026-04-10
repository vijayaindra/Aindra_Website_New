import React, { useState, useEffect } from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: 0,
    title: "Precision Staining",
    description: "Our advanced Astra platform delivers unrivaled accuracy in tissue staining, ensuring consistent results across high-volume laboratory workloads. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 1,
    title: "AI-Driven Insights",
    description: "Leverage the power of deep learning to identify patterns and anomalies with superhuman precision. Astra's AI core processes millions of pixels to assist pathologists in faster decision making.",
    image: "https://images.unsplash.com/photo-1579154234431-da711f1ae5f1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Scalable Workflow",
    description: "Seamlessly integrate Astra into your existing laboratory information systems. Our modular design allows you to scale from single-clinic operations to multi-site diagnostic networks.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Real-time Monitoring",
    description: "Keep track of every slide and every stain in real-time. Our intuitive dashboard provides immediate feedback on system performance and reagent levels to prevent downtime.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    title: "Cloud Connectivity",
    description: "Securely access your data from anywhere in the world. Astra's cloud-native architecture ensures your diagnostic results are backed up and available for remote consultation.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
  }
];

const FeaturesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = features[activeIndex];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[#f0f3f5] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 min-h-[500px] transition-all duration-700 ease-in-out">
          <div className="w-full md:w-3/5 overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                key={currentFeature.image}
                src={currentFeature.image} 
                alt={currentFeature.title} 
                className="w-full h-full object-cover block animate-in fade-in zoom-in-95 duration-1000"
              />
              <div className="absolute inset-0 bg-blue-400/5 mix-blend-screen pointer-events-none"></div>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex flex-col justify-center pr-4">
            <h2 key={`title-${activeIndex}`} className="text-[28px] font-semibold text-gray-900 mb-6 animate-in slide-in-from-right-4 duration-500">
              {currentFeature.title}
            </h2>
            <p key={`desc-${activeIndex}`} className="text-[15px] leading-relaxed text-gray-600 font-normal animate-in slide-in-from-right-8 duration-700">
              {currentFeature.description}
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center gap-3 w-full max-w-[800px] mx-auto">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-[3px] flex-1 rounded-full transition-all duration-500 ease-out ${
                index === activeIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;