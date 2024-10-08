import React from 'react';
import { Check } from 'lucide-react';
import { useQuery } from 'react-query';

// Mock API call
const fetchPricingPlans = async () => {
  // In a real scenario, this would be an API call
  return [
    {
      name: 'Free',
      price: '$0',
      features: ['Essential components', 'Basic documentation', 'Community support'],
      color: '#56CCF2',
      buttonText: 'Start Free',
    },
    {
      name: 'Premium',
      price: '$49',
      features: ['Advanced components', 'Premium support', 'Theme customization', 'Private Slack channel'],
      color: '#2F80ED',
      buttonText: 'Upgrade to Premium',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Full customization', 'Dedicated support team', 'SLA', 'On-premise deployment'],
      color: '#F2994A',
      buttonText: 'Contact Us',
    },
  ];
};

const Pricing: React.FC = () => {
  const { data: plans, isLoading, error } = useQuery('pricingPlans', fetchPricingPlans);

  if (isLoading) return <div className="text-center py-20">Loading pricing plans...</div>;
  if (error) return <div className="text-center py-20">Error loading pricing plans. Please try again later.</div>;

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans?.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingCard: React.FC<{
  name: string;
  price: string;
  features: string[];
  color: string;
  buttonText: string;
}> = ({ name, price, features, color, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6" style={{ backgroundColor: color }}>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-4xl font-bold text-white">{price}</p>
        {price !== 'Custom' && <p className="text-white opacity-75">per month</p>}
      </div>
      <div className="p-6">
        <ul className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className="w-full py-2 px-4 rounded-md font-semibold text-white transition duration-300"
          style={{ backgroundColor: color }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Pricing;