import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Free',
      price: '$0',
      features: [
        'Unlimited Feedback Links',
        'Anonymous Feedback',
        'Customizable Portals',
      ],
    },
    {
      title: 'Pro',
      price: '$29',
      features: [
        'Unlimited Feedback Links',
        'Anonymous Feedback',
        'Customizable Portals',
        'Real-Time Feedback',
      ],
    },
    {
      title: 'Enterprise',
      price: 'Contact us',
      features: [
        'Unlimited Feedback Links',
        'Anonymous Feedback',
        'Customizable Portals',
        'Real-Time Feedback',
        'Answer Feedback',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 font-sans">
      <header className="py-4 px-6 max-w-6xl mx-auto">
        <nav className="flex justify-between items-center">
          <span className="text-xl font-bold">TeamPulse</span>
          <div className="flex items-center space-x-6">
            <a href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Login</a>
            <Button className="bg-gray-900 text-white hover:bg-gray-700 text-sm">Sign Up</Button>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Choose the right plan for <span className="text-pink-500">your business</span>
        </h1>
        <p className="text-lg mb-10 text-gray-600">
          Flexible pricing options to fit your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card key={plan.title} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50 py-4">
                <CardTitle className="text-xl font-semibold">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <ul className="text-left mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 mb-2">{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-700 py-2 text-sm font-semibold">
                  Choose {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
