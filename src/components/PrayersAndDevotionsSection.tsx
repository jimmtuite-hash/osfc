import React, { useState } from 'react';
import { PRAYERS_AND_SOURCES } from '../data/governingData.ts';
import { Copy, Check, Heart, Sun, Feather, Calendar, Sparkles } from 'lucide-react';

export const PrayersAndDevotionsSection: React.FC = () => {
  const [selectedPrayerId, setSelectedPrayerId] = useState(PRAYERS_AND_SOURCES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activePrayer =
    PRAYERS_AND_SOURCES.find((p) => p.id === selectedPrayerId) || PRAYERS_AND_SOURCES[0];

  const handleCopyPrayer = () => {
    navigator.clipboard.writeText(`${activePrayer.title}\n\n${activePrayer.text}\n\n— ${activePrayer.attribution}`);
    setCopiedId(activePrayer.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const feasts = [
    { name: 'Feast of Saint Clare of Assisi', date: 'August 11', desc: 'Virgin, co-founder of the Franciscan movement, contemplative mirror of Christ.' },
    { name: 'Our Lady of the Angels of the Portiuncula', date: 'August 2', desc: 'The cradle of the Franciscan Order and indulgence of divine pardon.' },
    { name: 'The Stigmata of Holy Father Francis', date: 'September 17', desc: 'Commemoration of the imprint of Christ’s wounds upon Mount La Verna.' },
    { name: 'The Transitus of Saint Francis', date: 'October 3 (Eve)', desc: 'Vigil of the passing of Saint Francis from death to eternal life.' },
    { name: 'Solemnity of Saint Francis of Assisi', date: 'October 4', desc: 'Patron of the Order, apostle of peace, poverty, and Sister Earth.' },
  ];

  return (
    <section className="py-16 parchment-bg text-[#2C1E14] dark:text-[#F5EFE6] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#784A12] dark:text-[#E6CA65] font-bold block">
            Franciscan Liturgy & Devotion
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#241710] dark:text-[#FAF5ED]">
            Prayers of Francis & Clare
          </h2>

          <div className="flex items-center justify-center gap-4 py-1 text-[#B48628]">
            <div className="w-12 h-px bg-[#B48628]/40" />
            <span className="text-sm font-serif">†</span>
            <div className="w-12 h-px bg-[#B48628]/40" />
          </div>

          <p className="font-serif text-stone-700 dark:text-stone-300 text-base sm:text-lg italic leading-relaxed">
            “Prayer is the breath of the Franciscan life and conversion its daily movement” (Rule ¶ 19).
          </p>
        </div>

        {/* 2-Column Layout: Selector & Reading Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Prayer List & Official Back Cover Feature */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-4 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-xl shadow-xs space-y-2">
              <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block px-2 pb-1 border-b border-[#D8C7A0] dark:border-[#3E301F]">
                Franciscan Texts
              </span>
              {PRAYERS_AND_SOURCES.map((prayer) => (
                <button
                  key={prayer.id}
                  onClick={() => setSelectedPrayerId(prayer.id)}
                  className={`w-full text-left p-3.5 rounded-lg transition-all cursor-pointer border ${
                    selectedPrayerId === prayer.id
                      ? 'bg-[#FAF5EB] dark:bg-[#251D15] border-[#B48628] shadow-xs'
                      : 'bg-transparent border-transparent hover:bg-[#F2E8D2] dark:hover:bg-[#201A14]'
                  }`}
                >
                  <div className="text-[11px] font-serif italic text-[#784A12] dark:text-[#E6CA65]">
                    {prayer.latinTitle}
                  </div>
                  <div className="font-serif font-bold text-base text-[#2C1E14] dark:text-[#FAF5ED]">
                    {prayer.title}
                  </div>
                  <div className="text-xs text-stone-600 dark:text-stone-400 font-serif mt-0.5 line-clamp-1">
                    {prayer.attribution}
                  </div>
                </button>
              ))}
            </div>

            {/* Back Cover Artwork Card */}
            <div className="p-4 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-xl shadow-sm space-y-3">
              <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block text-center">
                The Back Cover Insignia
              </span>
              <div className="overflow-hidden rounded-lg aspect-[3/4] border border-[#B48628]/40 shadow-inner">
                <img
                  src="/assets/images/page_54.jpg"
                  alt="Back Cover with gold Tau, Peace Prayer, and Madonna lilies"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center font-serif text-xs text-stone-600 dark:text-stone-400 italic">
                From page 54 of the Governing Documents: Peace Prayer, Clare’s words, and the Seraphic Tau.
              </div>
            </div>

          </div>

          {/* Column 2: Selected Prayer Display */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8C7A0]/80 dark:border-[#3E301F] pb-5">
              <div>
                <span className="font-serif text-xs tracking-widest uppercase text-[#784A12] dark:text-[#E6CA65] font-bold block">
                  {activePrayer.latinTitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241710] dark:text-[#FAF5ED]">
                  {activePrayer.title}
                </h3>
                <p className="font-serif text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                  {activePrayer.attribution}
                </p>
              </div>

              <button
                onClick={handleCopyPrayer}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-serif font-bold bg-[#F2E8D2] hover:bg-[#E8DCBC] dark:bg-[#282017] dark:hover:bg-[#342A1E] text-[#2C1E14] dark:text-[#FAF5ED] border border-[#D5C294] dark:border-[#423422] rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {copiedId === activePrayer.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#B48628]" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

            {/* Prayer Body */}
            <div className="whitespace-pre-line font-serif text-[#2C1E14] dark:text-[#FAF5ED] text-base sm:text-lg leading-relaxed max-w-2xl pl-1">
              {activePrayer.text}
            </div>

            <div className="pt-6 border-t border-[#D8C7A0]/70 dark:border-[#382B1B] flex items-center justify-between text-xs text-stone-500 font-serif">
              <span>Order of Saints Francis & Clare</span>
              <span className="font-serif italic text-[#784A12] dark:text-[#E6CA65] font-bold">
                Pax et Bonum
              </span>
            </div>

          </div>

        </div>

        {/* Franciscan Liturgical Calendar Feasts */}
        <div className="space-y-6 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              Principal Feasts of the Franciscan Calendar
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
              Observed by the Order in harmony with the authorized LCAC calendar (Customary Part X, ¶¶ 201–203)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feasts.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-2 shadow-xs hover:border-[#B48628] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xs font-bold px-2.5 py-0.5 bg-[#EADAB2] dark:bg-[#382B1B] text-[#784A12] dark:text-[#F3C969] rounded border border-[#B48628]/40">
                    {f.date}
                  </span>
                  <Calendar className="w-3.5 h-3.5 text-[#B48628]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2C1E14] dark:text-[#FAF5ED]">
                  {f.name}
                </h4>
                <p className="font-serif text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-normal">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
