import React, { useState, useMemo } from 'react';
import { Search, Book, FileText, Check, Copy, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { GOVERNING_PARAGRAPHS, ParagraphItem } from '../data/governingData.ts';

interface DocumentsReaderProps {
  initialParagraph?: number | null;
  onClearInitialParagraph?: () => void;
}

export const DocumentsReader: React.FC<DocumentsReaderProps> = ({
  initialParagraph,
  onClearInitialParagraph,
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'intro' | 'rule' | 'constitutions' | 'customary' | 'conclusion'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [viewMode, setViewMode] = useState<'reader' | 'pdf'>('reader');
  const [copiedNum, setCopiedNum] = useState<number | null>(null);
  const [jumpInput, setJumpInput] = useState('');

  // Handle initial paragraph jump if passed
  React.useEffect(() => {
    if (initialParagraph) {
      setActiveSection('all');
      setSearchQuery('');
      setViewMode('reader');
      setTimeout(() => {
        const el = document.getElementById(`para-${initialParagraph}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-2', 'ring-[#B48628]', 'bg-[#F4E9CD]', 'dark:bg-[#3D2C17]');
          setTimeout(() => {
            el.classList.remove('ring-2', 'ring-[#B48628]', 'bg-[#F4E9CD]', 'dark:bg-[#3D2C17]');
          }, 4000);
        }
      }, 300);
      if (onClearInitialParagraph) onClearInitialParagraph();
    }
  }, [initialParagraph]);

  const filteredParagraphs = useMemo(() => {
    return GOVERNING_PARAGRAPHS.filter((p) => {
      if (activeSection !== 'all' && p.section !== activeSection) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const numMatch = p.number.toString() === q || `para ${p.number}`.includes(q) || `¶ ${p.number}`.includes(q);
      const textMatch = p.content.toLowerCase().includes(q);
      const titleMatch = p.title?.toLowerCase().includes(q);
      const chapterMatch = p.chapterOrPart.toLowerCase().includes(q);
      const quoteMatch = p.quote?.text.toLowerCase().includes(q);
      return numMatch || textMatch || titleMatch || chapterMatch || quoteMatch;
    });
  }, [activeSection, searchQuery]);

  const handleCopyCitation = (p: ParagraphItem) => {
    const citation = `“${p.content}” — Order of Saints Francis and Clare, Governing Documents (Revised Edition), ¶ ${p.number} (${p.chapterOrPart})`;
    navigator.clipboard.writeText(citation);
    setCopiedNum(p.number);
    setTimeout(() => setCopiedNum(null), 2500);
  };

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const target = parseInt(jumpInput, 10);
    if (!isNaN(target) && target >= 1 && target <= 241) {
      setActiveSection('all');
      setSearchQuery('');
      setTimeout(() => {
        const el = document.getElementById(`para-${target}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-2', 'ring-[#B48628]', 'bg-[#F4E9CD]', 'dark:bg-[#3D2C17]');
          setTimeout(() => {
            el.classList.remove('ring-2', 'ring-[#B48628]', 'bg-[#F4E9CD]', 'dark:bg-[#3D2C17]');
          }, 3500);
        }
      }, 150);
      setJumpInput('');
    }
  };

  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg leading-relaxed';
      case 'xlarge':
        return 'text-xl leading-loose';
      default:
        return 'text-base leading-relaxed';
    }
  };

  return (
    <section className="py-12 parchment-bg min-h-screen text-[#2C1E14] dark:text-[#F5EFE6] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Book Header with Ornate Rule Border */}
        <div className="p-8 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl flex flex-col md:flex-row md:items-end justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#784A12] dark:text-[#E6CA65] font-bold block">
              Proper Law & Spiritual Constitution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241710] dark:text-[#FAF5ED]">
              The Governing Documents
            </h2>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif italic">
              <span>Rule</span> · <span>Constitutions</span> · <span>Customary</span> · <span>Revised Edition (¶¶ 1–241)</span>
            </div>
          </div>

          {/* Toggle between Interactive Reader and PDF Mode */}
          <div className="flex items-center gap-2 p-1 bg-[#EFE4CC] dark:bg-[#282017] rounded-lg shrink-0 border border-[#D5C294] dark:border-[#423422]">
            <button
              onClick={() => setViewMode('reader')}
              className={`px-3.5 py-1.5 text-xs font-serif font-bold rounded-md transition-colors cursor-pointer ${
                viewMode === 'reader'
                  ? 'bg-[#FAF6ED] dark:bg-[#18130E] text-[#2C1E14] dark:text-[#FAF5ED] shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Book className="w-3.5 h-3.5 text-[#B48628]" />
                <span>Text Reader</span>
              </span>
            </button>
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-3.5 py-1.5 text-xs font-serif font-bold rounded-md transition-colors cursor-pointer ${
                viewMode === 'pdf'
                  ? 'bg-[#FAF6ED] dark:bg-[#18130E] text-[#2C1E14] dark:text-[#FAF5ED] shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#B48628]" />
                <span>Official PDF View</span>
              </span>
            </button>
          </div>
        </div>

        {/* View Mode: Original PDF Viewer */}
        {viewMode === 'pdf' ? (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#FCF9F2] dark:bg-[#1D1711] border border-[#D5C294] dark:border-[#3E301F] rounded-xl">
              <div className="font-serif text-sm text-stone-700 dark:text-stone-300">
                Viewing official document: <strong className="font-bold text-[#2C1E14] dark:text-[#FAF5ED]">OSFC_Governing_Documents_Revised.pdf</strong> (54 pages)
              </div>
              <a
                href="/assets/aistudio/OSFC_Governing_Documents_Revised_7170930f.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2C1E14] hover:bg-[#3D2C1E] text-[#FAF5ED] dark:bg-[#B48628] dark:hover:bg-[#C59B27] dark:text-[#18130E] rounded-lg text-xs font-serif font-bold transition-colors cursor-pointer"
              >
                <span>Open in Fullscreen / Download</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-[85vh] bg-stone-200 dark:bg-stone-900 rounded-xl overflow-hidden border-2 border-[#D5C294] dark:border-[#3E301F] shadow-inner">
              <iframe
                src="/assets/aistudio/OSFC_Governing_Documents_Revised_7170930f.pdf#toolbar=1&navpanes=1"
                title="OSFC Governing Documents Revised PDF"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        ) : (
          /* View Mode: Interactive Text Reader */
          <div className="space-y-6">
            
            {/* Control Bar: Filters, Search, Jump, Font Size */}
            <div className="p-5 bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#D5C294] dark:border-[#3E301F] shadow-xs space-y-4">
              
              {/* Document Section Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: 'All Documents (241)' },
                  { id: 'intro', label: 'Introduction (¶¶ 1–5)' },
                  { id: 'rule', label: 'The Rule (¶¶ 6–62)' },
                  { id: 'constitutions', label: 'Constitutions (¶¶ 63–146)' },
                  { id: 'customary', label: 'The Customary (¶¶ 147–236)' },
                  { id: 'conclusion', label: 'Conclusion (¶¶ 237–241)' },
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id as any)}
                    className={`px-3 py-1.5 text-xs font-serif font-bold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                      activeSection === sec.id
                        ? 'bg-[#2C1E14] text-[#FAF5ED] dark:bg-[#B48628] dark:text-[#17120D] shadow-xs'
                        : 'bg-[#F2E8D2] dark:bg-[#282018] text-[#54391F] dark:text-[#E8D8B8] hover:bg-[#E9DCBF]'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>

              {/* Search, Jump, and Font Size controls */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-3 border-t border-[#E6DCBF] dark:border-[#382B1B] items-center">
                
                {/* Search Input */}
                <div className="md:col-span-7 relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search text or paragraph (e.g. poverty, chastity, habit, eucharist, safeguarding)..."
                    className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Jump to Paragraph */}
                <form onSubmit={handleJump} className="md:col-span-3 flex items-center gap-1.5">
                  <input
                    type="number"
                    min="1"
                    max="241"
                    value={jumpInput}
                    onChange={(e) => setJumpInput(e.target.value)}
                    placeholder="Jump to ¶ (1-241)"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#F2E8D2] dark:bg-[#2A2117] hover:bg-[#E8DCBC] border border-[#D5C294] dark:border-[#423320] text-[#2C1E14] dark:text-[#FAF5ED] font-serif font-bold rounded-lg text-xs cursor-pointer shrink-0"
                  >
                    Go
                  </button>
                </form>

                {/* Font Size Adjuster */}
                <div className="md:col-span-2 flex items-center justify-end gap-1">
                  <span className="text-[11px] text-stone-500 mr-1 font-serif">Type:</span>
                  <button
                    onClick={() => setFontSize('normal')}
                    title="Standard Font Size"
                    className={`w-7 h-7 text-xs font-serif rounded border ${
                      fontSize === 'normal'
                        ? 'bg-[#EADAB2] dark:bg-[#3D2C17] border-[#B48628] text-[#784A12] dark:text-[#F3C969] font-bold'
                        : 'border-[#D5C294] dark:border-[#3E301F] text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    title="Large Font Size"
                    className={`w-7 h-7 text-sm font-serif rounded border ${
                      fontSize === 'large'
                        ? 'bg-[#EADAB2] dark:bg-[#3D2C17] border-[#B48628] text-[#784A12] dark:text-[#F3C969] font-bold'
                        : 'border-[#D5C294] dark:border-[#3E301F] text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    title="Extra Large Font Size"
                    className={`w-7 h-7 text-base font-serif rounded border ${
                      fontSize === 'xlarge'
                        ? 'bg-[#EADAB2] dark:bg-[#3D2C17] border-[#B48628] text-[#784A12] dark:text-[#F3C969] font-bold'
                        : 'border-[#D5C294] dark:border-[#3E301F] text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    A++
                  </button>
                </div>

              </div>

              {/* Status Indicator */}
              <div className="text-xs text-stone-600 dark:text-stone-400 font-serif flex items-center justify-between">
                <div>
                  Showing {filteredParagraphs.length} of {GOVERNING_PARAGRAPHS.length} paragraphs
                  {searchQuery && <span> matching “{searchQuery}”</span>}
                </div>
                <div className="hidden sm:inline italic">
                  Purple paragraph numbers correspond to the official printed edition.
                </div>
              </div>

            </div>

            {/* Reading Column */}
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredParagraphs.length === 0 ? (
                <div className="p-12 text-center bg-[#FCF9F2] dark:bg-[#1A1510] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-3">
                  <Book className="w-8 h-8 text-[#B48628] mx-auto opacity-70" />
                  <p className="font-serif text-lg text-stone-700 dark:text-stone-300">
                    No paragraphs match your search “{searchQuery}”.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveSection('all');
                    }}
                    className="text-xs font-serif font-bold text-[#784A12] dark:text-[#E6CA65] underline"
                  >
                    Reset filters and display all paragraphs
                  </button>
                </div>
              ) : (
                filteredParagraphs.map((p, idx) => {
                  const showChapterHeading =
                    idx === 0 || filteredParagraphs[idx - 1].chapterOrPart !== p.chapterOrPart;

                  return (
                    <div key={p.number} className="space-y-4">
                      {/* Chapter Divider with Cross */}
                      {showChapterHeading && (
                        <div className="pt-8 pb-3 border-b border-[#D8C7A0]/80 dark:border-[#3E301F] text-center">
                          <span className="font-serif text-[11px] tracking-[0.25em] uppercase text-[#784A12] dark:text-[#E6CA65] font-bold block">
                            {p.section === 'rule'
                              ? 'The Rule of the Order'
                              : p.section === 'constitutions'
                              ? 'The Constitutions'
                              : p.section === 'customary'
                              ? 'The Customary'
                              : p.section === 'intro'
                              ? 'General Introduction'
                              : 'General Conclusion'}
                          </span>
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241710] dark:text-[#FAF5ED] mt-1">
                            {p.chapterOrPart}
                          </h3>
                          <div className="flex items-center justify-center gap-3 py-1 text-[#B48628]">
                            <div className="w-10 h-px bg-[#B48628]/40" />
                            <span className="text-xs font-serif">†</span>
                            <div className="w-10 h-px bg-[#B48628]/40" />
                          </div>
                        </div>
                      )}

                      {/* Single Paragraph Card styled as parchment book leaf */}
                      <article
                        id={`para-${p.number}`}
                        className="group relative p-6 sm:p-7 bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#E3D6B5] dark:border-[#382B1B] shadow-xs transition-all hover:border-[#B48628]"
                      >
                        {p.title && (
                          <h4 className="font-serif text-lg font-bold text-[#241710] dark:text-[#FAF5ED] mb-2 flex items-center gap-2">
                            <span>{p.title}</span>
                          </h4>
                        )}

                        {/* Traditional Franciscan quote banner */}
                        {p.quote && (
                          <div className="my-3 p-4 bg-[#F5ECDC] dark:bg-[#251D15] border-l-2 border-[#B48628] rounded-r-lg">
                            <p className="font-serif italic text-[#382415] dark:text-[#EADBB8] text-base leading-relaxed">
                              “{p.quote.text}”
                            </p>
                            <p className="text-right text-xs text-[#784A12] dark:text-[#E6CA65] font-serif font-semibold mt-1">
                              — {p.quote.source}
                            </p>
                          </div>
                        )}

                        {/* Paragraph content with authentic royal purple/plum paragraph number */}
                        <div className={`font-serif text-[#2C1E14] dark:text-[#EFE7DC] ${getFontSizeClasses()}`}>
                          <span className="font-bold text-[#581c87] dark:text-[#c084fc] mr-2 text-lg tabular-nums">
                            {p.number}.
                          </span>
                          <span>{p.content}</span>
                        </div>

                        {/* Footer action */}
                        <div className="mt-4 pt-3 border-t border-[#EADBBD]/70 dark:border-[#2D2216] flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-serif">
                          <span className="text-[11px] text-stone-500">
                            OSFC Revised Edition · ¶ {p.number}
                          </span>

                          <button
                            onClick={() => handleCopyCitation(p)}
                            title="Copy authoritative citation"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[#784A12] dark:text-[#E6CA65] hover:bg-[#F2E8D2] dark:hover:bg-[#2A2117] rounded transition-colors cursor-pointer"
                          >
                            {copiedNum === p.number ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700 dark:text-emerald-400">Citation Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Cite ¶ {p.number}</span>
                              </>
                            )}
                          </button>
                        </div>

                      </article>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
