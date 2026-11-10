import React, { useState } from 'react';
import { OBSERVANCE_MATRIX, FRANCISCAN_TEST_QUESTIONS } from '../data/governingData.ts';
import { Clock, Calendar, CheckSquare, Sparkles, Printer, Copy, Check, Info } from 'lucide-react';

export const DailyLifeCustomsSection: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<Record<number, boolean>>({});
  const [ruleFields, setRuleFields] = useState({
    name: '',
    dailyPrayer: 'Morning Prayer and brief evening examination of conscience',
    scripture: 'Daily reading from the Holy Gospels and 10 minutes of contemplative lectio divina',
    eucharist: 'Regular Sunday Eucharist and weekly prayer for the fraternity',
    simplicity: 'Annual review of possessions, ethical consumption, and moderate lifestyle',
    familyWork: 'Honoring household duties first; faithful witness and integrity at workplace',
    penanceFriday: 'Friday simplicity in food, digital restraint, and one act of quiet service',
    fraternity: 'Attending monthly fraternity gatherings and maintaining pastoral welfare contact',
    serviceCreation: 'Regular volunteer support for local food relief and mindful ecological habits',
    sabbathRest: 'Weekly Sabbath rest protected from avoidable work and constant messaging',
    companion: 'To be reviewed annually with my appointed Formation Companion or Guardian',
  });

  const [ruleCopied, setRuleCopied] = useState(false);

  const toggleTestQuestion = (index: number) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const completedTestCount = Object.values(selectedQuestions).filter(Boolean).length;

  const handleCopyPersonalRule = () => {
    const text = `PERSONAL RULE OF LIFE
Order of Saints Francis and Clare (OSFC)
Name: ${ruleFields.name || '[Member Name]'}

1. DAILY PRAYER & OFFICE:
${ruleFields.dailyPrayer}

2. SCRIPTURE & LECTIO DIVINA:
${ruleFields.scripture}

3. EUCHARIST & SACRAMENTAL COMMUNION:
${ruleFields.eucharist}

4. SIMPLICITY & STEWARDSHIP:
${ruleFields.simplicity}

5. FAMILY, HOUSEHOLD & WORK WITNESS:
${ruleFields.familyWork}

6. PENITENTIAL OBSERVANCE (FRIDAY):
${ruleFields.penanceFriday}

7. FRATERNITY & GATHERINGS:
${ruleFields.fraternity}

8. SERVICE, MERCY & CREATION CARE:
${ruleFields.serviceCreation}

9. SABBATH REST, HEALTH & DIGITAL RESTRAINT:
${ruleFields.sabbathRest}

10. REVIEW & ACCOUNTABILITY:
${ruleFields.companion}

“Let every home become in some small way a friary or convent of the heart.” (Customary ¶ 236)`;

    navigator.clipboard.writeText(text);
    setRuleCopied(true);
    setTimeout(() => setRuleCopied(false), 2500);
  };

  return (
    <section className="py-16 parchment-bg text-[#2C1E14] dark:text-[#F5EFE6] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#784A12] dark:text-[#E6CA65] font-bold block">
            The Customary in Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#241710] dark:text-[#FAF5ED]">
            A Rhythm of Gospel Freedom
          </h2>

          <div className="flex items-center justify-center gap-4 py-1 text-[#B48628]">
            <div className="w-12 h-px bg-[#B48628]/40" />
            <span className="text-sm font-serif">†</span>
            <div className="w-12 h-px bg-[#B48628]/40" />
          </div>

          <p className="font-serif text-stone-700 dark:text-stone-300 text-base sm:text-lg italic leading-relaxed">
            “The Customary exists to serve the Franciscan vocation; the Franciscan vocation does not exist to serve the Customary” (¶ 148).
          </p>
        </div>

        {/* 1. Minimum Ordinary Observance Table */}
        <div className="space-y-6">
          <div className="border-b border-[#D8C7A0]/80 dark:border-[#3E301F] pb-4 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                Minimum Ordinary Observance
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
                Official observance standards from page 39 of the Revised Governing Documents
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#784A12] dark:text-[#E6CA65] font-serif font-semibold">
              <Clock className="w-4 h-4 text-[#B48628]" />
              <span>Adaptable to health & family</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {OBSERVANCE_MATRIX.map((row) => (
              <div
                key={row.rhythm}
                className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-4 shadow-xs hover:border-[#B48628] transition-colors"
              >
                <div className="flex items-center justify-between border-b border-[#E6DCBF] dark:border-[#382B1B] pb-3">
                  <span className="font-serif text-xl font-bold text-[#784A12] dark:text-[#E6CA65]">
                    {row.rhythm}
                  </span>
                  <Calendar className="w-4 h-4 text-[#B48628]" />
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif">
                  {row.practices.map((practice, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#B48628] font-bold">•</span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive Tool: The Franciscan Test for Daily Life */}
        <div className="p-8 sm:p-10 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
              Contemplative Discernment Tool
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              The Franciscan Test for Daily Life
            </h3>
            <p className="font-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
              Before taking a significant action, entering a controversy, or making a vocational decision, examine your heart using the eight Franciscan tests (Customary ¶ 39):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FRANCISCAN_TEST_QUESTIONS.map((item, idx) => {
              const isChecked = !!selectedQuestions[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleTestQuestion(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    isChecked
                      ? 'bg-[#F5ECDC] dark:bg-[#251D14] border-[#B48628]'
                      : 'bg-[#FAF5EB] dark:bg-[#201A13] border-[#E6DCBF] dark:border-[#382B1B] hover:border-[#B48628]'
                  }`}
                >
                  <div
                    className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-[#784A12] dark:bg-[#B48628] border-[#784A12] text-white dark:text-[#18130E]'
                        : 'border-[#D5C294] dark:border-[#423320] bg-white dark:bg-[#1A1510]'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div className="space-y-1">
                    <span className="font-serif font-bold text-base text-[#2C1E14] dark:text-[#FAF5ED] block">
                      {item.question}
                    </span>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-normal font-serif">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Test Status Indicator */}
          <div className="p-4 bg-[#FAF5EB] dark:bg-[#221B14] rounded-xl border border-[#D5C294] dark:border-[#3D301F] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-serif">
            <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              Discernment: <strong className="font-bold text-[#784A12] dark:text-[#F3C969] tabular-nums">{completedTestCount}</strong> of 8 affirmations aligned with Franciscan peace and humility.
            </div>
            {completedTestCount === 8 ? (
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" /> Full Evangelical Clarity
              </span>
            ) : (
              <span className="text-xs text-stone-500 italic">
                Hold remaining questions before the Lord in quiet prayer.
              </span>
            )}
          </div>
        </div>

        {/* 3. Interactive Personal Rule Builder */}
        <div className="p-8 sm:p-10 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8C7A0]/80 dark:border-[#3E301F] pb-6">
            <div className="space-y-1">
              <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                Customary Part XII (¶¶ 207–209)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                Personal Rule of Life Builder
              </h3>
              <p className="font-serif text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Every novice and professed member drafts an individual Personal Rule adapted to actual circumstances.
              </p>
            </div>

            <button
              onClick={handleCopyPersonalRule}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2C1E14] hover:bg-[#3D2C1E] text-[#FAF5ED] dark:bg-[#B48628] dark:hover:bg-[#C59B27] dark:text-[#18130E] rounded-lg text-xs font-serif font-bold transition-colors shrink-0 cursor-pointer shadow-xs"
            >
              {ruleCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Rule Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#F3C969] dark:text-[#18130E]" />
                  <span>Copy Complete Personal Rule</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif">
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  Member / Inquirer Name
                </label>
                <input
                  type="text"
                  value={ruleFields.name}
                  onChange={(e) => setRuleFields({ ...ruleFields, name: e.target.value })}
                  placeholder="e.g. Brother Francis / Sister Clare"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  1. Daily Prayer & Office (¶¶ 150–155)
                </label>
                <input
                  type="text"
                  value={ruleFields.dailyPrayer}
                  onChange={(e) => setRuleFields({ ...ruleFields, dailyPrayer: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  2. Scripture & Contemplation (¶¶ 163, 19)
                </label>
                <input
                  type="text"
                  value={ruleFields.scripture}
                  onChange={(e) => setRuleFields({ ...ruleFields, scripture: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  3. Eucharist & Sacrament (¶¶ 156, 164)
                </label>
                <input
                  type="text"
                  value={ruleFields.eucharist}
                  onChange={(e) => setRuleFields({ ...ruleFields, eucharist: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  4. Simplicity & Household Possessions (¶¶ 171–175)
                </label>
                <input
                  type="text"
                  value={ruleFields.simplicity}
                  onChange={(e) => setRuleFields({ ...ruleFields, simplicity: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  5. Family, Dependants & Secular Work (¶¶ 167, 176)
                </label>
                <input
                  type="text"
                  value={ruleFields.familyWork}
                  onChange={(e) => setRuleFields({ ...ruleFields, familyWork: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  6. Friday Penitential Discipline (¶¶ 157–158)
                </label>
                <input
                  type="text"
                  value={ruleFields.penanceFriday}
                  onChange={(e) => setRuleFields({ ...ruleFields, penanceFriday: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  7. Service, Mercy & Creation Care (¶¶ 214–218)
                </label>
                <input
                  type="text"
                  value={ruleFields.serviceCreation}
                  onChange={(e) => setRuleFields({ ...ruleFields, serviceCreation: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  8. Sabbath Rest & Digital Restraint (¶¶ 159, 210)
                </label>
                <input
                  type="text"
                  value={ruleFields.sabbathRest}
                  onChange={(e) => setRuleFields({ ...ruleFields, sabbathRest: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  9. Review & Formation Companion (¶ 208)
                </label>
                <input
                  type="text"
                  value={ruleFields.companion}
                  onChange={(e) => setRuleFields({ ...ruleFields, companion: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>
            </div>

          </div>

          <div className="p-4 bg-[#F5ECDC] dark:bg-[#251E17] border-l-2 border-[#B48628] rounded-r-lg text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif">
            “Revision is not failure; concealment and chronic imprudence are greater concerns than honest adaptation” (¶ 208).
          </div>

        </div>

      </div>
    </section>
  );
};
