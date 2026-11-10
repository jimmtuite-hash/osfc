import React from 'react';
import { Compass, BookOpen, HeartHandshake, ShieldCheck, ArrowRight, FileText, Cross, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden parchment-bg py-12 lg:py-20 text-[#2C1E14] dark:text-[#F5EFE6] transition-colors border-b border-[#D8C7A0]/80 dark:border-[#382B1B]">
      
      {/* Background Decorative Halos & Texture */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#C59B27]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-[#E5B842]/10 dark:bg-[#C59B27]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Front Cover Frontispiece Gilded Card Container */}
        <div className="relative p-6 sm:p-10 md:p-14 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-xl space-y-8">
          
          {/* Decorative Corner Flourishes */}
          <div className="absolute top-3 left-3 text-[#B48628]/60 text-lg font-serif select-none pointer-events-none">
            ✤
          </div>
          <div className="absolute top-3 right-3 text-[#B48628]/60 text-lg font-serif select-none pointer-events-none">
            ✤
          </div>
          <div className="absolute bottom-3 left-3 text-[#B48628]/60 text-lg font-serif select-none pointer-events-none">
            ✤
          </div>
          <div className="absolute bottom-3 right-3 text-[#B48628]/60 text-lg font-serif select-none pointer-events-none">
            ✤
          </div>

          {/* Front Cover Title Block */}
          <div className="text-center space-y-3">
            <span className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-[#784A12] dark:text-[#E6CA65] font-semibold block">
              Order of
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#241710] dark:text-[#FAF5ED] uppercase leading-[1.08] text-balance">
              Saints Francis and Clare
            </h1>

            {/* Front Cover Cross Divider: — + — */}
            <div className="flex items-center justify-center gap-4 py-1 text-[#B48628] dark:text-[#E6CA65]">
              <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent via-[#B48628] to-[#B48628]" />
              <span className="text-xl font-serif font-bold select-none leading-none">†</span>
              <div className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent via-[#B48628] to-[#B48628]" />
            </div>

            <div className="font-serif text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase text-[#54381E] dark:text-[#D5C294] font-medium">
              Rule · Constitutions · Customary
            </div>

            <div className="font-serif italic text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              Revised Edition · A Franciscan Religious Order within the Liberal Catholic Apostolic Church
            </div>
          </div>

          {/* Centerpiece 2-Column Presentation: Authentic Painting & Core Charism */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
            
            {/* The Extracted Painting Frame */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-sm w-full p-2 bg-gradient-to-b from-[#ECD79A] via-[#B48628] to-[#784A12] rounded-xl shadow-2xl">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-stone-900 border-2 border-[#FAF5ED] dark:border-[#2C1E14]">
                  <img
                    src="/assets/images/page_01.jpg"
                    alt="Saint Francis and Saint Clare of Assisi overlooking Umbrian hills"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  {/* Subtle golden bottom vignette */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1F150D]/90 via-[#1F150D]/40 to-transparent p-5 text-white">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-[#F3C969] font-bold block">
                      The Umbrian Calling
                    </span>
                    <p className="font-serif text-sm italic text-stone-200 mt-0.5">
                      “Gaze upon Him, consider Him, contemplate Him, as you desire to imitate Him.”
                    </p>
                  </div>
                </div>

                {/* Gilded Seal Inset Badge */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full p-0.5 bg-gradient-to-b from-[#F3C969] via-[#B48628] to-[#54381E] shadow-xl flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#FAF6ED] dark:bg-[#1A1510] overflow-hidden p-0.5 flex items-center justify-center">
                    <img
                      src="/assets/images/osfc_seal.jpg"
                      alt="OSFC Cross Emblem"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Spiritual Declaration & Vocation Overview */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#855B1B] dark:text-[#E6CA65] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B48628]" />
                  <span>The Dispersed Franciscan Gospel Life</span>
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#241710] dark:text-[#FAF5ED] leading-snug">
                  Living the Gospel in the Heart of the World
                </h2>

                <p className="font-serif text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed illuminated-dropcap">
                  The Rule and Life of the brothers and sisters of the Order of Saints Francis and Clare is to observe the Holy Gospel of Our Lord Jesus Christ. Rather than retreating behind cloistered monastery walls, our vocation is lived in ordinary households, workplaces, and local communities—transforming each home into a little friary or convent of the heart.
                </p>
              </div>

              {/* Front Cover Quote Banner */}
              <div className="p-4 bg-[#F5ECDC] dark:bg-[#251E17] border-l-2 border-[#B48628] rounded-r-lg space-y-1">
                <p className="font-serif italic text-sm sm:text-base text-[#382415] dark:text-[#EADBB8]">
                  “Let the married Franciscan find Christ at the family table; the single Franciscan in generous availability; the worker in ordinary labour; the lay religious in the fullness of baptismal vocation; the sick in patient endurance.”
                </p>
                <div className="text-right text-[11px] font-sans font-medium text-[#784A12] dark:text-[#F3C969]">
                  — Customary ¶ 236 · Pax et Bonum
                </div>
              </div>

              {/* Action Buttons styled with gold/bronze trim */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('documents')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2C1E14] hover:bg-[#3D2C1E] text-[#FAF5ED] dark:bg-[#B48628] dark:hover:bg-[#C59B27] dark:text-[#17120D] font-serif font-bold text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4 text-[#F3C969] dark:text-[#17120D]" />
                  <span>The Rule & Constitutions</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>

                <button
                  onClick={() => onNavigate('formation')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FAF5EB] hover:bg-[#F3EADB] dark:bg-[#251E17] dark:hover:bg-[#30271E] text-[#2C1E14] dark:text-[#FAF5ED] border border-[#B48628]/60 font-serif font-semibold text-sm transition-all cursor-pointer whitespace-nowrap shadow-xs"
                >
                  <Compass className="w-4 h-4 text-[#855B1B] dark:text-[#F3C969]" />
                  <span>School of Formation</span>
                </button>

                <a
                  href="/assets/aistudio/OSFC_Governing_Documents_Revised_7170930f.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-xs font-serif font-medium text-[#784A12] hover:text-[#2C1E14] dark:text-[#E6CA65] dark:hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Official PDF</span>
                </a>
              </div>

            </div>

          </div>

          {/* Operational Marks Ribbon at the base of frontispiece */}
          <div className="pt-6 border-t border-[#D8C7A0]/70 dark:border-[#382B1B] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <div className="p-3 bg-[#FAF6EE] dark:bg-[#201A14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B] space-y-1">
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#784A12] dark:text-[#F3C969] block">
                Dispersed Fraternity
              </span>
              <p className="text-[11px] text-stone-600 dark:text-stone-400">
                Lived in homes, families, and workplaces across the world
              </p>
            </div>

            <div className="p-3 bg-[#FAF6EE] dark:bg-[#201A14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B] space-y-1">
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#784A12] dark:text-[#F3C969] block">
                Radical Inclusion
              </span>
              <p className="text-[11px] text-stone-600 dark:text-stone-400">
                Equal dignity across gender, marital state, lay, and ordained
              </p>
            </div>

            <div className="p-3 bg-[#FAF6EE] dark:bg-[#201A14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B] space-y-1">
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#784A12] dark:text-[#F3C969] block">
                Unpaid Vocation
              </span>
              <p className="text-[11px] text-stone-600 dark:text-stone-400">
                Volunteer, non-stipendiary ministry with self-financed support
              </p>
            </div>

            <div className="p-3 bg-[#FAF6EE] dark:bg-[#201A14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B] space-y-1">
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#784A12] dark:text-[#F3C969] block">
                Care of Sister Earth
              </span>
              <p className="text-[11px] text-stone-600 dark:text-stone-400">
                Reverence for the creatures and practical eco-justice
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
