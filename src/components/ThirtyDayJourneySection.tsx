import React, { useState, useEffect } from 'react';
import { THIRTY_DAY_PLAN, GOVERNING_PARAGRAPHS } from '../data/governingData.ts';
import { Compass, CheckCircle2, Circle, BookOpen, ChevronLeft, ChevronRight, Save, Sparkles, Feather } from 'lucide-react';

interface ThirtyDayJourneyProps {
  onNavigateToParagraph: (paraNum: number) => void;
}

export const ThirtyDayJourneySection: React.FC<ThirtyDayJourneyProps> = ({
  onNavigateToParagraph,
}) => {
  const [activeDay, setActiveDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [journalNotes, setJournalNotes] = useState<Record<number, string>>({});
  const [savedNotification, setSavedNotification] = useState(false);
  const [showParagraphsModal, setShowParagraphsModal] = useState(false);

  // Load persistence from localStorage
  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem('osfc_completed_days');
      if (savedCompleted) {
        setCompletedDays(JSON.parse(savedCompleted));
      }
      const savedNotes = localStorage.getItem('osfc_journal_notes');
      if (savedNotes) {
        setJournalNotes(JSON.parse(savedNotes));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleDayCompletion = (dayNum: number) => {
    const updated = completedDays.includes(dayNum)
      ? completedDays.filter((d) => d !== dayNum)
      : [...completedDays, dayNum];
    setCompletedDays(updated);
    try {
      localStorage.setItem('osfc_completed_days', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleSaveNote = () => {
    try {
      localStorage.setItem('osfc_journal_notes', JSON.stringify(journalNotes));
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const currentPlan = THIRTY_DAY_PLAN.find((d) => d.day === activeDay) || THIRTY_DAY_PLAN[0];
  const percentComplete = Math.round((completedDays.length / 30) * 100);

  // Retrieve paragraph objects for this day
  const assignedParagraphObjects = GOVERNING_PARAGRAPHS.filter((p) =>
    currentPlan.paragraphs.includes(p.number)
  );

  return (
    <section className="py-20 bg-[#FAF6ED] dark:bg-[#15120F] text-[#241710] dark:text-[#FAF5ED] transition-colors relative border-t border-[#D5C29D]/50 dark:border-[#3D2E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header styled after the Governing Documents title plate */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-display uppercase tracking-[0.28em] text-[#8C6219] dark:text-[#D4AF37] font-semibold">
            Spiritual Formation & Discernment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1F150E] dark:text-[#F7EFE0]">
            The Thirty-Day Reading & Reflection Plan
          </h2>
          <div className="cross-divider text-xs text-[#8C6219] dark:text-[#D4AF37] my-2">
            — † —
          </div>
          <p className="font-serif italic text-[#4A3B30] dark:text-[#C5B3A0] text-base sm:text-lg leading-relaxed">
            “Intended for prayerful formation rather than hurried completion. Begin with a brief invocation of the Holy Spirit, read the assigned paragraphs slowly, note one phrase that calls for attention, and conclude with the practice.”
          </p>
        </div>

        {/* Progress Tracker Card - Gilded Frame */}
        <div className="gilded-frame p-6 sm:p-8 bg-[#FAF4E6] dark:bg-[#1B1612] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-[#8C6219] dark:text-[#D4AF37]" />
              <span className="font-display uppercase tracking-[0.12em] text-sm sm:text-base font-semibold text-[#1F150E] dark:text-[#F7EFE0]">
                Spiritual Journey Progress
              </span>
            </div>
            <p className="font-serif text-sm text-[#5C4A3A] dark:text-[#BAA692]">
              {completedDays.length} of 30 days completed ({percentComplete}% of the canonical reading plan)
            </p>
          </div>

          <div className="w-full md:w-80 space-y-2">
            <div className="w-full h-2.5 bg-[#E8DCB8] dark:bg-[#2A2016] rounded-full overflow-hidden border border-[#C5A059]/40">
              <div
                className="h-full bg-linear-to-r from-[#8C6219] via-[#C5A059] to-[#8C6219] rounded-full transition-all duration-500"
                style={{ width: `${percentComplete}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-serif text-[#6E5B4B] dark:text-[#9A8775]">
              <span>Day 1: The Calling</span>
              <span>Day 15: Chapter Life</span>
              <span>Day 30: The Pilgrimage</span>
            </div>
          </div>
        </div>

        {/* 30-Day Grid Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-serif text-[#5C4A3A] dark:text-[#BAA692]">
            <span className="font-display uppercase tracking-[0.15em] text-[#8C6219] dark:text-[#D4AF37]">
              Select a Day of Formation:
            </span>
            <span className="font-semibold text-[#1F150E] dark:text-[#F7EFE0]">
              Currently Viewing: Day {activeDay}
            </span>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-2">
            {THIRTY_DAY_PLAN.map((d) => {
              const isSelected = d.day === activeDay;
              const isDone = completedDays.includes(d.day);
              return (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`py-2 px-1 rounded-sm text-xs font-serif transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 border ${
                    isSelected
                      ? 'bg-[#2A1D13] text-[#FAF5EB] border-[#C5A059] dark:bg-[#C5A059] dark:text-[#17130F] dark:border-[#E8C56B] shadow-md ring-1 ring-[#C5A059]'
                      : isDone
                      ? 'bg-[#EBF3EC] dark:bg-[#18261A] text-[#1E562A] dark:text-[#8AE09A] border-[#81B98E] dark:border-[#2C5E37]'
                      : 'bg-[#FAF4E6] dark:bg-[#1B1612] text-[#423225] dark:text-[#D4C3B2] border-[#D5C29D]/70 dark:border-[#3D2E1E] hover:border-[#8C6219]'
                  }`}
                >
                  <span className="text-[10px] font-display uppercase tracking-wider opacity-75">Day</span>
                  <span className="text-sm font-semibold tabular-nums">{d.day}</span>
                  {isDone && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Daily Study & Meditation Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Day Details Card - Illuminated Folio */}
          <div className="lg:col-span-7 gilded-frame p-6 sm:p-8 bg-[#FAF4E6] dark:bg-[#1B1612] shadow-sm space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#D5C29D]/60 dark:border-[#3D2E1E] pb-4">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 bg-[#8C6219] text-[#FAF5EB] dark:bg-[#C5A059] dark:text-[#17130F] font-serif font-bold text-lg rounded-sm border border-[#5E4110] dark:border-[#E8C56B]">
                  Day {currentPlan.day}
                </span>
                <div>
                  <span className="text-[11px] font-display uppercase tracking-[0.18em] text-[#785416] dark:text-[#D4AF37] block">
                    Assigned Canon & Rule
                  </span>
                  <span className="text-sm font-serif font-semibold text-[#1F150E] dark:text-[#F7EFE0]">
                    {currentPlan.reading}
                  </span>
                </div>
              </div>

              {/* Completion Toggle */}
              <button
                onClick={() => toggleDayCompletion(currentPlan.day)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-serif border transition-colors cursor-pointer ${
                  completedDays.includes(currentPlan.day)
                    ? 'bg-[#EBF3EC] text-[#1E562A] border-[#81B98E] dark:bg-[#18261A] dark:text-[#8AE09A] dark:border-[#2C5E37]'
                    : 'bg-[#F2E8D2] text-[#4A3B30] border-[#C8B38B] hover:bg-[#EBDDC1] dark:bg-[#251E17] dark:text-[#C5B3A0] dark:border-[#3D2E1E]'
                }`}
              >
                {completedDays.includes(currentPlan.day) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold">Completed</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-[#7A695A]" />
                    <span>Mark as Done</span>
                  </>
                )}
              </button>
            </div>

            {/* Theme & Reflection Prompt */}
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1F150E] dark:text-[#F7EFE0]">
                {currentPlan.theme}
              </h3>
              
              <div className="p-5 bg-[#F4ECDC] dark:bg-[#231B15] border-l-3 border-[#8C6219] dark:border-[#C5A059] rounded-r-sm space-y-1.5">
                <span className="text-[11px] font-display uppercase tracking-[0.2em] text-[#8C6219] dark:text-[#D4AF37] font-semibold block">
                  Meditation Prompt
                </span>
                <p className="font-serif text-[#3A2C21] dark:text-[#E2D4C3] text-base sm:text-lg leading-relaxed italic">
                  “{currentPlan.reflection}”
                </p>
              </div>
            </div>

            {/* Suggested Prayer or Practice */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-display uppercase tracking-[0.15em] text-[#785416] dark:text-[#D4AF37] font-semibold">
                <Sparkles className="w-4 h-4 text-[#8C6219] dark:text-[#D4AF37]" />
                <span>Today’s Spiritual Practice</span>
              </div>
              <p className="font-serif text-[#3A2C21] dark:text-[#D4C3B2] text-sm sm:text-base leading-relaxed bg-[#F7EFE0]/80 dark:bg-[#1E1712] p-4 rounded-sm border border-[#D5C29D]/60 dark:border-[#3D2E1E]">
                {currentPlan.practice}
              </p>
            </div>

            {/* Read Text Direct Trigger */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D5C29D]/60 dark:border-[#3D2E1E]">
              <button
                onClick={() => setShowParagraphsModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A1D13] hover:bg-[#3D2B1C] text-[#FAF5EB] dark:bg-[#C5A059] dark:hover:bg-[#D4AF37] dark:text-[#17130F] rounded-sm text-xs font-serif font-medium cursor-pointer transition-colors shadow-xs"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Assigned {currentPlan.reading}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  disabled={activeDay <= 1}
                  onClick={() => setActiveDay((d) => Math.max(1, d - 1))}
                  className="p-2 border border-[#C5A059]/60 rounded-sm hover:bg-[#F2E8D2] dark:hover:bg-[#251E17] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-[#423225] dark:text-[#D4C3B2]"
                  title="Previous Day"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={activeDay >= 30}
                  onClick={() => setActiveDay((d) => Math.min(30, d + 1))}
                  className="p-2 border border-[#C5A059]/60 rounded-sm hover:bg-[#F2E8D2] dark:hover:bg-[#251E17] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-[#423225] dark:text-[#D4C3B2]"
                  title="Next Day"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Personal Journal / Scriptorium Notes Box */}
          <div className="lg:col-span-5 gilded-frame p-6 sm:p-8 bg-[#FAF4E6] dark:bg-[#1B1612] shadow-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#D5C29D]/60 dark:border-[#3D2E1E] pb-3">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#8C6219] dark:text-[#D4AF37]" />
                <div>
                  <span className="text-[11px] font-display uppercase tracking-[0.18em] text-[#785416] dark:text-[#D4AF37] font-semibold block">
                    Scriptorium Journal
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-[#1F150E] dark:text-[#F7EFE0]">
                    Day {currentPlan.day} Reflection
                  </h4>
                </div>
              </div>

              <button
                onClick={handleSaveNote}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8C6219] hover:bg-[#724E12] text-[#FAF5EB] dark:bg-[#C5A059] dark:hover:bg-[#D4AF37] dark:text-[#17130F] rounded-sm text-xs font-serif font-medium cursor-pointer transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{savedNotification ? 'Saved to Device' : 'Save Notes'}</span>
              </button>
            </div>

            <p className="font-serif text-xs text-[#5C4A3A] dark:text-[#BAA692] leading-relaxed">
              Record the phrase that called for attention during your lectio divina, or note your inner prayer response. Notes are stored privately on your device.
            </p>

            <textarea
              rows={10}
              value={journalNotes[currentPlan.day] || ''}
              onChange={(e) =>
                setJournalNotes({
                  ...journalNotes,
                  [currentPlan.day]: e.target.value,
                })
              }
              placeholder={`Write your prayerful reflection for Day ${currentPlan.day}...\n\n• The word or phrase that spoke to my heart:\n• How I will live this in my home and daily work:\n• My prayer of conversion:`}
              className="w-full p-4 text-xs sm:text-sm bg-[#FFFDF9] dark:bg-[#14100D] border border-[#D5C29D]/80 dark:border-[#3D2E1E] rounded-sm text-[#1F150E] dark:text-[#FAF5ED] placeholder:text-[#9A8775] focus:outline-none focus:ring-1 focus:ring-[#8C6219] leading-relaxed font-serif"
            />

            <div className="text-[11px] font-serif text-[#7A695A] dark:text-[#9A8775] flex items-center justify-between">
              <span>Auto-stored in browser local memory</span>
              <span>{journalNotes[currentPlan.day]?.length || 0} characters</span>
            </div>

          </div>

        </div>

        {/* Assigned Paragraphs Modal / Drawer */}
        {showParagraphsModal && (
          <div className="fixed inset-0 z-50 bg-[#15120F]/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="gilded-frame bg-[#FAF4E6] dark:bg-[#1B1612] max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
              
              <div className="p-6 border-b border-[#D5C29D]/60 dark:border-[#3D2E1E] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-display uppercase tracking-[0.2em] text-[#8C6219] dark:text-[#D4AF37] font-semibold block">
                    Day {currentPlan.day} Reading
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1F150E] dark:text-[#F7EFE0]">
                    Assigned Paragraphs: {currentPlan.reading}
                  </h3>
                </div>
                <button
                  onClick={() => setShowParagraphsModal(false)}
                  className="px-3 py-1.5 text-xs font-serif bg-[#EBDDC1] hover:bg-[#DECBA7] dark:bg-[#251E17] dark:hover:bg-[#32281F] text-[#241710] dark:text-[#FAF5ED] rounded-sm cursor-pointer border border-[#C5A059]/40"
                >
                  Close
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                {assignedParagraphObjects.map((p) => (
                  <div
                    key={p.number}
                    className="p-5 bg-[#FFFDF9] dark:bg-[#14100D] border border-[#D5C29D]/70 dark:border-[#3D2E1E] rounded-sm space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-serif text-[#7A695A] dark:text-[#9A8775]">
                      <span className="font-display uppercase tracking-[0.12em] text-[#8C6219] dark:text-[#D4AF37]">
                        {p.chapterOrPart}
                      </span>
                      <span className="font-bold text-[#581c87] dark:text-[#c084fc]">¶ {p.number}</span>
                    </div>

                    {p.title && (
                      <h4 className="font-serif text-lg font-semibold text-[#1F150E] dark:text-[#F7EFE0]">
                        {p.title}
                      </h4>
                    )}

                    {p.quote && (
                      <div className="p-3 bg-[#F4ECDC] dark:bg-[#231B15] border-l-2 border-[#8C6219] dark:border-[#C5A059] rounded-r-sm text-xs font-serif italic text-[#3A2C21] dark:text-[#E2D4C3]">
                        “{p.quote.text}” — {p.quote.source}
                      </div>
                    )}

                    <p className="font-serif text-base text-[#241710] dark:text-[#FAF5ED] leading-relaxed">
                      <span className="font-bold text-[#581c87] dark:text-[#c084fc] mr-2 tabular-nums">
                        {p.number}.
                      </span>
                      {p.content}
                    </p>

                    <div className="pt-2 text-right">
                      <button
                        onClick={() => {
                          setShowParagraphsModal(false);
                          onNavigateToParagraph(p.number);
                        }}
                        className="text-xs font-serif text-[#8C6219] dark:text-[#D4AF37] underline underline-offset-4 hover:text-[#5E4110] cursor-pointer"
                      >
                        View in Canonical Document Reader →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#F2E8D2] dark:bg-[#17130F] border-t border-[#D5C29D]/60 dark:border-[#3D2E1E] text-center">
                <button
                  onClick={() => setShowParagraphsModal(false)}
                  className="px-6 py-2 bg-[#2A1D13] hover:bg-[#3D2B1C] text-[#FAF5EB] dark:bg-[#C5A059] dark:hover:bg-[#D4AF37] dark:text-[#17130F] rounded-sm text-xs font-serif font-medium cursor-pointer"
                >
                  Return to Day {currentPlan.day} Reflection
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

