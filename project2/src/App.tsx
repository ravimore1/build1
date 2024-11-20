import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-900">
      <Navbar />
      <HeroSection />
      <InfrastructureSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;