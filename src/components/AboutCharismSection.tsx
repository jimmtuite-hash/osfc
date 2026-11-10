import React from 'react';
import { Leaf, Heart, Home, Users, Sun, Shield, Feather, Sparkles, BookOpen } from 'lucide-react';

interface AboutCharismProps {
  onNavigate: (tab: string) => void;
}

export const AboutCharismSection: React.FC<AboutCharismProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 parchment-bg text-[#2C1E14] dark:text-[#F5EFE6] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with Ornate Cross Divider */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#784A12] dark:text-[#E6CA65] font-semibold block">
            The Charism of Saints Francis & Clare
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241710] dark:text-[#FAF5ED]">
            The Friary of the Heart
          </h2>
          
          <div className="flex items-center justify-center gap-4 py-2 text-[#B48628]">
            <div className="w-12 h-px bg-[#B48628]/40" />
            <span className="text-sm font-serif">†</span>
            <div className="w-12 h-px bg-[#B48628]/40" />
          </div>

          <p className="font-serif text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
            “The Order is principally dispersed. Its members may be lay or ordained, married or single, employed or retired, living alone, within a family, or in an intentional religious household” (Rule ¶ 3).
          </p>
        </div>

        {/* 4 Pillars of OSFC Identity as Gilded Book Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294]/80 dark:border-[#3E301F] shadow-sm space-y-3 hover:border-[#B48628] transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-[#784A12] dark:text-[#E6CA65]">
                I.
              </span>
              <Sparkles className="w-4 h-4 text-[#B48628]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              Evangelical
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              The Holy Gospel is our first and highest rule. We move continually from Gospel to life and life to Gospel, translating Christ’s words into concrete daily choices.
            </p>
            <div className="text-[11px] font-sans text-stone-500 pt-1">
              Rule Paragraphs 10–11
            </div>
          </div>

          <div className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294]/80 dark:border-[#3E301F] shadow-sm space-y-3 hover:border-[#B48628] transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-[#784A12] dark:text-[#E6CA65]">
                II.
              </span>
              <Sun className="w-4 h-4 text-[#B48628]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              Ecclesial & Inclusive
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              Living within the Liberal Catholic Apostolic Church (LCAC), we revere the Sacraments and Apostolic Succession, welcoming all baptized souls without discrimination.
            </p>
            <div className="text-[11px] font-sans text-stone-500 pt-1">
              Rule Paragraph 15 · Constitutions ¶ 67
            </div>
          </div>

          <div className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294]/80 dark:border-[#3E301F] shadow-sm space-y-3 hover:border-[#B48628] transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-[#784A12] dark:text-[#E6CA65]">
                III.
              </span>
              <Users className="w-4 h-4 text-[#B48628]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              One Fraternity
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              Friars and sisters form one spiritual family of equal dignity. Ordination, gender, wealth, and marriage create no higher caste of religious status.
            </p>
            <div className="text-[11px] font-sans text-stone-500 pt-1">
              Rule Paragraph 16 · Constitutions ¶ 77
            </div>
          </div>

          <div className="p-6 bg-[#FCF9F2] dark:bg-[#1D1711] rounded-xl border border-[#D5C294]/80 dark:border-[#3E301F] shadow-sm space-y-3 hover:border-[#B48628] transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-bold text-[#784A12] dark:text-[#E6CA65]">
                IV.
              </span>
              <Leaf className="w-4 h-4 text-[#B48628]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              Missionary Peace
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              Announcing peace by becoming peaceable in heart and speech, offering service to the poor as brothers and sisters, and protecting Sister Mother Earth.
            </p>
            <div className="text-[11px] font-sans text-stone-500 pt-1">
              Rule Paragraphs 43–51
            </div>
          </div>

        </div>

        {/* The Dispersed Vocation Deep Dive framed like an illuminated manuscript */}
        <div className="p-8 sm:p-12 bg-[#FCF9F2] dark:bg-[#1A1510] gilded-frame rounded-2xl shadow-md space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#784A12] dark:text-[#E6CA65] font-semibold block">
                The Dispersed Vocation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E14] dark:text-[#FAF5ED] leading-snug">
                The Home as a Friary of the Heart
              </h3>
              <p className="font-serif text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                Rather than treating family life, ordinary employment, and neighbourhood duties as interruptions to religious devotion, the Order embraces them as our primary field of holiness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 pt-2 font-serif">
                <div className="flex items-start gap-2.5 p-3 bg-[#FAF5EB] dark:bg-[#221B14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B]">
                  <Home className="w-4 h-4 text-[#855B1B] dark:text-[#E6CA65] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#2C1E14] dark:text-[#FAF5ED] block font-bold">Domestic Sanctity:</strong> Family duties take precedence over optional gatherings. Non-member spouses and children are fully honoured.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 bg-[#FAF5EB] dark:bg-[#221B14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B]">
                  <Feather className="w-4 h-4 text-[#855B1B] dark:text-[#E6CA65] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#2C1E14] dark:text-[#FAF5ED] block font-bold">Dignity of Work:</strong> Manual, domestic, professional, or caregiving labour is received as grace and offered to God.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 bg-[#FAF5EB] dark:bg-[#221B14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B]">
                  <Leaf className="w-4 h-4 text-[#855B1B] dark:text-[#E6CA65] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#2C1E14] dark:text-[#FAF5ED] block font-bold">Sister Earth:</strong> Attainable ecological commitments in food, travel, energy, purchasing, and waste.
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 bg-[#FAF5EB] dark:bg-[#221B14] rounded-lg border border-[#E6DCBF] dark:border-[#362A1B]">
                  <Shield className="w-4 h-4 text-[#855B1B] dark:text-[#E6CA65] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#2C1E14] dark:text-[#FAF5ED] block font-bold">Conscience & Due Process:</strong> High safeguarding vigilance, fair complaints procedures, and protection of conscience.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Three Texts Interlock */}
            <div className="lg:col-span-5 bg-[#FAF6EE] dark:bg-[#201A14] p-6 rounded-xl border border-[#D5C294] dark:border-[#3D301F] space-y-4">
              <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block border-b border-[#D8C7A0] dark:border-[#3D301F] pb-2">
                The Three Living Texts
              </span>

              <div className="space-y-3 text-xs sm:text-sm font-serif">
                <div className="p-3 bg-white dark:bg-[#18130E] rounded-lg border border-[#E6DCBF] dark:border-[#332718]">
                  <strong className="font-bold text-[#784A12] dark:text-[#E6CA65] block">The Rule:</strong>
                  <span>Sets forth the spiritual form of life and evangelical vision by which all other provisions are judged (¶¶ 6–62).</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#18130E] rounded-lg border border-[#E6DCBF] dark:border-[#332718]">
                  <strong className="font-bold text-[#784A12] dark:text-[#E6CA65] block">The Constitutions:</strong>
                  <span>Gives stable juridical expression, safeguarding, and servant governance (¶¶ 63–146).</span>
                </div>
                <div className="p-3 bg-white dark:bg-[#18130E] rounded-lg border border-[#E6DCBF] dark:border-[#332718]">
                  <strong className="font-bold text-[#784A12] dark:text-[#E6CA65] block">The Customary:</strong>
                  <span>Translates both into daily rhythms of prayer, simplicity, and mutual care (¶¶ 147–236).</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => onNavigate('documents')}
                  className="text-xs font-serif font-bold text-[#784A12] dark:text-[#E6CA65] hover:underline cursor-pointer"
                >
                  Read the Rule, Constitutions & Customary in Full →
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* The Evangelical Counsels Reimagined in Dispersed Life */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-serif text-xs uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
              Chapter III of the Rule
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E14] dark:text-[#FAF5ED]">
              The Evangelical Counsels in Dispersed Life
            </h3>
            <p className="font-serif text-stone-600 dark:text-stone-400 text-sm italic">
              “In a dispersed order they are not reduced to monastic forms, nor diluted into vague aspiration” (Rule ¶ 27).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-2 shadow-xs">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                Orders Use of Goods
              </span>
              <h4 className="font-serif font-bold text-xl text-[#2C1E14] dark:text-[#FAF5ED]">
                Simplicity
              </h4>
              <p className="font-serif text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Living without anything of our own: not by denying lawful property or family duty, but by refusing possessiveness and living as thankful stewards.
              </p>
              <div className="text-[11px] font-sans text-stone-500 pt-1">
                Paragraphs 28–29
              </div>
            </div>

            <div className="p-6 bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-2 shadow-xs">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                Orders Love & Relationship
              </span>
              <h4 className="font-serif font-bold text-xl text-[#2C1E14] dark:text-[#FAF5ED]">
                Chastity
              </h4>
              <p className="font-serif text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Integrated love lived faithfully according to state of life: mutual self-giving in marriage, integrity in single life, or fidelity to freely chosen celibacy.
              </p>
              <div className="text-[11px] font-sans text-stone-500 pt-1">
                Paragraphs 30–31
              </div>
            </div>

            <div className="p-6 bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-2 shadow-xs">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                Orders Freedom to God
              </span>
              <h4 className="font-serif font-bold text-xl text-[#2C1E14] dark:text-[#FAF5ED]">
                Obedience
              </h4>
              <p className="font-serif text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Attentive listening to God through Gospel, prayer, conscience, and fraternity. Ministers may never command anything contrary to conscience, law, or safety.
              </p>
              <div className="text-[11px] font-sans text-stone-500 pt-1">
                Paragraphs 32–33
              </div>
            </div>

            <div className="p-6 bg-[#FCF9F2] dark:bg-[#1C1712] rounded-xl border border-[#D5C294] dark:border-[#3E301F] space-y-2 shadow-xs">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#784A12] dark:text-[#E6CA65] font-bold block">
                Orders Power as Service
              </span>
              <h4 className="font-serif font-bold text-xl text-[#2C1E14] dark:text-[#FAF5ED]">
                Minority
              </h4>
              <p className="font-serif text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Being lesser ones among God’s people: choosing solidarity over social distance, refusing clericalism and prestige, and washing one another’s feet in love.
              </p>
              <div className="text-[11px] font-sans text-stone-500 pt-1">
                Paragraph 34
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
