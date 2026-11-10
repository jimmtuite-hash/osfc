import React, { useState } from 'react';
import { GLOSSARY, SUBJECT_INDEX } from '../data/governingData.ts';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';

interface IndexGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToParagraph: (paraNum: number) => void;
}

export const IndexGlossaryModal: React.FC<IndexGlossaryModalProps> = ({
  isOpen,
  onClose,
  onNavigateToParagraph,
}) => {
  const [activeTab, setActiveTab] = useState<'glossary' | 'index'>('glossary');
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredGlossary = GLOSSARY.filter(
    (g) =>
      g.term.toLowerCase().includes(search.toLowerCase()) ||
      g.definition.toLowerCase().includes(search.toLowerCase())
  );

  const filteredIndex = SUBJECT_INDEX.filter((item) =>
    item.topic.toLowerCase().includes(search.toLowerCase())
  );

  const handleParagraphClick = (paraStr: string) => {
    const match = paraStr.match(/\d+/);
    if (match) {
      const num = parseInt(match[0], 10);
      onNavigateToParagraph(num);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#140F0A]/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="gilded-frame bg-[#FAF4E6] dark:bg-[#1B1612] max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-colors">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-[#D5C29D]/60 dark:border-[#3D2E1E] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#8C6219]/15 dark:bg-[#C5A059]/20 border border-[#8C6219]/30 rounded-sm text-[#8C6219] dark:text-[#D4AF37]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-display uppercase tracking-[0.22em] text-[#8C6219] dark:text-[#D4AF37] font-semibold block">
                Official OSFC Reference Folio
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1F150E] dark:text-[#F7EFE0]">
                Subject Index & Comprehensive Glossary
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6E5B4B] hover:text-[#1F150E] dark:text-[#BAA692] dark:hover:text-[#F7EFE0] rounded-sm hover:bg-[#EBDDC1] dark:hover:bg-[#2A2016] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Tabs Strip */}
        <div className="p-4 bg-[#F2E8D2] dark:bg-[#17130F] border-b border-[#D5C29D]/60 dark:border-[#3D2E1E] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('glossary')}
                className={`px-4 py-2 text-xs font-serif rounded-sm transition-colors cursor-pointer border ${
                  activeTab === 'glossary'
                    ? 'bg-[#2A1D13] text-[#FAF5EB] border-[#C5A059] dark:bg-[#C5A059] dark:text-[#17130F] dark:border-[#E8C56B] font-semibold shadow-xs'
                    : 'bg-[#FAF4E6] dark:bg-[#251E17] text-[#423225] dark:text-[#D4C3B2] border-[#D5C29D]/70 dark:border-[#3D2E1E] hover:border-[#8C6219]'
                }`}
              >
                Comprehensive Glossary ({GLOSSARY.length} Terms)
              </button>
              <button
                onClick={() => setActiveTab('index')}
                className={`px-4 py-2 text-xs font-serif rounded-sm transition-colors cursor-pointer border ${
                  activeTab === 'index'
                    ? 'bg-[#2A1D13] text-[#FAF5EB] border-[#C5A059] dark:bg-[#C5A059] dark:text-[#17130F] dark:border-[#E8C56B] font-semibold shadow-xs'
                    : 'bg-[#FAF4E6] dark:bg-[#251E17] text-[#423225] dark:text-[#D4C3B2] border-[#D5C29D]/70 dark:border-[#3D2E1E] hover:border-[#8C6219]'
                }`}
              >
                Subject Index ({SUBJECT_INDEX.length} Topics)
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7A695A]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search terms or canonical topics..."
                className="w-full pl-9 pr-3 py-1.5 text-xs font-serif bg-[#FFFDF9] dark:bg-[#14100D] border border-[#D5C29D]/80 dark:border-[#3D2E1E] rounded-sm text-[#1F150E] dark:text-[#FAF5ED] placeholder:text-[#9A8775] focus:outline-none focus:ring-1 focus:ring-[#8C6219]"
              />
            </div>

          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'glossary' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.length === 0 ? (
                <div className="col-span-2 text-center py-8 font-serif text-[#7A695A] dark:text-[#9A8775]">
                  No glossary terms matching “{search}”
                </div>
              ) : (
                filteredGlossary.map((g, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FFFDF9] dark:bg-[#14100D] rounded-sm border border-[#D5C29D]/70 dark:border-[#3D2E1E] space-y-1.5 shadow-2xs"
                  >
                    <h4 className="font-serif font-bold text-base text-[#8C6219] dark:text-[#D4AF37]">
                      {g.term}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3A2C21] dark:text-[#D4C3B2] leading-relaxed font-serif">
                      {g.definition}
                    </p>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="divide-y divide-[#D5C29D]/50 dark:divide-[#3D2E1E] bg-[#FFFDF9] dark:bg-[#14100D] rounded-sm border border-[#D5C29D]/70 dark:border-[#3D2E1E]">
              {filteredIndex.length === 0 ? (
                <div className="text-center py-8 font-serif text-[#7A695A] dark:text-[#9A8775]">
                  No subjects matching “{search}”
                </div>
              ) : (
                filteredIndex.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#F7EFE0]/60 dark:hover:bg-[#1E1712] transition-colors"
                  >
                    <div>
                      <h4 className="font-serif font-medium text-base text-[#1F150E] dark:text-[#F7EFE0]">
                        {item.topic}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-serif text-[#581c87] dark:text-[#c084fc] font-bold">
                        ¶¶ {item.paragraphs}
                      </span>
                      <button
                        onClick={() => handleParagraphClick(item.paragraphs)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-serif bg-[#8C6219] hover:bg-[#724E12] text-[#FAF5EB] dark:bg-[#C5A059] dark:hover:bg-[#D4AF37] dark:text-[#17130F] rounded-sm cursor-pointer shadow-2xs"
                        title="Jump to this paragraph in Document Reader"
                      >
                        <span>Jump</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F2E8D2] dark:bg-[#17130F] border-t border-[#D5C29D]/60 dark:border-[#3D2E1E] flex items-center justify-between text-xs font-serif text-[#5C4A3A] dark:text-[#BAA692]">
          <span>Derived canonically from pages 44–53 of OSFC Governing Documents</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#2A1D13] hover:bg-[#3D2B1C] text-[#FAF5EB] dark:bg-[#C5A059] dark:hover:bg-[#D4AF37] dark:text-[#17130F] rounded-sm text-xs font-serif cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

