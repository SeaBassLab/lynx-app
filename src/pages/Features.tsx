import React from 'react';
import { Zap, Feather, Shield, Smartphone, Layers, Code, Palette, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: <Feather />, title: 'Customizable Components', description: 'Easily adapt components to match your brand and design requirements.' },
    { icon: <Zap />, title: 'Lightweight', description: 'Minimal dependencies for faster load times and smoother performance.' },
    { icon: <Shield />, title: 'Enterprise Ready', description: 'Advanced features and security measures for large-scale applications.' },
    { icon: <Smartphone />, title: 'Responsive Design', description: 'Optimized for a seamless experience across all devices and screen sizes.' },
    { icon: <Layers />, title: 'Modular Architecture', description: 'Import only the components you need to keep your bundle size small.' },
    { icon: <Code />, title: 'TypeScript Support', description: 'Full TypeScript definitions for enhanced developer experience and type safety.' },
    { icon: <Palette />, title: 'Theming System', description: 'Powerful theming capabilities to create consistent and branded interfaces.' },
    { icon: <Users />, title: 'Accessibility', description: 'WCAG compliant components ensuring your app is usable by everyone.' },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Lynx UI Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6 text-blue-500' })}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;