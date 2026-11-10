import React, { useState } from 'react';
import {
  FORMATION_COURSES,
  CORRESPONDENCE_CYCLE,
  ASSESSMENT_OUTCOMES,
  FormationCourse
} from '../data/formationData.ts';
import {
  GraduationCap,
  BookOpen,
  Compass,
  CheckCircle2,
  FileText,
  Search,
  ExternalLink,
  Users,
  Shield,
  Heart,
  ChevronDown,
  ChevronUp,
  Download,
  ArrowRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface FormationSchoolSectionProps {
  onNavigateToParagraph?: (paraNum: number) => void;
  onOpenInquiry?: () => void;
}

export const FormationSchoolSection: React.FC<FormationSchoolSectionProps> = ({
  onNavigateToParagraph,
  onOpenInquiry,
}) => {
  const [selectedStage, setSelectedStage] = useState<'all' | 'enquiry' | 'postulancy' | 'novitiate'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourseCode, setExpandedCourseCode] = useState<string | null>('OSFC-101');
  const [viewPdfMode, setViewPdfMode] = useState(false);

  const filteredCourses = FORMATION_COURSES.filter((c) => {
    if (selectedStage !== 'all' && c.stage !== selectedStage) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      c.code.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.purpose.toLowerCase().includes(q) ||
      c.principalAreas.some((a) => a.toLowerCase().includes(q))
    );
  });

  const toggleCourseExpand = (code: string) => {
    setExpandedCourseCode(expandedCourseCode === code ? null : code);
  };

  return (
    <section className="py-16 parchment-bg text-[#2C1E14] dark:text-[#F5EFE6] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header styled as an Academic Franciscan Prospectus */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#784A12] dark:text-[#E6CA65] font-bold block">
            The OSFC School of Franciscan Formation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#241710] dark:text-[#FAF5ED]">
            Formation Without Walls
          </h2>

          <div className="flex items-center justify-center gap-4 py-1 text-[#B48628]">
            <div className="w-12 h-px bg-[#B48628]/40" />
            <span className="text-sm font-serif">†</span>
            <div className="w-12 h-px bg-[#B48628]/40" />
          </div>

          <p className="font-serif text-stone-700 dark:text-stone-300 text-base sm:text-lg italic leading-relaxed">
            “Study deeply · Pray faithfully · Live the Gospel where you are · Walk the journey with others.”
          </p>
          <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-400">
            A full correspondence prospectus from initial enquiry to lifelong dispersed religious discipleship.
          </p>

          {/* Central Conviction Gilded Plate */}
          <div className="p-6 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md text-center mt-6 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-[#784A12] dark:text-[#E6CA65] block">
              Our Central Conviction
            </span>
            <p className="font-serif text-lg sm:text-xl italic text-[#2C1E14] dark:text-[#FAF5ED] leading-relaxed max-w-2xl mx-auto">
              “The place where Franciscan life will ordinarily be lived should also become one of the principal places where Franciscan formation is tested.”
            </p>
          </div>
        </div>

        {/* The 3-Step Correspondence Rhythm */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="font-serif text-2xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              The Correspondence Formation Method
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
              A deliberate rhythm of study, prayer, practical experiment, accompaniment and review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORRESPONDENCE_CYCLE.map((cycle, i) => (
              <div
                key={i}
                className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-3 shadow-xs hover:border-[#B48628] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#EADAB2] dark:bg-[#382B1B] text-[#784A12] dark:text-[#F3C969] font-serif font-bold text-sm flex items-center justify-center border border-[#B48628]/40">
                  {i + 1}
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2C1E14] dark:text-[#FAF5ED]">
                  {cycle.step}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                  {cycle.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Correspondence Suits a Dispersed Order */}
        <div className="p-8 sm:p-10 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241710] dark:text-[#FAF5ED]">
            Why Dispersed Formation Produces Authentic Franciscan Life
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif">
            <div className="p-4 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717] space-y-1">
              <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block text-base">
                1. Formation in Real Life
              </strong>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Franciscan living is not postponed. Gospel values are tested immediately in money, household budgets, workplace disagreements, rest, and care for local neighbours.
              </p>
            </div>

            <div className="p-4 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717] space-y-1">
              <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block text-base">
                2. Intentional Fraternity
              </strong>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                When brothers and sisters do not share one cloister building, communion cannot be taken for granted. Reliable communication and mutual care are cultivated deliberately.
              </p>
            </div>

            <div className="p-4 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717] space-y-1">
              <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block text-base">
                3. Written Work Slows Discernment
              </strong>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Writing makes it possible to distinguish evidence from temporary impressions, creating a continuing record of formation dialogue.
              </p>
            </div>

            <div className="p-4 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717] space-y-1">
              <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block text-base">
                4. Private Prayer Remains Private
              </strong>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Formal evidence is supplied through essays, source studies, and reports without requiring the routine surrender of intimate prayer journals.
              </p>
            </div>

            <div className="p-4 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717] space-y-1">
              <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block text-base">
                5. Whole-Person Formation
              </strong>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Coursework is read alongside whole-person maturity. Strong writing cannot substitute for safe boundaries, fraternity, reliability, or humble service.
              </p>
            </div>

            <div className="p-4 bg-[#FAF5EB] dark:bg-[#201A13] rounded-lg border border-[#E6DCBF] dark:border-[#332717] space-y-1">
              <strong className="text-[#2C1E14] dark:text-[#FAF5ED] font-bold block text-base">
                6. Accessibility with High Standards
              </strong>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Methods may be adapted appropriately for disability, health, caring duties, or work patterns while maintaining the seriousness of formation.
              </p>
            </div>
          </div>
        </div>

        {/* Curriculum Browser */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D8C7A0]/80 dark:border-[#3E301F] pb-4">
            <div className="space-y-1">
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#784A12] dark:text-[#E6CA65] font-bold block">
                Syllabus & Course Catalogue
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241710] dark:text-[#FAF5ED]">
                Explore the Formation Curriculum
              </h3>
            </div>

            {/* Toggle between Interactive Catalogue and Full PDF Prospectus */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setViewPdfMode(false)}
                className={`px-3.5 py-1.5 text-xs font-serif font-bold rounded-lg transition-colors cursor-pointer ${
                  !viewPdfMode
                    ? 'bg-[#2C1E14] text-[#FAF5ED] dark:bg-[#B48628] dark:text-[#17120D] shadow-xs'
                    : 'bg-[#F2E8D2] dark:bg-[#282018] text-[#54391F] dark:text-[#E8D8B8]'
                }`}
              >
                Interactive Syllabus
              </button>
              <button
                onClick={() => setViewPdfMode(true)}
                className={`px-3.5 py-1.5 text-xs font-serif font-bold rounded-lg transition-colors cursor-pointer ${
                  viewPdfMode
                    ? 'bg-[#2C1E14] text-[#FAF5ED] dark:bg-[#B48628] dark:text-[#17120D] shadow-xs'
                    : 'bg-[#F2E8D2] dark:bg-[#282018] text-[#54391F] dark:text-[#E8D8B8]'
                }`}
              >
                Official PDF Prospectus
              </button>
            </div>
          </div>

          {viewPdfMode ? (
            /* PDF Viewer Mode */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#FCF9F2] dark:bg-[#1D1711] border border-[#D5C294] dark:border-[#3E301F] rounded-xl">
                <div className="font-serif text-sm text-stone-700 dark:text-stone-300">
                  Document: <strong className="font-bold text-[#2C1E14] dark:text-[#FAF5ED]">OSFC_Formation_Without_Walls_Full_Prospectus_2026.pdf</strong> (19 pages)
                </div>
                <a
                  href="/assets/aistudio/OSFC_Formation_Without_Walls_Full_Prospectus_2026__1__deb11ad1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2C1E14] hover:bg-[#3D2C1E] text-[#FAF5ED] dark:bg-[#B48628] dark:hover:bg-[#C59B27] dark:text-[#17120D] rounded-lg text-xs font-serif font-bold transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Prospectus</span>
                </a>
              </div>

              <div className="w-full h-[85vh] bg-stone-200 dark:bg-stone-900 rounded-xl overflow-hidden border-2 border-[#D5C294] dark:border-[#3E301F] shadow-inner">
                <iframe
                  src="/assets/aistudio/OSFC_Formation_Without_Walls_Full_Prospectus_2026__1__deb11ad1.pdf#toolbar=1"
                  title="OSFC Formation Without Walls Full Prospectus"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ) : (
            /* Interactive Syllabus Mode */
            <div className="space-y-6">
              
              {/* Filter controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#D5C294] dark:border-[#3E301F] shadow-xs">
                
                {/* Stage Filters */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: 'all', label: 'All Courses (33)' },
                    { id: 'enquiry', label: 'Stage 0: Enquiry (1)' },
                    { id: 'postulancy', label: 'Stage I: Postulancy (8)' },
                    { id: 'novitiate', label: 'Stage II: Novitiate (24)' },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedStage(filter.id as any)}
                      className={`px-3 py-1.5 text-xs font-serif font-bold rounded-md transition-colors cursor-pointer ${
                        selectedStage === filter.id
                          ? 'bg-[#2C1E14] text-[#FAF5ED] dark:bg-[#B48628] dark:text-[#17120D] shadow-xs'
                          : 'bg-[#F2E8D2] dark:bg-[#282018] text-[#54391F] dark:text-[#E8D8B8] hover:bg-[#E9DCBF]'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses or topics..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#FAF5EB] dark:bg-[#221B14] border border-[#D5C294] dark:border-[#423320] rounded-lg text-[#2C1E14] dark:text-[#FAF5ED] placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#B48628]"
                  />
                </div>

              </div>

              {/* Course Accordion Cards */}
              <div className="space-y-4">
                {filteredCourses.length === 0 ? (
                  <div className="p-8 text-center bg-[#FCF9F2] dark:bg-[#1A1510] rounded-xl border border-[#D5C294] dark:border-[#3E301F] text-stone-500 font-serif">
                    No courses match your query “{searchQuery}”.
                  </div>
                ) : (
                  filteredCourses.map((course) => {
                    const isExpanded = expandedCourseCode === course.code;
                    return (
                      <div
                        key={course.code}
                        className="bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#D5C294] dark:border-[#3E301F] overflow-hidden shadow-xs transition-colors"
                      >
                        <div
                          onClick={() => toggleCourseExpand(course.code)}
                          className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#F6EEDC] dark:hover:bg-[#241D15]"
                        >
                          <div className="flex items-start sm:items-center gap-3">
                            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[#EADAB2] dark:bg-[#382B1B] text-[#784A12] dark:text-[#F3C969] rounded border border-[#B48628]/40 shrink-0">
                              {course.code}
                            </span>
                            <div>
                              <h4 className="font-serif font-bold text-lg text-[#241710] dark:text-[#FAF5ED] leading-snug">
                                {course.title}
                              </h4>
                              {course.part && (
                                <span className="text-xs text-stone-600 dark:text-stone-400 block font-serif italic">
                                  {course.part}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                            <span className="text-xs text-stone-500 font-serif hidden sm:inline">
                              {course.principalAreas.length} Study Areas
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-[#B48628]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#B48628]" />
                            )}
                          </div>
                        </div>

                        {/* Expanded Course Details */}
                        {isExpanded && (
                          <div className="p-6 pt-0 border-t border-[#E6DCBF] dark:border-[#382B1B] space-y-5 bg-[#FAF5EB]/60 dark:bg-[#18130E]/50">
                            
                            <div className="space-y-1 pt-4">
                              <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                                Course Description
                              </span>
                              <p className="font-serif text-base text-[#2C1E14] dark:text-[#FAF5ED] leading-relaxed italic">
                                “{course.description}”
                              </p>
                            </div>

                            <div className="p-4 bg-[#F5ECDC] dark:bg-[#221B14] rounded-xl border border-[#D5C294] dark:border-[#3D301F] space-y-1">
                              <span className="font-serif text-xs uppercase tracking-wider text-[#784A12] dark:text-[#E6CA65] font-bold block">
                                Formation Purpose
                              </span>
                              <p className="font-serif text-sm text-[#382415] dark:text-[#EADBB8] leading-relaxed">
                                {course.purpose}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                                Principal Study Areas
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif text-[#2C1E14] dark:text-[#FAF5ED]">
                                {course.principalAreas.map((area, idx) => (
                                  <div key={idx} className="flex items-start gap-2 bg-[#FCF9F2] dark:bg-[#1C1712] p-2.5 rounded-lg border border-[#D5C294]/60 dark:border-[#382B1B]">
                                    <span className="text-[#B48628] font-bold">•</span>
                                    <span>{area}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="pt-2 flex items-center justify-between text-xs text-stone-500 font-serif">
                              <span>Formator review & portfolio assignment required</span>
                              <button
                                onClick={onOpenInquiry}
                                className="text-[#784A12] dark:text-[#E6CA65] font-bold underline cursor-pointer"
                              >
                                Inquire about enrolment →
                              </button>
                            </div>

                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

            </div>
          )}
        </div>

        {/* Assessment System: Formation Rather Than Grades */}
        <div className="p-8 sm:p-10 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
              Evaluation & Accompaniment
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241710] dark:text-[#FAF5ED]">
              Assessment: Formation Rather Than Grades
            </h3>
            <p className="font-serif text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              The correspondence system uses formation-oriented outcomes rather than treating the programme as a competitive academic qualification. Course completion contributes evidence, but never creates an automatic entitlement to profession.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ASSESSMENT_OUTCOMES.map((item) => (
              <div
                key={item.code}
                className="p-4 bg-[#FAF5EB] dark:bg-[#201A13] rounded-xl border border-[#D5C294] dark:border-[#3D301F] space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EADAB2] dark:bg-[#382B1B] text-[#784A12] dark:text-[#F3C969] font-mono font-bold flex items-center justify-center text-sm border border-[#B48628]/40">
                  {item.code}
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2C1E14] dark:text-[#FAF5ED]">
                  {item.label}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-serif">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-[#F5ECDC] dark:bg-[#251E17] rounded-xl border-l-2 border-[#B48628] text-xs sm:text-sm text-stone-700 dark:text-stone-300 space-y-2 font-serif">
            <strong className="font-bold text-[#2C1E14] dark:text-[#FAF5ED] block text-base">
              The Role of the Formation Companion
            </strong>
            <p className="leading-relaxed">
              The Formation Companion accompanies rather than replaces conscience. Their role is to help the student notice patterns, engage the material truthfully, connect study with lived conduct, receive correction, and review practical objectives. Formation conversations provide a safe place to address difficulties that written work alone cannot disclose.
            </p>
          </div>
        </div>

        {/* Closing Invitation Box */}
        <div className="p-8 text-center bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md max-w-2xl mx-auto space-y-4">
          <Heart className="w-6 h-6 text-[#B48628] mx-auto" />
          <h4 className="font-serif text-2xl font-bold text-[#241710] dark:text-[#FAF5ED]">
            Begin Your Enquiry with “Come and See”
          </h4>
          <p className="font-serif text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
            An enquirer does not need to arrive already formed. The programme begins with <strong className="font-bold text-[#784A12] dark:text-[#E6CA65]">Come and See (OSFC-F001)</strong> precisely so that attraction can be explored with freedom and without pressure to apply.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 bg-[#2C1E14] hover:bg-[#3D2C1E] text-[#FAF5ED] dark:bg-[#B48628] dark:hover:bg-[#C59B27] dark:text-[#18130E] rounded-lg text-xs font-serif font-bold cursor-pointer transition-colors"
            >
              Contact the Formation Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
