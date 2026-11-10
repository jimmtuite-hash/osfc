import React, { useState } from 'react';
import { BookOpen, Moon, Sun, Download, Menu, X, Cross } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  openIndexModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  toggleDarkMode,
  openIndexModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'Charism & Life' },
    { id: 'documents', label: 'The Rule & Law' },
    { id: 'formation', label: 'School of Formation' },
    { id: 'vocations', label: 'Vocations' },
    { id: 'customs', label: 'Daily Customary' },
    { id: 'journey', label: '30-Day Plan' },
    { id: 'prayers', label: 'Prayers & Feasts' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6ED]/95 dark:bg-[#15120E]/95 backdrop-blur-md border-b border-[#D8C7A0]/70 dark:border-[#3E3120] transition-colors shadow-[0_2px_15px_-3px_rgba(50,30,15,0.06)]">
      {/* Top thin gold illumination pinstripe */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#C59B27] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-22">
          
          {/* Zone 1: Brand Wordmark styled after Front Cover */}
          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-3.5 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded-sm"
          >
            {/* Gilded Seal Badge */}
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-b from-[#E6CA65] via-[#C59B27] to-[#8C6212] shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#FAF6ED] dark:bg-[#1C1712] overflow-hidden p-0.5 flex items-center justify-center">
                <img
                  src="/assets/images/osfc_seal.jpg"
                  alt="OSFC Official Seal"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <div className="whitespace-nowrap shrink-0">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] uppercase text-[#855B1B] dark:text-[#E6CA65] font-semibold block leading-tight">
                Order of
              </span>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#2C1E14] dark:text-[#F5EFE6] block leading-tight group-hover:text-[#855B1B] dark:group-hover:text-[#E6CA65] transition-colors">
                Saints Francis and Clare
              </span>
              <span className="text-[10px] font-serif italic text-stone-600 dark:text-stone-400 block tracking-wide">
                A Dispersed Franciscan Order · LCAC
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links with Classic Lettering */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-wider font-medium text-stone-700 dark:text-stone-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all whitespace-nowrap cursor-pointer pb-1.5 pt-1 border-b-2 font-sans ${
                  activeTab === link.id
                    ? 'border-[#B48628] text-[#784A12] dark:text-[#F3C969] font-bold'
                    : 'border-transparent hover:text-[#2C1E14] dark:hover:text-[#FAF6ED] hover:border-[#D8C7A0]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Actions & Book Reader Quick Access */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            <button
              onClick={openIndexModal}
              title="Search Index & Glossary"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-serif font-semibold text-[#5A3811] dark:text-[#EAD5A5] bg-[#F4ECD8] dark:bg-[#251E17] hover:bg-[#EDE3C7] dark:hover:bg-[#32281E] border border-[#D5C294] dark:border-[#4D3B25] rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#A1711A] dark:text-[#F3C969]" />
              <span>Index & Glossary</span>
            </button>

            {/* Official PDF Download Button */}
            <a
              href="/assets/aistudio/OSFC_Governing_Documents_Revised_7170930f.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-serif font-bold text-[#2C1E14] dark:text-[#FAF6ED] bg-gradient-to-r from-[#F6ECCF] via-[#ECD9A5] to-[#E2C77D] dark:from-[#3D2F1E] dark:via-[#4D3C25] dark:to-[#382B1B] hover:brightness-105 border border-[#C5A358] dark:border-[#6B532C] rounded-md transition-all shadow-xs whitespace-nowrap"
              title="Download Official Revised Governing Documents PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#784A12] dark:text-[#F3C969]" />
              <span className="hidden sm:inline">Governing Docs</span>
              <span>PDF</span>
            </a>

            {/* Day / Night Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle candlelit dark theme"
              className="p-2 rounded-md text-stone-600 dark:text-stone-300 hover:bg-[#EDE4D0] dark:hover:bg-[#251E17] border border-transparent hover:border-[#D8C7A0] dark:hover:border-[#4D3B25] transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#F3C969]" /> : <Moon className="w-4 h-4 text-[#784A12]" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="xl:hidden p-2 text-stone-700 dark:text-stone-300 hover:bg-[#EDE4D0] dark:hover:bg-[#251E17] rounded-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-[#D8C7A0] dark:border-[#3E3120] bg-[#FAF6ED] dark:bg-[#15120E]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 text-sm font-serif font-medium rounded-md transition-colors ${
                    activeTab === link.id
                      ? 'bg-[#EFE4C8] dark:bg-[#2A2118] text-[#784A12] dark:text-[#F3C969] font-bold'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-[#F4EBD4] dark:hover:bg-[#201A14]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-[#D8C7A0] dark:border-[#3E3120] flex flex-col gap-2">
                <button
                  onClick={() => {
                    openIndexModal();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-serif text-[#5A3811] dark:text-[#EAD5A5] hover:bg-[#F4EBD4] dark:hover:bg-[#201A14] rounded-md"
                >
                  <BookOpen className="w-4 h-4 text-[#A1711A]" />
                  <span>Subject Index & Glossary</span>
                </button>
                <a
                  href="/assets/aistudio/OSFC_Formation_Without_Walls_Full_Prospectus_2026__1__deb11ad1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-serif text-[#5A3811] dark:text-[#EAD5A5] hover:bg-[#F4EBD4] dark:hover:bg-[#201A14] rounded-md"
                >
                  <Download className="w-4 h-4 text-[#A1711A]" />
                  <span>Formation Prospectus PDF (2026)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom subtle hairline */}
      <div className="h-[1px] w-full bg-[#EADBBD] dark:bg-[#2C2319]" />
    </header>
  );
};
