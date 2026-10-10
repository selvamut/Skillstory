import React, { useState } from 'react';
import { PackageBadgeIcon } from '../components/Illustrations';
import {
  Check,
  X,
  MessageSquare,
  Mail,
  ArrowRight,
  Calculator,
  Plus,
  ShieldCheck,
} from 'lucide-react';

interface PackagesViewProps {
  setActiveTab: (tab: string) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({ setActiveTab }) => {
  const [selectedBase, setSelectedBase] = useState<'profile' | 'pro' | 'complete'>('pro');
  const [addonLinkedin, setAddonLinkedin] = useState(false);
  const [addonJobSearch, setAddonJobSearch] = useState(false);
  const [addonProject, setAddonProject] = useState(false);

  const basePackages = {
    profile: {
      name: 'SkillStory Profile',
      price: 200,
      priceStr: '₹200',
      turnaround: '24–48 hours',
      desc: 'Essential single-column ATS resume overhaul for immediate job applications.',
    },
    pro: {
      name: 'SkillStory Pro',
      price: 300,
      priceStr: '₹300',
      turnaround: '48 hours',
      desc: 'Complete career narrative overhaul covering resume, LinkedIn copy, and cover letter.',
    },
    complete: {
      name: 'SkillStory Complete',
      price: 500,
      priceStr: '₹500',
      turnaround: '3–4 days',
      desc: 'Comprehensive career presence package with personal digital web portfolio and interview pitch.',
    },
  };

  // Calculate customized total
  const baseCost = basePackages[selectedBase].price;
  const linkedinCost = addonLinkedin ? 400 : 0;
  const jobSearchCost = addonJobSearch ? 300 : 0;
  const projectCost = addonProject ? 1500 : 0;
  const totalCost = baseCost + linkedinCost + jobSearchCost + projectCost;

  const getAddonListText = () => {
    const addons = [];
    if (addonLinkedin) addons.push('LinkedIn Growth (+₹400)');
    if (addonJobSearch) addons.push('Job Search Guidance (+₹300)');
    if (addonProject) addons.push('Project Support (+₹1,500)');
    return addons.length > 0 ? addons.join(', ') : 'None';
  };

  const dynamicWhatsAppMsg = `Hi SkillStory, I would like to book the following customized plan:
- Base: ${basePackages[selectedBase].name} (${basePackages[selectedBase].priceStr})
- Add-ons: ${getAddonListText()}
- Total Estimated: ₹${totalCost}

Please let me know how to proceed!`;

  return (
    <div className="py-12 md:py-20 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <span>Packages &amp; Plans</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#202124] tracking-tight">
            Clear Options. Standard Rates.
          </h1>
          <p className="text-lg text-[#5F6368] leading-relaxed">
            Choose a standalone service or combine packages tailored to where you are in your academic and job search journey.
          </p>
        </div>

        {/* 3 Main Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Package 1: Profile */}
          <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <PackageBadgeIcon tier="profile" />
                <div className="text-right">
                  <span className="text-3xl font-display font-black text-[#202124]">₹200</span>
                  <span className="block text-[11px] text-[#5F6368]">Standard rate</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#202124]">SkillStory Profile</h3>
                <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                  Best for: Students needing a quick, professional resume refresh before placement drives or off-campus deadlines.
                </p>
              </div>

              <div className="border-t border-[#F0ECE6] pt-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#202124]">Features Included:</p>
                <ul className="space-y-2.5 text-xs text-[#3C4043]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Single-column ATS-tested resume (Word &amp; PDF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Professional summary &amp; targeted headline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Action-oriented bullet points for 3–5 projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>1 revision round within 7 days</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20the%20SkillStory%20Profile%20package%20(₹200)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#202124] hover:bg-[#35373B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Book for ₹200</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Package 2: Pro (Highlighted) */}
          <div className="relative bg-white rounded-2xl border-2 border-[#8B1E2D] p-8 flex flex-col justify-between shadow-md ring-2 ring-[#8B1E2D]/20">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold uppercase tracking-wider">
              Most Popular
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <PackageBadgeIcon tier="pro" />
                <div className="text-right">
                  <span className="text-3xl font-display font-black text-[#8B1E2D]">₹300</span>
                  <span className="block text-[11px] text-[#5F6368]">Standard rate</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#202124]">SkillStory Pro</h3>
                <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                  Best for: Students seeking a coordinated presence across both resume submissions and LinkedIn discovery.
                </p>
              </div>

              <div className="border-t border-[#F0ECE6] pt-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8B1E2D]">Everything in Profile, plus:</p>
                <ul className="space-y-2.5 text-xs text-[#3C4043]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Complete LinkedIn profile copy (Headline, About, Experience)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Customizable cover letter framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Placement drive keyword alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>2 revision rounds within 10 days</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20the%20SkillStory%20Pro%20package%20(₹300)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Book for ₹300</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Package 3: Complete */}
          <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <PackageBadgeIcon tier="complete" />
                <div className="text-right">
                  <span className="text-3xl font-display font-black text-[#202124]">₹500</span>
                  <span className="block text-[11px] text-[#5F6368]">Standard rate</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#202124]">SkillStory Complete</h3>
                <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                  Best for: Ambitious graduates who want a digital portfolio website to showcase code, research, and live project demos.
                </p>
              </div>

              <div className="border-t border-[#F0ECE6] pt-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#202124]">Everything in Pro, plus:</p>
                <ul className="space-y-2.5 text-xs text-[#3C4043]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Single-page personal web portfolio structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>1-on-1 narrative consultation session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>30-second elevator pitch introduction script</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Continuous revisions through launch</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20the%20SkillStory%20Complete%20package%20(₹500)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#202124] hover:bg-[#35373B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Book for ₹500</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE PLAN CUSTOMIZER / CALCULATOR                 */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border border-[#E8E4DD] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Interactive Plan Customizer</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#202124]">
                Build Your Ideal Career Combination
              </h3>
              <p className="text-xs text-[#5F6368]">
                Select your base foundation and add optional guidance modules to compute your exact one-time total.
              </p>
            </div>

            {/* Step 1: Choose Base */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wide block">
                1. Select Base Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedBase('profile')}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBase === 'profile'
                      ? 'border-[#8B1E2D] bg-[#8B1E2D]/5 ring-1 ring-[#8B1E2D]'
                      : 'border-[#E8E4DD] hover:border-[#202124]'
                  }`}
                >
                  <p className="font-bold text-sm text-[#202124]">Profile</p>
                  <p className="text-xs text-[#5F6368]">Resume only</p>
                  <p className="text-base font-extrabold text-[#8B1E2D] mt-2">₹200</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBase('pro')}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBase === 'pro'
                      ? 'border-[#8B1E2D] bg-[#8B1E2D]/5 ring-1 ring-[#8B1E2D]'
                      : 'border-[#E8E4DD] hover:border-[#202124]'
                  }`}
                >
                  <p className="font-bold text-sm text-[#202124]">Pro</p>
                  <p className="text-xs text-[#5F6368]">Resume + LinkedIn</p>
                  <p className="text-base font-extrabold text-[#8B1E2D] mt-2">₹300</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedBase('complete')}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedBase === 'complete'
                      ? 'border-[#8B1E2D] bg-[#8B1E2D]/5 ring-1 ring-[#8B1E2D]'
                      : 'border-[#E8E4DD] hover:border-[#202124]'
                  }`}
                >
                  <p className="font-bold text-sm text-[#202124]">Complete</p>
                  <p className="text-xs text-[#5F6368]">Resume + Web Portfolio</p>
                  <p className="text-base font-extrabold text-[#8B1E2D] mt-2">₹500</p>
                </button>
              </div>
            </div>

            {/* Step 2: Optional Add-ons */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wide block">
                2. Select Add-on Modules (Optional)
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-[#E8E4DD] hover:bg-[#F8F6F3] cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addonLinkedin}
                      onChange={(e) => setAddonLinkedin(e.target.checked)}
                      className="w-4 h-4 text-[#8B1E2D] rounded focus:ring-[#8B1E2D]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#202124]">LinkedIn Growth &amp; Recruiter Outreach</p>
                      <p className="text-[11px] text-[#5F6368]">Full network engagement guide + 3 message templates</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#8B1E2D]">+₹400</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-[#E8E4DD] hover:bg-[#F8F6F3] cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addonJobSearch}
                      onChange={(e) => setAddonJobSearch(e.target.checked)}
                      className="w-4 h-4 text-[#8B1E2D] rounded focus:ring-[#8B1E2D]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#202124]">Job Search Guidance &amp; Role Matching</p>
                      <p className="text-[11px] text-[#5F6368]">Keyword mapping + interview intro pitch</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#8B1E2D]">+₹300</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl border border-[#E8E4DD] hover:bg-[#F8F6F3] cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addonProject}
                      onChange={(e) => setAddonProject(e.target.checked)}
                      className="w-4 h-4 text-[#8B1E2D] rounded focus:ring-[#8B1E2D]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#202124]">Academic &amp; Project Support</p>
                      <p className="text-[11px] text-[#5F6368]">Technical report structure + defense slides</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#8B1E2D]">+₹1,500</span>
                </label>
              </div>
            </div>

            {/* Total Strip */}
            <div className="bg-[#202124] text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs text-[#A8ABB0] uppercase tracking-wider">Estimated Total</p>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-0.5">
                  ₹{totalCost}
                </p>
                <p className="text-xs text-[#E8A5AE] mt-1">
                  Base ({basePackages[selectedBase].name}) {addonLinkedin || addonJobSearch || addonProject ? '+ Selected Add-ons' : ''}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(dynamicWhatsAppMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>

                <a
                  href={`mailto:selvamuthu20200@gmail.com?subject=${encodeURIComponent(
                    `Plan Booking Request — ₹${totalCost}`
                  )}&body=${encodeURIComponent(dynamicWhatsAppMsg)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#A8ABB0] hover:border-white text-white text-xs font-bold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
