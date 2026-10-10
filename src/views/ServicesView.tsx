import React, { useState } from 'react';
import {
  ProfileServiceIllustration,
  PresenceServiceIllustration,
  OpportunityServiceIllustration,
  ProjectServiceIllustration,
} from '../components/Illustrations';
import {
  ArrowRight,
  MessageSquare,
  Mail,
  Check,
  Clock,
  ShieldCheck,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActiveTab }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'core' | 'additional'>('all');

  // Proposal Page 2: Four Core Categories
  const coreCategories = [
    {
      id: 'profile',
      number: '01 · Profile',
      tagline: 'Your professional foundation',
      title: 'Profile',
      price: '₹200',
      priceNote: 'Standard rate',
      turnaround: 'Within 3 days',
      illustration: <ProfileServiceIllustration />,
      summary: 'Turns your education and experience into a resume and LinkedIn profile that actually represent you.',
      items: [
        'Resume creation & rework',
        'JD-based resume customization',
        'Resume review & improvement',
        'LinkedIn profile setup & optimization',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to enquire about 01 · Profile (₹200).',
    },
    {
      id: 'presence',
      number: '02 · Presence',
      tagline: 'Showcase your work',
      title: 'Presence',
      price: '₹500',
      priceNote: 'Standard rate',
      turnaround: '7–15 days',
      illustration: <PresenceServiceIllustration />,
      summary: 'Helps your projects, skills and personal brand show up clearly wherever someone looks you up.',
      items: [
        'Portfolio website guidance',
        'Project & achievement showcase',
        'LinkedIn content guidance',
        'Ethical AI-assisted content support',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to enquire about 02 · Presence (₹500).',
    },
    {
      id: 'opportunity',
      number: '03 · Opportunity',
      tagline: 'Navigate the job search',
      title: 'Opportunity',
      price: 'Starting at ₹300',
      priceNote: 'Practical session',
      turnaround: '2–3 days',
      illustration: <OpportunityServiceIllustration />,
      summary: 'Practical guidance on finding the right opportunities and applying to them with confidence.',
      items: [
        'Where to find relevant roles',
        'Understanding job descriptions',
        'Application guidance',
        'Basic networking guidance',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to enquire about 03 · Opportunity (Starting at ₹300).',
    },
    {
      id: 'project',
      number: '04 · Project',
      tagline: 'Present your academic work',
      title: 'Project',
      price: 'Starting at ₹1,500',
      priceNote: 'End-to-end guidance',
      turnaround: '5–7 days',
      illustration: <ProjectServiceIllustration />,
      summary: 'Turns your final-year project into something you can document and explain with confidence.',
      items: [
        'Final-year project guidance',
        'Structure & documentation support',
        'Presentation preparation',
        'Guidance for interview discussions',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to enquire about 04 · Project (Starting at ₹1,500).',
    },
  ];

  // Proposal Page 3: Additional Support (Standalone Support for Specific Needs)
  const additionalSupport = [
    {
      id: 'project-support',
      title: 'Project Support',
      tagline: 'Practical guidance across your final-year project journey, from planning to presentation.',
      price: 'Starting at ₹1,500',
      items: [
        'Topic selection & research planning',
        'Data organization & analysis guidance',
        'Documentation, structure & editing',
        'Presentation & viva preparation',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to enquire about Project Support.',
    },
    {
      id: 'job-search-guidance',
      title: 'Job-Search Guidance',
      tagline: 'A practical session to help you understand where to look, how to apply, and how to prepare.',
      price: 'Starting at ₹300',
      items: [
        'Where to search & how to use LinkedIn effectively',
        'Understanding job descriptions & keywords',
        'Writing professional application emails',
        'Fresher interview & self-introduction preparation',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to enquire about Job-Search Guidance.',
    },
    {
      id: 'linkedin-growth',
      title: 'LinkedIn Growth',
      tagline: 'Guidance on building a consistent, genuine LinkedIn presence over time.',
      price: '₹400',
      items: [
        'Profile, headline & Featured section guidance',
        'A simple content strategy for your field',
        'Responsible use of AI for post writing',
        'Professional networking guidance',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to enquire about LinkedIn Growth (₹400).',
    },
  ];

  // Proposal Page 4: Our Promise
  const promises = [
    'We work only with your genuine skills, projects and achievements — nothing fabricated.',
    'You review and approve everything before it’s final.',
    'AI is used only as an assistance tool, never a replacement for your own work.',
    'We don’t guarantee jobs, interviews or placements — we help you present yourself clearly.',
  ];

  return (
    <div className="py-12 md:py-20 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header strictly using proposal wording */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <span>What We Offer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#202124] tracking-tight">
            Guidance &amp; Support for Your Real Work
          </h1>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            SkillStory's work is organized into four simple categories. Each one takes something you already have — your education, projects, skills or achievements — and helps you present it clearly. Every category uses guidance and support only; nothing is fabricated on your behalf.
          </p>

          {/* Segmented Filter Control */}
          <div className="flex items-center justify-center gap-2 p-1 bg-[#EAE5DE] rounded-xl max-w-xs mx-auto pt-1 mt-6">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white text-[#202124] shadow-sm'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setSelectedFilter('core')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'core'
                  ? 'bg-white text-[#202124] shadow-sm'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              Core Categories
            </button>
            <button
              onClick={() => setSelectedFilter('additional')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'additional'
                  ? 'bg-white text-[#202124] shadow-sm'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              Additional Support
            </button>
          </div>
        </div>

        {/* Section 1: The Four Core Categories */}
        {(selectedFilter === 'all' || selectedFilter === 'core') && (
          <div className="space-y-10">
            <div className="border-b border-[#E8E4DD] pb-4">
              <h2 className="text-2xl font-display font-bold text-[#202124]">
                Four Core Service Categories
              </h2>
              <p className="text-xs text-[#5F6368] mt-1">
                Taking what you already have and shaping it into a credible professional story.
              </p>
            </div>

            <div className="space-y-12">
              {coreCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl border border-[#E8E4DD] p-6 sm:p-8 lg:p-10 shadow-sm hover:border-[#8B1E2D]/40 transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual 2D Illustration */}
                    <div className="lg:col-span-5 flex justify-center bg-[#F8F6F3] rounded-xl p-4 border border-[#ECE7E0]">
                      {category.illustration}
                    </div>

                    {/* Content Details */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F0ECE6] pb-4">
                        <div>
                          <span className="text-xs font-mono font-bold tracking-wider text-[#8B1E2D]">
                            {category.number}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#202124] mt-0.5">
                            {category.tagline}
                          </h3>
                        </div>

                        <div className="sm:text-right mt-2 sm:mt-0">
                          <span className="text-3xl font-display font-black text-[#202124]">
                            {category.price}
                          </span>
                          <span className="block text-[11px] text-[#5F6368]">
                            {category.priceNote}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-[#3C4043] leading-relaxed">
                        {category.summary}
                      </p>

                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#202124]">
                          What's Included:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3C4043]">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#F0ECE6]">
                        <div className="flex items-center gap-2 text-xs text-[#5F6368]">
                          <Clock className="w-3.5 h-3.5 text-[#8B1E2D]" />
                          <span>Delivery: <strong>{category.turnaround}</strong></span>
                        </div>

                        <div className="flex items-center gap-3">
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(category.whatsappMsg)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Enquire on WhatsApp</span>
                          </a>

                          <a
                            href={`mailto:selvamuthu20200@gmail.com?subject=${encodeURIComponent(
                              `Enquiry for ${category.number} - ${category.tagline}`
                            )}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#202124] text-[#202124] hover:bg-[#202124] hover:text-white text-xs font-bold transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Email</span>
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Additional Support (Proposal Page 3) */}
        {(selectedFilter === 'all' || selectedFilter === 'additional') && (
          <div className="space-y-8 pt-4">
            <div className="border-b border-[#E8E4DD] pb-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E2D] uppercase tracking-wider mb-1">
                <span>Focused Standalone Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#202124]">
                Additional Support
              </h2>
              <p className="text-sm text-[#5F6368] mt-1">
                Beyond the core packages, SkillStory offers focused, standalone support for specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalSupport.map((support) => (
                <div
                  key={support.id}
                  className="bg-white rounded-2xl border border-[#E8E4DD] p-7 flex flex-col justify-between shadow-sm hover:border-[#8B1E2D]/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[#202124]">{support.title}</h3>
                      <span className="text-sm font-bold text-[#8B1E2D]">{support.price}</span>
                    </div>

                    <p className="text-xs text-[#5F6368] leading-relaxed">
                      {support.tagline}
                    </p>

                    <div className="border-t border-[#F0ECE6] pt-4 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">
                        Focus Areas:
                      </p>
                      <ul className="space-y-2 text-xs text-[#3C4043]">
                        {support.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#8B1E2D] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(support.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#202124] hover:bg-[#8B1E2D] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Enquire Directly</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Our Promise (Proposal Page 4) */}
        <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 md:p-12 space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <h3 className="text-2xl font-display font-bold text-[#202124]">
              Our Promise
            </h3>
            <p className="text-xs text-[#5F6368]">
              Straightforward, transparent collaboration built on integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F6F3] border border-[#E8E4DD]">
                <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#202124] font-medium leading-relaxed">
                  {promise}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
