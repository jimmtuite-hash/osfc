import React from 'react';
import { BookOpen, Download, Shield, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  openIndexModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, openIndexModal }) => {
  return (
    <footer className="bg-[#FAF7F0] dark:bg-[#12100E] border-t border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-300 dark:border-stone-700 shrink-0">
                <img
                  src="/assets/images/osfc_seal.jpg"
                  alt="OSFC Seal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 leading-tight">
                  Order of Saints Francis & Clare
                </h3>
                <span className="text-xs font-sans tracking-wider uppercase text-amber-800 dark:text-amber-500 font-medium">
                  Liberal Catholic Apostolic Church
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-sans max-w-sm">
              A dispersed Franciscan religious order following Jesus Christ according to the Holy Gospel in simplicity, minority, fraternity, reconciliation, and reverent care for Sister Mother Earth.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-900 dark:text-amber-400 font-serif italic">
              <Heart className="w-3.5 h-3.5" />
              <span>“May every household, fraternity and ministry be marked by peace and all good.” (¶ 241)</span>
            </div>
          </div>

          {/* Navigational Links */}
          <div className="md:col-span-4 space-y-3 font-sans">
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
              The Living Documents
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors cursor-pointer text-left"
                >
                  The Rule of Life (¶¶ 6–62)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors cursor-pointer text-left"
                >
                  The Constitutions (¶¶ 63–146)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('customs')}
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors cursor-pointer text-left"
                >
                  The Customary & Daily Observance (¶¶ 147–236)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formation')}
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors cursor-pointer text-left text-amber-900 dark:text-amber-400 font-medium"
                >
                  School of Formation (Prospectus)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journey')}
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors cursor-pointer text-left"
                >
                  A 30-Day Reflection Plan (Pages 41–43)
                </button>
              </li>
              <li>
                <button
                  onClick={openIndexModal}
                  className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <BookOpen className="w-3 h-3 text-amber-700" />
                  <span>Comprehensive Glossary & Subject Index</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Governance & Safeguarding Notice */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-700" />
              <span>Safeguarding & Governance</span>
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              All members and ministries observe applicable civil law, LCAC Canons, and OSFC safeguarding policies. No appeal to religious obedience may ever override safeguarding, conscience, or the law (¶ 127).
            </p>
            <div className="pt-1 flex flex-col gap-1.5">
              <a
                href="/assets/aistudio/OSFC_Governing_Documents_Revised_7170930f.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-800 dark:text-amber-400 hover:underline underline-offset-4"
              >
                <Download className="w-3 h-3" />
                <span>Governing Documents PDF (Revised)</span>
              </a>
              <a
                href="/assets/aistudio/OSFC_Formation_Without_Walls_Full_Prospectus_2026__1__deb11ad1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-800 dark:text-amber-400 hover:underline underline-offset-4"
              >
                <Download className="w-3 h-3" />
                <span>Formation Prospectus PDF (2026)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quiet institutional copyright bar */}
        <div className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400 font-sans">
          <div>
            Order of Saints Francis and Clare (OSFC) · Liberal Catholic Apostolic Church
          </div>
          <div className="flex items-center gap-3">
            <span>Revised Edition</span>
            <span aria-hidden="true">·</span>
            <span className="font-serif italic text-amber-800 dark:text-amber-400 font-medium">Pax et Bonum</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
