import React from 'react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <span className="text-white font-bold text-xl">PayFlow</span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-200 hover:text-white">Business</a>
            <a href="#" className="text-gray-200 hover:text-white">Features</a>
            <a href="#" className="text-gray-200 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-200 hover:text-white">Resources</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-200 hover:text-white">Log in</button>
          <button className="bg-white text-purple-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}