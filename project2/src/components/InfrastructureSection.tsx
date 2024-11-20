import React from 'react';

const brands = [
  { name: 'Instacart', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Instacart_logo.svg' },
  { name: 'Salesforce', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Slack', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Shopify', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Lyft', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lyft_logo.svg' },
  { name: 'Zoom', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Zoom_logo.svg' },
];

export function InfrastructureSection() {
  return (
    <section className="container mx-auto px-6 py-24 bg-gradient-to-br from-purple-100 to-blue-50 rounded-3xl">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Financial infrastructure for the internet
        </h2>
        <p className="text-gray-600 text-xl">
          Millions of companies of all sizes—from startups to Fortune 500s—use our software and APIs to accept payments,
          send payouts, and manage their businesses online.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start now
          </button>
          <button className="text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact sales →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.src}
            alt={brand.name}
            className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </section>
  );
}