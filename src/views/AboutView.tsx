import React from 'react';
import { FounderSection } from '../components/FounderSection';
import { Compass, Target, ShieldCheck, ArrowRight, Eye, Users, AlertCircle, Lightbulb } from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  // Proposal Page 4: Our Promise
  const promises = [
    'We work only with your genuine skills, projects and achievements — nothing fabricated.',
    'You review and approve everything before it’s final.',
    'AI is used only as an assistance tool, never a replacement for your own work.',
    'We don’t guarantee jobs, interviews or placements — we help you present yourself clearly.',
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Hero: Proposal Page 1 */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F8F6F3] border-b border-[#E8E4DD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>About SkillStory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#202124] tracking-tight leading-tight text-balance">
            Helping Students Turn Education, Skills, Projects and Achievements into Stronger Profiles.
          </h1>

          <p className="text-lg sm:text-xl text-[#3C4043] leading-relaxed max-w-2xl mx-auto">
            Most students already have real skills, projects and achievements — what they're missing is a clear, professional way to show them. SkillStory helps final-year students and fresh graduates turn what they already have into resumes, LinkedIn profiles and portfolios that actually reflect their worth.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards: Proposal Page 1 */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E8E4DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-[#F8F6F3] border border-[#E8E4DD] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xs font-bold text-[#8B1E2D] uppercase tracking-widest">Our Vision</h2>
              <h3 className="text-2xl font-display font-bold text-[#202124]">
                A Future Where Every Student Can Present Their Potential With Confidence.
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Empowering students to step forward with self-belief, clarity, and an authentic professional narrative.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-[#F8F6F3] border border-[#E8E4DD] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xs font-bold text-[#8B1E2D] uppercase tracking-widest">Our Mission</h2>
              <h3 className="text-2xl font-display font-bold text-[#202124]">
                Turn Education, Skills, Projects &amp; Achievements into Clear Career Profiles.
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                To help students turn what they have learned, created and achieved into clear, credible and professional career profiles.
              </p>
            </div>

          </div>

          {/* Proposal Page 1: Core Framework */}
          <div className="mt-12 overflow-hidden rounded-xl border border-[#E8E4DD] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E4DD]">
              
              <div className="p-6 space-y-1.5">
                <span className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider block">For</span>
                <p className="font-bold text-base text-[#202124]">Final-year students &amp; fresh graduates</p>
                <p className="text-xs text-[#5F6368]">And anyone with projects or achievements they need help presenting.</p>
              </div>

              <div className="p-6 space-y-1.5">
                <span className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider block">The Gap</span>
                <p className="font-bold text-base text-[#202124]">Real skills and projects not presented professionally</p>
                <p className="text-xs text-[#5F6368]">Valuable capabilities hidden behind weak formatting or lack of narrative.</p>
              </div>

              <div className="p-6 space-y-1.5">
                <span className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider block">The Idea</span>
                <p className="font-bold text-base text-[#202124]">Shape what you already have into a credible story</p>
                <p className="text-xs text-[#5F6368]">Guidance and support only; nothing fabricated on your behalf.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />

      {/* Our Promise: Proposal Page 4 */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E8E4DD]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              Our Promise
            </h2>
            <p className="text-base text-[#5F6368] max-w-xl mx-auto">
              Our principles are transparent, ethical, and focused entirely on supporting genuine student work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#F8F6F3] border border-[#E8E4DD]"
              >
                <div className="w-6 h-6 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-[#202124] leading-relaxed">
                  {promise}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Who It's For & What's Next: Proposal Page 4 */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
            WHO IT'S FOR &amp; WHAT'S NEXT
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#202124]">
            Many students already have what it takes — SkillStory just helps them show it.
          </h3>
          <p className="text-sm sm:text-base text-[#5F6368] max-w-xl mx-auto leading-relaxed">
            The next step is simple: test the idea with real students, listen, and improve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('packages')}
              className="px-6 py-3 rounded-lg bg-[#8B1E2D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5E1421] transition-colors cursor-pointer"
            >
              View Bundled Packages
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 rounded-lg border border-[#202124] text-[#202124] hover:bg-[#202124] hover:text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
