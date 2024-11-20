import React from 'react';
import { BarChart3, DollarSign, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="container mx-auto px-6 pt-20 pb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm">
            PAYMENTS MADE EASY
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Simplifying global payments for startup freelancers
          </h1>
          
          <p className="text-gray-200 text-lg">
            Streamline your cross-border transactions, access real-time currency conversion, 
            and ensure secure, automated payments for freelancers worldwide.
          </p>
          
          <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Get started now
            <span className="ml-2">→</span>
          </button>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <DollarSign className="text-white mb-2" size={24} />
              <div className="text-2xl font-bold text-white">$12M+</div>
              <div className="text-gray-300 text-sm">Processed monthly</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Users className="text-white mb-2" size={24} />
              <div className="text-2xl font-bold text-white">20k+</div>
              <div className="text-gray-300 text-sm">Active freelancers</div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <BarChart3 className="text-white mb-2" size={24} />
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-gray-300 text-sm">Success rate</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
            alt="Freelancer working"
            className="rounded-3xl object-cover w-full h-[600px]"
          />
          
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Monthly revenue</span>
                <span className="text-green-500">+14.5%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">$9,651</div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Avg. transaction</span>
                <span className="text-green-500">+8.1%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">$833</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}