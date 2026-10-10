import React, { useState } from 'react';
import { PackageBadgeIcon } from '../components/Illustrations';
import {
  Check,
  MessageSquare,
  Mail,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Clock,
} from 'lucide-react';

interface PackagesViewProps {
  setActiveTab: (tab: string) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({ setActiveTab }) => {
  const [selectedBase, setSelectedBase] = useState<'profile' | 'pro' | 'complete'>('pro');
  const [addonLinkedin, setAddonLinkedin] = useState(false);
  const [addonJobSearch, setAddonJobSearch] = useState(false);
  const [addonProject, setAddonProject] = useState(false);

  // Proposal Page 2: Three Bundled Packages
  const basePackages = {
    profile: {
      number: 'PACKAGE 01',
      name: 'SkillStory Profile',
      tagline: 'Build your foundation',
      price: 200,
      priceStr: '₹200',
      turnaround: 'Within 3 days',
      desc: 'A personalized resume built around your skills, projects and one target role.',
      features: [
        'Discovery call',
        'Resume creation & rework',
        'JD-based customization',
        'PDF + editable file',
      ],
    },
    pro: {
      number: 'PACKAGE 02',
      name: 'SkillStory Pro',
      tagline: 'Build your professional presence',
      price: 300,
      priceStr: '₹300',
      turnaround: '3–4 days',
      desc: 'A complete Resume + LinkedIn Profile package for your next career step.',
      features: [
        'Everything in Profile',
        'ATS-friendly structure',
        'Full LinkedIn build-out',
        'Feedback & discovery call',
      ],
    },
    complete: {
      number: 'PACKAGE 03',
      name: 'SkillStory Complete',
      tagline: 'Build your complete identity',
      price: 500,
      priceStr: '₹500',
      turnaround: '7–15 days',
      desc: 'A Resume + LinkedIn + Portfolio package presenting your full profile.',
      features: [
        'Everything in Pro',
        'Personal portfolio site',
        'Projects & education shown',
        'Responsive design & deploy',
      ],
    },
  };

  // Additional Standalone Support (Proposal Page 3)
  const additionalModules = [
    {
      id: 'linkedin',
      name: 'LinkedIn Growth',
      tagline: 'Guidance on building a consistent, genuine LinkedIn presence over time.',
      price: 400,
      priceStr: '₹400',
      checked: addonLinkedin,
      setter: setAddonLinkedin,
      items: [
        'Profile, headline & Featured section guidance',
        'A simple content strategy for your field',
        'Responsible use of AI for post writing',
        'Professional networking guidance',
      ],
    },
    {
      id: 'jobsearch',
      name: 'Job-Search Guidance',
      tagline: 'A practical session to help you understand where to look, how to apply, and how to prepare.',
      price: 300,
      priceStr: 'Starting at ₹300',
      checked: addonJobSearch,
      setter: setAddonJobSearch,
      items: [
        'Where to search & how to use LinkedIn effectively',
        'Understanding job descriptions & keywords',
        'Writing professional application emails',
        'Fresher interview & self-introduction preparation',
      ],
    },
    {
      id: 'project',
      name: 'Project Support',
      tagline: 'Practical guidance across your final-year project journey, from planning to presentation.',
      price: 1500,
      priceStr: 'Starting at ₹1,500',
      checked: addonProject,
      setter: setAddonProject,
      items: [
        'Topic selection & research planning',
        'Data organization & analysis guidance',
        'Documentation, structure & editing',
        'Presentation & viva preparation',
      ],
    },
  ];

  // Dynamic estimate calculator
  const baseCost = basePackages[selectedBase].price;
  const linkedinCost = addonLinkedin ? 400 : 0;
  const jobSearchCost = addonJobSearch ? 300 : 0;
  const projectCost = addonProject ? 1500 : 0;
  const totalCost = baseCost + linkedinCost + jobSearchCost + projectCost;

  const getAddonSummary = () => {
    const list = [];
    if (addonLinkedin) list.push('LinkedIn Growth (+₹400)');
    if (addonJobSearch) list.push('Job-Search Guidance (+₹300)');
    if (addonProject) list.push('Project Support (+₹1,500)');
    return list.length > 0 ? list.join(', ') : 'None';
  };

  const dynamicWhatsAppMsg = `Hi SkillStory, I would like to book:
- Package: ${basePackages[selectedBase].name} (${basePackages[selectedBase].priceStr})
- Additional Support: ${getAddonSummary()}
- Estimated Total: ₹${totalCost}

Please share the next steps for the discovery call!`;

  return (
    <div className="py-12 md:py-20 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header from Proposal */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <span>Our Packages</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#202124] tracking-tight">
            Three Simple, Bundled Packages
          </h1>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            Our core services come together into three simple, bundled packages — each building on the one before it. Every package uses guidance and support only; nothing is fabricated on your behalf.
          </p>
        </div>

        {/* 3 Main Bundled Package Cards (Proposal Page 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* PACKAGE 01: SkillStory Profile */}
          <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8B1E2D]">PACKAGE 01</span>
                  <h3 className="text-2xl font-bold text-[#202124] mt-0.5">SkillStory Profile</h3>
                  <p className="text-xs font-semibold text-[#8B1E2D]">Build your foundation</p>
                </div>
                <PackageBadgeIcon tier="profile" />
              </div>

              <div className="flex items-baseline justify-between border-y border-[#F0ECE6] py-3">
                <span className="text-3xl font-display font-black text-[#202124]">₹200</span>
                <span className="text-xs text-[#5F6368] font-medium">Delivery: Within 3 days</span>
              </div>

              <p className="text-xs text-[#5F6368] leading-relaxed">
                A personalized resume built around your skills, projects and one target role.
              </p>

              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#202124]">Includes:</p>
                <ul className="space-y-2 text-xs text-[#3C4043]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Discovery call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Resume creation &amp; rework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>JD-based customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>PDF + editable file</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20book%20Package%2001%20SkillStory%20Profile%20(₹200)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#202124] hover:bg-[#35373B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Book for ₹200</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PACKAGE 02: SkillStory Pro (Recommended) */}
          <div className="relative bg-white rounded-2xl border-2 border-[#8B1E2D] p-8 flex flex-col justify-between shadow-md ring-2 ring-[#8B1E2D]/20">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold uppercase tracking-wider">
              Most Popular
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8B1E2D]">PACKAGE 02</span>
                  <h3 className="text-2xl font-bold text-[#202124] mt-0.5">SkillStory Pro</h3>
                  <p className="text-xs font-semibold text-[#8B1E2D]">Build your professional presence</p>
                </div>
                <PackageBadgeIcon tier="pro" />
              </div>

