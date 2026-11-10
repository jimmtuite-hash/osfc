import React, { useState } from 'react';
import { VOCATION_STAGES, FOUR_PILLARS } from '../data/governingData.ts';
import { UserCheck, Shield, Heart, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface VocationsSectionProps {
  onNavigateToParagraph: (paraNum: number) => void;
}

export const VocationsSection: React.FC<VocationsSectionProps> = ({ onNavigateToParagraph }) => {
  const [selectedStage, setSelectedStage] = useState('inquirer');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    stateOfLife: 'Single (Lay)',
    ecclesialBackground: '',
    message: '',
    understoodNonStipendiary: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.understoodNonStipendiary) return;
    setFormSubmitted(true);
  };

  return (
    <section className="py-16 parchment-bg text-[#2C1E14] dark:text-[#F5EFE6] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#784A12] dark:text-[#E6CA65] font-bold block">
            Vocational Discernment & Formation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#241710] dark:text-[#FAF5ED]">
            Walking the Franciscan Way
          </h2>

          <div className="flex items-center justify-center gap-4 py-1 text-[#B48628]">
            <div className="w-12 h-px bg-[#B48628]/40" />
            <span className="text-sm font-serif">†</span>
            <div className="w-12 h-px bg-[#B48628]/40" />
          </div>

          <p className="font-serif text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            The call of Christ is tested through patient prayer, authentic companionship, and regular discernment. Admission is open to all baptized Christians without discrimination unrelated to genuine suitability.
          </p>
        </div>

        {/* 5 Stages of Formation Interactive Switcher */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              The Path to Religious Profession
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif italic mt-1">
              Time frames are minimums rather than entitlements (Article V, ¶ 54)
            </p>
          </div>

          {/* Stage Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {VOCATION_STAGES.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-serif font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedStage === stage.id
                    ? 'bg-[#2C1E14] text-[#FAF5ED] dark:bg-[#B48628] dark:text-[#18130E] shadow-sm'
                    : 'bg-[#FCF9F2] dark:bg-[#1C1712] text-[#54391F] dark:text-[#E8D8B8] border border-[#D5C294] dark:border-[#3E301F] hover:bg-[#F2E8D2]'
                }`}
              >
                {stage.title}
              </button>
            ))}
          </div>

          {/* Active Stage Detail Card */}
          {(() => {
            const current = VOCATION_STAGES.find((s) => s.id === selectedStage) || VOCATION_STAGES[0];
            return (
              <div className="max-w-3xl mx-auto p-8 sm:p-10 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8C7A0]/70 dark:border-[#382B1B] pb-4">
                  <div>
                    <span className="text-xs font-serif uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                      Vocational Stage
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                      {current.title}
                    </h4>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-stone-500 font-serif block">
                      Typical Duration
                    </span>
                    <span className="font-serif font-bold text-sm text-[#784A12] dark:text-[#F3C969]">
                      {current.duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs font-serif uppercase tracking-wider text-stone-500 font-bold">
                    Overview & Living Practice
                  </h5>
                  <p className="font-serif text-[#2C1E14] dark:text-[#EFE7DC] text-base sm:text-lg leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D8C7A0]/70 dark:border-[#382B1B] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif text-stone-700 dark:text-stone-300">
                  <div className="p-3 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717]">
                    <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block">
                      Habit & Insignia:
                    </strong>
                    <span>{current.dress}</span>
                  </div>
                  <div className="p-3 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717]">
                    <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block">
                      Oversight:
                    </strong>
                    <span>Accompanied by Formator, Guardian, and General Council</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-stone-500 font-serif">
                  <span>Constitutions Articles III, V & VI</span>
                  <button
                    onClick={() => onNavigateToParagraph(85)}
                    className="text-[#784A12] dark:text-[#E6CA65] font-bold underline cursor-pointer"
                  >
                    Read Admission & Formation Articles (¶¶ 85–97) →
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        {/* The Four Pillars of Formation */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              The Four Pillars of Formation
            </h3>
            <p className="font-serif text-sm text-stone-600 dark:text-stone-400 italic">
              “Radical inclusion does not remove standards” (Constitutions Article V, ¶ 91).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-3 shadow-xs hover:border-[#B48628] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#EADAB2] dark:bg-[#382B1B] text-[#784A12] dark:text-[#F3C969] font-serif font-bold text-sm flex items-center justify-center border border-[#B48628]/40">
                  {idx + 1}
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2C1E14] dark:text-[#FAF5ED]">
                  {pillar.title}
                </h4>
                <p className="font-serif text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {pillar.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Financial Reality & Safeguards (Article X, ¶¶ 117-120) */}
        <div className="p-8 sm:p-10 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold">
            <AlertCircle className="w-4 h-4 text-[#B48628]" />
            <span>Honest Vocational Covenant · Financial Reality</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
            Unpaid, Non-Stipendiary Service & Personal Responsibility
          </h3>
          <p className="font-serif text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            In accordance with Constitutions Paragraph 118, all members of the Order—ordained and lay alike—serve on a strictly voluntary, unpaid, and non-stipendiary basis:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif">
            <li className="flex items-start gap-2 p-2 bg-[#FAF5EB] dark:bg-[#201A13] rounded">
              <span className="text-[#B48628] font-bold">•</span>
              <span><strong>Self-Financed Vocation:</strong> Each member relies on their own lawful secular livelihood or retirement to support themselves.</span>
            </li>
            <li className="flex items-start gap-2 p-2 bg-[#FAF5EB] dark:bg-[#201A13] rounded">
              <span className="text-[#B48628] font-bold">•</span>
              <span><strong>No Compulsory Oblations:</strong> No fees, dues, or compulsory payments are required for admission, pastoral care, or sacraments (¶ 119).</span>
            </li>
            <li className="flex items-start gap-2 p-2 bg-[#FAF5EB] dark:bg-[#201A13] rounded">
              <span className="text-[#B48628] font-bold">•</span>
              <span><strong>Personal Purchases:</strong> Habits, books, retreats, and travel are purchased individually at personal expense (¶ 188, 229).</span>
            </li>
            <li className="flex items-start gap-2 p-2 bg-[#FAF5EB] dark:bg-[#201A13] rounded">
              <span className="text-[#B48628] font-bold">•</span>
              <span><strong>Sustainable Observance:</strong> Low-cost or no-cost accommodations are always agreed if finances are limited (¶ 120).</span>
            </li>
          </ul>
        </div>

        {/* Vocational Inquiry Form */}
        <div className="max-w-2xl mx-auto p-8 sm:p-10 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex p-2 rounded-full bg-[#EADAB2] dark:bg-[#382B1B] text-[#784A12] dark:text-[#E6CA65]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              Begin a Vocational Conversation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
              Whether you are drawn to the Inquirer stage or the Companion circle, we welcome your inquiry in prayer.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-xl text-center space-y-3 font-serif">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-xl font-bold text-emerald-900 dark:text-emerald-200">
                Inquiry Received in Fellowship
              </h4>
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                Thank you, <strong>{formData.name}</strong>. Your vocational reflection has been recorded. We recommend exploring the 30-Day Reflection Plan while awaiting pastoral contact.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs text-emerald-800 dark:text-emerald-400 underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-serif">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Francis"
                    className="w-full px-3 py-2 text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  State of Life & Vocation
                </label>
                <select
                  value={formData.stateOfLife}
                  onChange={(e) => setFormData({ ...formData, stateOfLife: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                >
                  <option>Single (Lay)</option>
                  <option>Married / In a Committed Partnership (Lay)</option>
                  <option>Ordained Minister / Clergy (LCAC or Ecumenical)</option>
                  <option>Discerning Consecrated Celibacy</option>
                  <option>Seeking to join as Companion / Associate</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
                  What draws you to the Franciscan Way?
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a little of your spiritual journey, prayer life, or desire for fraternity..."
                  className="w-full px-3 py-2 text-sm bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                />
              </div>

              <div className="p-3 bg-[#FAF5EB] dark:bg-[#221B14] rounded-lg flex items-start gap-2 border border-[#E6DCBF] dark:border-[#362A1B]">
                <input
                  type="checkbox"
                  id="nonStipendiaryAck"
                  required
                  checked={formData.understoodNonStipendiary}
                  onChange={(e) =>
                    setFormData({ ...formData, understoodNonStipendiary: e.target.checked })
                  }
                  className="mt-1 accent-[#784A12]"
                />
                <label htmlFor="nonStipendiaryAck" className="text-xs text-stone-600 dark:text-stone-400 leading-normal font-serif">
                  I understand that OSFC is a dispersed religious order where all members (lay and ordained) serve voluntarily on an unpaid, non-stipendiary basis and provide for their own living expenses.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2C1E14] hover:bg-[#3D2C1E] text-[#FAF5ED] dark:bg-[#B48628] dark:hover:bg-[#C59B27] dark:text-[#18130E] rounded-lg text-sm font-serif font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Submit Vocational Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
