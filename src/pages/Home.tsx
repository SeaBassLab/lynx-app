import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Feather, Shield, Smartphone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Build Beautiful Interfaces with Lynx UI</h1>
          <p className="text-xl mb-8">Flexible, fast, and feature-rich UI components for React.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/pricing" className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
              Get Started for Free
            </Link>
            <Link to="/docs" className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-500 transition duration-300">
              Explore Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Lynx UI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Feather className="h-12 w-12 text-blue-500" />}
              title="Customizable Components"
              description="Styled for flexibility and performance, easily adaptable to your brand."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-blue-500" />}
              title="Lightweight"
              description="Minimal dependencies, easy integration into your existing projects."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-blue-500" />}
              title="Enterprise Ready"
              description="Advanced features and premium support for business needs."
            />
            <FeatureCard
              icon={<Smartphone className="h-12 w-12 text-blue-500" />}
              title="Responsive Design"
              description="Optimized for any device, from mobile to desktop."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Developers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Lynx UI has dramatically improved our development speed. The components are intuitive and highly customizable."
              author="Sarah Johnson"
              role="Senior Frontend Developer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              quote="The documentation is top-notch, and the support team is incredibly responsive. Lynx UI is a game-changer for our projects."
              author="Michael Chen"
              role="Tech Lead"
              image="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <TestimonialCard
              quote="As a startup, we needed a UI library that could scale with us. Lynx UI has been the perfect choice, offering both simplicity and power."
              author="Emily Rodriguez"
              role="CTO"
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; image: string }> = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;