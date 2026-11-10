import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutCharismSection } from './components/AboutCharismSection.tsx';
import { DocumentsReader } from './components/DocumentsReader.tsx';
import { VocationsSection } from './components/VocationsSection.tsx';
import { DailyLifeCustomsSection } from './components/DailyLifeCustomsSection.tsx';
import { ThirtyDayJourneySection } from './components/ThirtyDayJourneySection.tsx';
import { PrayersAndDevotionsSection } from './components/PrayersAndDevotionsSection.tsx';
import { FormationSchoolSection } from './components/FormationSchoolSection.tsx';
import { IndexGlossaryModal } from './components/IndexGlossaryModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'documents' | 'formation' | 'vocations' | 'customs' | 'journey' | 'prayers'>('about');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isIndexModalOpen, setIsIndexModalOpen] = useState(false);
  const [targetParagraph, setTargetParagraph] = useState<number | null>(null);

  // Sync dark class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navigateToParagraph = (paraNum: number) => {
    setTargetParagraph(paraNum);
    setActiveTab('documents');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col parchment-bg text-[#241710] dark:text-[#FAF5ED] font-sans selection:bg-[#8C6219] selection:text-white transition-colors">
      
      {/* Universal Top Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab: string) => {
          setActiveTab(tab as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        openIndexModal={() => setIsIndexModalOpen(true)}
      />

      {/* Main Tab Content */}
      <main className="flex-1">
        {activeTab === 'about' && (
          <>
            <HeroSection
              onNavigate={(tab: string) => {
                setActiveTab(tab as any);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <AboutCharismSection
              onNavigate={(tab: string) => {
                setActiveTab(tab as any);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {activeTab === 'documents' && (
          <DocumentsReader
            initialParagraph={targetParagraph}
            onClearInitialParagraph={() => setTargetParagraph(null)}
          />
        )}

        {activeTab === 'formation' && (
          <FormationSchoolSection
            onNavigateToParagraph={navigateToParagraph}
            onOpenInquiry={() => {
              setActiveTab('vocations');
              window.scrollTo({ top: 1200, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'vocations' && (
          <VocationsSection onNavigateToParagraph={navigateToParagraph} />
        )}

        {activeTab === 'customs' && (
          <DailyLifeCustomsSection />
        )}

        {activeTab === 'journey' && (
          <ThirtyDayJourneySection onNavigateToParagraph={navigateToParagraph} />
        )}

        {activeTab === 'prayers' && (
          <PrayersAndDevotionsSection />
        )}
      </main>

      {/* Comprehensive Index and Glossary Modal */}
      <IndexGlossaryModal
        isOpen={isIndexModalOpen}
        onClose={() => setIsIndexModalOpen(false)}
        onNavigateToParagraph={navigateToParagraph}
      />

      {/* Footer */}
      <Footer
        onNavigate={(tab: string) => {
          setActiveTab(tab as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        openIndexModal={() => setIsIndexModalOpen(true)}
      />

    </div>
  );
}
