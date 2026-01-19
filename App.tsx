import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import { MouseFollower } from './components/MouseFollower';
import { PageView, Deal } from './types';

// Page Views
import ContactHero from './components/ContactHero';
import ContactFormSection from './components/ContactFormSection';
import FAQSection from './components/FAQSection';
import AboutHero from './components/AboutHero';
import StatsBar from './components/StatsBar';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import HowItWorksHero from './components/HowItWorksHero';
import HowItWorksProcess from './components/HowItWorksProcess';
import HowItWorksTech from './components/HowItWorksTech';
import HomeHero from './components/HomeHero';
import HomeFeatures from './components/HomeFeatures';
import DealsPage from './components/DealsPage';

// New Pages
import FeaturesPage from './components/FeaturesPage';
import PricingPage from './components/PricingPage';
import AIAssistantPage from './components/AIAssistantPage';
import MobileAppPage from './components/MobileAppPage';
import BrowserExtensionPage from './components/BrowserExtensionPage';
import AffiliateDisclosurePage from './components/AffiliateDisclosurePage';
import DMCAPage from './components/DMCAPage';
import DealDetailPage from './components/DealDetailPage';
import DashboardPage from './components/DashboardPage';
import AIChatPage from './components/AIChatPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleDealClick = (deal: Deal) => {
    setSelectedDeal(deal);
    setCurrentView('deal-detail');
  };

  const isFullScreenPage = currentView === 'dashboard' || currentView === 'ai-chat';

  return (
    <div className="min-h-screen relative overflow-hidden font-body selection:bg-neon-cyan selection:text-bg-primary">
      <BackgroundEffects />
      <MouseFollower />
      
      {/* Hide Navbar only on Dashboard if desired, but typically we keep it or replace it. 
          Given the Dashboard design has its own sidebar, we can keep the top Navbar for consistency 
          or conditionally render a Dashboard-specific Navbar. 
          For simplicity and continuity, we keep the main Navbar but the DashboardPage manages its own layout. */}
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      
      <main className={`relative z-10 ${isFullScreenPage ? 'pt-20' : 'pt-24'} ${isFullScreenPage ? 'pb-0' : 'pb-12'}`}>
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-500">
            <HomeHero />
            <StatsBar />
            <HomeFeatures />
            <MissionSection />
          </div>
        )}

        {currentView === 'deals' && <DealsPage onDealClick={handleDealClick} />}

        {currentView === 'deal-detail' && selectedDeal && (
          <DealDetailPage deal={selectedDeal} onBack={() => setCurrentView('deals')} />
        )}

        {currentView === 'dashboard' && <DashboardPage />}
        
        {currentView === 'ai-chat' && <AIChatPage />}

        {currentView === 'contact' && (
          <div className="animate-in fade-in duration-500">
            <ContactHero />
            <ContactFormSection />
            <FAQSection />
          </div>
        )}

        {currentView === 'about' && (
          <div className="animate-in fade-in duration-500">
            <AboutHero />
            <StatsBar />
            <MissionSection />
            <TeamSection />
          </div>
        )}

        {currentView === 'how-it-works' && (
          <div className="animate-in fade-in duration-500">
            <HowItWorksHero />
            <HowItWorksProcess />
            <HowItWorksTech />
          </div>
        )}

        {/* New Pages */}
        {currentView === 'features' && <FeaturesPage />}
        {currentView === 'pricing' && <PricingPage />}
        {currentView === 'ai-assistant' && <AIAssistantPage />}
        {currentView === 'mobile-app' && <MobileAppPage />}
        {currentView === 'extension' && <BrowserExtensionPage />}
        {currentView === 'affiliate-disclosure' && <AffiliateDisclosurePage />}
        {currentView === 'dmca' && <DMCAPage />}

      </main>

      {/* Hide Footer on Dashboard and Chat to look like a true app interface */}
      {!isFullScreenPage && <Footer onNavigate={setCurrentView} />}
    </div>
  );
};

export default App;