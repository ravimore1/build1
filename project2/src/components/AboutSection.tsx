import React from 'react';
import { Shield, Globe2, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Bank-grade security protocols and end-to-end encryption ensure your payments are always protected.'
  },
  {
    icon: Globe2,
    title: 'Global Coverage',
    description: 'Support for 180+ countries and 135+ currencies, making international payments seamless.'
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Real-time payment processing and instant notifications for all your transactions.'
  }
];

export function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
            alt="Team collaboration"
            className="rounded-3xl object-cover w-full h-[600px]"
          />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 font-medium">Currently processing</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                $2.4M+ in transactions
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-purple-600 font-semibold">ABOUT US</span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              Transforming the future of digital payments
            </h2>
            <p className="text-gray-600 text-lg">
              Since 2015, we've been empowering businesses with innovative payment solutions. 
              Our platform combines cutting-edge technology with user-friendly interfaces to 
              make global transactions simple, secure, and efficient.
            </p>
          </div>

          <div className="grid gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Learn more
            </button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              View documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}