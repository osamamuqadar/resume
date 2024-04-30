import React from 'react';

const PricingCard = ({ plan, price, features, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt={plan} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{plan}</div>
        <p className="text-gray-700 text-base">{price}</p>
        <ul className="mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Select Plan
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      plan: 'Basic',
      price: '$10/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      image: 'website-design-preview-460598.jpg',
    },
    {
      plan: 'Pro',
      price: '$20/month',
      features: ['All Basic features', 'Additional feature 1', 'Additional feature 2'],
      image: 'website-design-preview-460598.jpg',
    },
    {
      plan: 'Enterprise',
      price: '$50/month',
      features: ['All Pro features', 'Enterprise-level support'],
      image: 'website-design-preview-460598.jpg',
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
