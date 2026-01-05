'use client';

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { VisionStatement } from './components/VisionStatement';
import { ProgramSection } from './components/ProgramSection';
import { ClimateCompass } from './components/ClimateCompass';
import { ResearchReport } from './components/ResearchReport';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-harmattan selection:bg-terracotta selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <VisionStatement />
        <ProgramSection />
        <ClimateCompass />
        <ResearchReport />
        <Portfolio />
        <Team />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
