import React from 'react';
import { MessageSquare, Mail, Compass, Anchor, ArrowUpRight } from 'lucide-react';

interface FounderSectionProps {
  onContactClick?: () => void;
  className?: string;
}

import { FOUNDER_PHOTO_DATA_URL } from '../assets/founderPhoto';

// Vite-compatible public asset path and bundled data URL for the official founder photograph
const PUBLIC_FOUNDER_PHOTO_PATH = `${import.meta.env.BASE_URL}skillstory-founder.jpg`;

export const FounderSection: React.FC<FounderSectionProps> = ({
  className = '',
}) => {
  return (
    <section className={`py-16 md:py-24 bg-[#F8F6F3] border-y border-[#E8E4DD] ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Founder Portrait Card                       */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              {/* Subtle Burgundy Editorial Offset Accent Frame */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#8B1E2D]/20 via-[#8B1E2D]/5 to-transparent -rotate-1 pointer-events-none" 
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-0 rounded-2xl border-2 border-[#8B1E2D]/30 translate-x-2 translate-y-2 pointer-events-none" 
              />

              {/* Main Portrait Card */}
              <div className="relative bg-[#F4EFEA] rounded-2xl overflow-hidden border border-[#DCD5C9] shadow-lg">
                
                {/* Photo Container: aspect-[3/4], cover fit, centered top */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#18181B]">
                  <img
                    src={FOUNDER_PHOTO_DATA_URL || PUBLIC_FOUNDER_PHOTO_PATH}
                    alt="Selvamuthu Arunachalam — Founder, SkillStory"
                    className="w-full h-full object-cover object-top transition-opacity duration-300"
                    loading="eager"
                    onError={(e) => {
                      // Fallback to public path if data URL has any browser restriction
                      const target = e.currentTarget;
                      if (target.src !== PUBLIC_FOUNDER_PHOTO_PATH) {
                        target.src = PUBLIC_FOUNDER_PHOTO_PATH;
                      }
                    }}
                  />
                </div>

                {/* Bottom Caption Bar: Clean, Professional, Permanent Branding */}
                <div className="bg-[#202124] text-white px-5 py-3.5 flex items-center justify-between border-t border-white/10">
                  <div>
                    <p className="text-sm font-semibold text-[#F8F6F3]">Selvamuthu Arunachalam</p>
                    <p className="text-xs text-[#E8A5AE] font-medium">Founder, SkillStory</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B8AEA0]">
                    <Anchor className="w-3.5 h-3.5 text-[#E8A5AE]" />
                    <span>SkillStory Studio</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Subtle caption quote below portrait card */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#5F6368]">
              <Compass className="w-3.5 h-3.5 text-[#8B1E2D]" />
              <span>Dedicated to student career clarity &amp; narrative direction</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Eyebrow, Heading, Title & Biography       */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Small Eyebrow Heading */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#8B1E2D]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#8B1E2D]">
                THE PERSON BEHIND SKILLSTORY
              </span>
            </div>

            {/* Main Heading: Founder Name */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#202124] tracking-tight leading-[1.15] mb-2.5">
              Selvamuthu Arunachalam
            </h2>

            {/* Professional Title & Academic Credential */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 text-base font-semibold text-[#8B1E2D] mb-6">
              <span>Founder, SkillStory</span>
              <span className="hidden sm:inline text-[#B8AEA0]" aria-hidden="true">|</span>
              <span className="text-sm sm:text-base font-medium text-[#4A4D52]">
                MBA — Logistics &amp; Supply Chain Management
              </span>
            </div>

            {/* Approved Founder Biography (Exact words from brief) */}
            <div className="space-y-4 text-base sm:text-lg text-[#3C4043] leading-relaxed font-normal">
              <p>
                SkillStory grew from a simple observation: many students have valuable skills, meaningful projects, and achievements, but struggle to present them professionally.
              </p>
              
              <p>
                Through my experience supporting student resumes, LinkedIn profiles, professional content, and portfolios, I saw an opportunity to help people communicate their potential with greater clarity and confidence.
              </p>

              <p>
                I started SkillStory to help students and early-career professionals turn what they have learned, created, and achieved into a stronger professional story.
              </p>

              <p>
                For me, this is about more than creating a resume. It is about helping people recognize their strengths and present them with purpose.
              </p>

              <p className="font-medium text-[#202124] pt-2 border-t border-[#E8E4DD]">
                SkillStory is a journey of learning, building, and helping one story at a time.
              </p>
            </div>

            {/* Quick Actions & Contact Adjacency */}
            <div className="mt-8 pt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20discuss%20my%20career%20story%20and%20resume."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-sm font-semibold shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start Your Story on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:selvamuthu20200@gmail.com?subject=Enquiry%20regarding%20SkillStory"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#202124] text-[#202124] hover:bg-[#202124] hover:text-white text-sm font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send an Email</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