              <div className="flex items-baseline justify-between border-y border-[#F0ECE6] py-3">
                <span className="text-3xl font-display font-black text-[#8B1E2D]">₹300</span>
                <span className="text-xs text-[#5F6368] font-medium">Delivery: 3–4 days</span>
              </div>

              <p className="text-xs text-[#5F6368] leading-relaxed">
                A complete Resume + LinkedIn Profile package for your next career step.
              </p>

              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8B1E2D]">Includes:</p>
                <ul className="space-y-2 text-xs text-[#3C4043]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Everything in Profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>ATS-friendly structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Full LinkedIn build-out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Feedback &amp; discovery call</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20book%20Package%2002%20SkillStory%20Pro%20(₹300)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Book for ₹300</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PACKAGE 03: SkillStory Complete */}
          <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8B1E2D]">PACKAGE 03</span>
                  <h3 className="text-2xl font-bold text-[#202124] mt-0.5">SkillStory Complete</h3>
                  <p className="text-xs font-semibold text-[#8B1E2D]">Build your complete identity</p>
                </div>
                <PackageBadgeIcon tier="complete" />
              </div>

              <div className="flex items-baseline justify-between border-y border-[#F0ECE6] py-3">
                <span className="text-3xl font-display font-black text-[#202124]">₹500</span>
                <span className="text-xs text-[#5F6368] font-medium">Delivery: 7–15 days</span>
              </div>

              <p className="text-xs text-[#5F6368] leading-relaxed">
                A Resume + LinkedIn + Portfolio package presenting your full profile.
              </p>

              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#202124]">Includes:</p>
                <ul className="space-y-2 text-xs text-[#3C4043]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Personal portfolio site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Projects &amp; education shown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                    <span>Responsive design &amp; deploy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20book%20Package%2003%20SkillStory%20Complete%20(₹500)."
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
        {/* INTERACTIVE ESTIMATE BUILDER & ADD-ONS (Proposal Page 3) */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border border-[#E8E4DD] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Custom Package Builder</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#202124]">
                Combine Core Packages &amp; Additional Support
              </h3>
              <p className="text-xs text-[#5F6368]">
                Select your base bundled package and add any focused standalone support you require.
              </p>
            </div>

            {/* Step 1: Base Package */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wide block">
                1. Select Core Package
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
                  <span className="text-[10px] font-mono text-[#8B1E2D] font-bold block">PACKAGE 01</span>
                  <p className="font-bold text-sm text-[#202124]">SkillStory Profile</p>
                  <p className="text-xs text-[#5F6368]">Resume only (Within 3 days)</p>
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
                  <span className="text-[10px] font-mono text-[#8B1E2D] font-bold block">PACKAGE 02</span>
                  <p className="font-bold text-sm text-[#202124]">SkillStory Pro</p>
                  <p className="text-xs text-[#5F6368]">Resume + LinkedIn (3–4 days)</p>
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
                  <span className="text-[10px] font-mono text-[#8B1E2D] font-bold block">PACKAGE 03</span>
                  <p className="font-bold text-sm text-[#202124]">SkillStory Complete</p>
                  <p className="text-xs text-[#5F6368]">Resume + Portfolio (7–15 days)</p>
                  <p className="text-base font-extrabold text-[#8B1E2D] mt-2">₹500</p>
                </button>
              </div>
            </div>

            {/* Step 2: Additional Standalone Support (Proposal Page 3) */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#202124] uppercase tracking-wide block">
                2. Additional Standalone Support (Optional)
              </label>
              <div className="space-y-2.5">
                {additionalModules.map((mod) => (
                  <label
                    key={mod.id}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-[#E8E4DD] hover:bg-[#F8F6F3] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={mod.checked}
                        onChange={(e) => mod.setter(e.target.checked)}
                        className="w-4 h-4 text-[#8B1E2D] rounded focus:ring-[#8B1E2D]"
                      />
                      <div>
                        <p className="text-xs font-bold text-[#202124]">{mod.name}</p>
                        <p className="text-[11px] text-[#5F6368]">{mod.tagline}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#8B1E2D]">+{mod.priceStr}</span>
                  </label>
                ))}
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
                  {basePackages[selectedBase].name} ({basePackages[selectedBase].turnaround}) {addonLinkedin || addonJobSearch || addonProject ? '+ Additional Support' : ''}
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
                    `Booking Request for ${basePackages[selectedBase].name}`
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
