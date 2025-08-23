import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PrestationsSection from '@/components/PrestationsSection';
import GalerieSection from '@/components/GalerieSection';
import FAQSection from '@/components/FAQSection';
import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PrestationsSection />
        <GalerieSection />
        <FAQSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
