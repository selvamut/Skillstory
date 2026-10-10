import React from 'react';
import { FounderSection } from '../components/FounderSection';
import { Compass, BookOpen, Target, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-[#F8F6F3] border-b border-[#E8E4DD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>The Story &amp; Philosophy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#202124] tracking-tight leading-tight">
            Helping People Recognize Their Strengths and Present Them with Purpose.
          </h1>

          <p className="text-lg sm:text-xl text-[#5F6368] leading-relaxed max-w-2xl mx-auto">
            SkillStory was founded to solve a pervasive challenge: talented students build meaningful projects and acquire deep technical skills, but lack a structured framework to articulate them to the professional world.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* COMPLETE FOUNDER SECTION (Section 2 & 5 of instructions)*/}
      {/* ======================================================== */}
      <FounderSection />

      {/* Why SkillStory Exists: 3 Core Pillars */}
      <section className="py-20 md:py-24 bg-white border-b border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              What We Stand For
            </h2>
            <p className="text-base text-[#5F6368]">
              Career guidance should be accessible, honest, and grounded in real capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DD] space-y-4 hover:border-[#8B1E2D]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-[#202124]">
                Authenticity Over Buzzwords
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Recruiters easily spot inflated claims. We focus on articulating the genuine technical decisions, problem-solving iterations, and tools behind your coursework and personal builds.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DD] space-y-4 hover:border-[#8B1E2D]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-[#202124]">
                Radical Economic Accessibility
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Professional career consulting often charges thousands of rupees that college students cannot afford. We maintain standard fixed pricing starting at ₹200 to ensure every deserving student has access.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F8F6F3] rounded-2xl p-8 border border-[#E8E4DD] space-y-4 hover:border-[#8B1E2D]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-[#202124]">
                Storytelling as Self-Belief
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                When people understand how their projects connect to real industry needs, their confidence transforms. Crafting a resume is really about helping candidates believe in what they bring to the table.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 md:py-20 bg-[#F8F6F3]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#202124]">
            Ready to shape your own career story?
          </h3>
          <p className="text-sm sm:text-base text-[#5F6368] max-w-xl mx-auto">
            Reach out directly. We’re always glad to review what you have worked on and help you take the next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('packages')}
              className="px-6 py-3 rounded-lg bg-[#8B1E2D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#5E1421] transition-colors cursor-pointer"
            >
              View Packages
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
