import React from 'react';
import {
  HeroCareerIllustration,
  ProfileServiceIllustration,
  PresenceServiceIllustration,
  OpportunityServiceIllustration,
  ProjectServiceIllustration,
  ProcessStepIcon,
  PackageBadgeIcon,
} from '../components/Illustrations';
import { FounderSection } from '../components/FounderSection';
import {
  ArrowRight,
  MessageSquare,
  Check,
  ShieldCheck,
  Sparkles,
  Users,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  // Proposal Page 4: How It Works
  const processSteps = [
    {
      step: 1,
      title: 'Discover',
      desc: 'A student discovers SkillStory and shares their current education, skills, and background.',
    },
    {
      step: 2,
      title: 'Build',
      desc: 'Organizes what they already have into clear, structured, and credible career materials.',
    },
    {
      step: 3,
      title: 'Present',
      desc: 'Presents their work professionally across an ATS-friendly resume, LinkedIn profile, or portfolio.',
    },
    {
      step: 4,
      title: 'Connect',
      desc: 'Connects with their chosen field with greater clarity and understanding of job requirements.',
    },
    {
      step: 5,
      title: 'Apply',
      desc: 'Applies for relevant opportunities with stronger, tailored materials and confidence.',
    },
    {
      step: 6,
      title: 'Grow',
      desc: 'Keeps growing, updating their story as new skills, projects, and achievements emerge.',
    },
  ];

  // Proposal Page 2: Our Packages (with confirmed standard rates)
  const packages = [
    {
      id: 'profile',
      number: 'PACKAGE 01',
      name: 'SkillStory Profile',
      tagline: 'Build your foundation',
      price: '₹200',
      desc: 'A personalized resume built around your skills, projects and one target role.',
      features: [
        'Discovery call',
        'Resume creation & rework',
        'JD-based customization',
        'PDF + editable file',
      ],
      delivery: 'Within 3 days',
      popular: false,
    },
    {
      id: 'pro',
      number: 'PACKAGE 02',
      name: 'SkillStory Pro',
      tagline: 'Build your professional presence',
      price: '₹300',
      desc: 'A complete Resume + LinkedIn Profile package for your next career step.',
      features: [
        'Everything in Profile',
        'ATS-friendly structure',
        'Full LinkedIn build-out',
        'Feedback & discovery call',
      ],
      delivery: '3–4 days',
      popular: true,
    },
    {
      id: 'complete',
      number: 'PACKAGE 03',
      name: 'SkillStory Complete',
      tagline: 'Build your complete identity',
      price: '₹500',
      desc: 'A Resume + LinkedIn + Portfolio package presenting your full profile.',
      features: [
        'Everything in Pro',
        'Personal portfolio site',
        'Projects & education shown',
        'Responsive design & deploy',
      ],
      delivery: '7–15 days',
      popular: false,
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
    <div className="space-y-0">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                         */}
      {/* ======================================================== */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8F6F3] via-[#FAF8F5] to-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow Kicker from Proposal */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#8B1E2D]" />
                <span>For Final-Year Students &amp; Fresh Graduates</span>
              </div>

              {/* Main Headline: Official Tagline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#202124] tracking-tight leading-[1.1] text-balance">
                Your Skills. <br />
                Your Story. <br />
                <span className="text-[#8B1E2D]">Your Next Step.</span>
              </h1>

              {/* Sub-tagline & Core Proposition from Proposal */}
              <p className="text-lg sm:text-xl text-[#3C4043] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Helping students turn their education, skills, projects and achievements into stronger resumes, LinkedIn profiles and portfolios.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20discuss%20my%20career%20profile."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-base font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Start Your Story</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setActiveTab('packages')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#202124] text-[#202124] hover:bg-[#202124] hover:text-white text-base font-bold transition-all cursor-pointer"
                >
                  <span>Explore Packages (from ₹200)</span>
                </button>
              </div>

              {/* Quiet Framing Indicators from Proposal */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#5F6368] font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#8B1E2D]" />
                  <span>Guidance &amp; Support Only</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#8B1E2D]" />
                  <span>Nothing Fabricated</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#8B1E2D]" />
                  <span>You Review Before Final</span>
                </span>
              </div>

            </div>

            {/* Right Hero Visual: 2D Editorial Career Identity Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <HeroCareerIllustration className="transition-transform duration-500 hover:scale-[1.01]" />
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. THE CONCEPT BREAKDOWN (Proposal Page 1 Table)         */}
      {/* ======================================================== */}
      <section className="py-12 bg-white border-y border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* For */}
            <div className="flex gap-4 p-5 rounded-xl bg-[#F8F6F3] border border-[#E8E4DD]">
              <div className="w-10 h-10 rounded-lg bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">For</p>
                <h3 className="text-base font-bold text-[#202124]">Final-Year Students &amp; Fresh Graduates</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  And anyone with projects, certifications or achievements they don't know how to present.
                </p>
              </div>
            </div>

            {/* The Gap */}
            <div className="flex gap-4 p-5 rounded-xl bg-[#F8F6F3] border border-[#E8E4DD]">
              <div className="w-10 h-10 rounded-lg bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">The Gap</p>
                <h3 className="text-base font-bold text-[#202124]">Real Skills Not Presented Professionally</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Most students already have real skills and meaningful achievements — what they're missing is a clear, professional way to show them.
                </p>
              </div>
            </div>

            {/* The Idea */}
            <div className="flex gap-4 p-5 rounded-xl bg-[#F8F6F3] border border-[#E8E4DD]">
              <div className="w-10 h-10 rounded-lg bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">The Idea</p>
                <h3 className="text-base font-bold text-[#202124]">Shape What You Have Into a Credible Story</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed">
                  Turn your existing education, projects and capabilities into resumes, LinkedIn profiles and portfolios that actually reflect your worth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHAT WE OFFER: FOUR CORE CATEGORIES (Proposal Page 2) */}
      {/* ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              Four Simple Categories
            </h2>
            <p className="text-base text-[#5F6368] leading-relaxed">
              SkillStory's work is organized into four simple categories. Each one takes something you already have — your education, projects, skills or achievements — and helps you present it clearly.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Category 01: Profile */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <ProfileServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#8B1E2D]">01 · PROFILE</span>
                    <span className="text-lg font-bold text-[#202124]">₹200</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">Your Professional Foundation</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    Turns your education and experience into a resume and LinkedIn profile that actually represent you.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Resume creation &amp; rework</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>JD-based resume customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Resume review &amp; improvement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>LinkedIn profile setup &amp; optimization</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20enquire%20about%2001%20Profile%20(₹200)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#F8F6F3] hover:bg-[#8B1E2D] text-[#202124] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire for Profile Support</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Category 02: Presence */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <PresenceServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#8B1E2D]">02 · PRESENCE</span>
                    <span className="text-lg font-bold text-[#202124]">₹500</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">Showcase Your Work</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    Helps your projects, skills and personal brand show up clearly wherever someone looks you up.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Portfolio website guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Project &amp; achievement showcase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>LinkedIn content guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Ethical AI-assisted content support</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20enquire%20about%2002%20Presence%20(₹500)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#F8F6F3] hover:bg-[#8B1E2D] text-[#202124] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire for Presence &amp; Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Category 03: Opportunity */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <OpportunityServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#8B1E2D]">03 · OPPORTUNITY</span>
                    <span className="text-lg font-bold text-[#202124]">Starting at ₹300</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">Navigate the Job Search</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    Practical guidance on finding the right opportunities and applying to them with confidence.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Where to find relevant roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Understanding job descriptions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Application guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Basic networking guidance</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20enquire%20about%2003%20Opportunity%20(Starting%20at%20₹300)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#F8F6F3] hover:bg-[#8B1E2D] text-[#202124] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire for Job Search Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Category 04: Project */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <ProjectServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#8B1E2D]">04 · PROJECT</span>
                    <span className="text-lg font-bold text-[#202124]">Starting at ₹1,500</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">Present Your Academic Work</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    Turns your final-year project into something you can document and explain with confidence.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Final-year project guidance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Structure &amp; documentation support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Presentation preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Guidance for interview discussions</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20enquire%20about%2004%20Project%20Support%20(Starting%20at%20₹1,500)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#F8F6F3] hover:bg-[#8B1E2D] text-[#202124] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire for Project Support</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setActiveTab('services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#8B1E2D] hover:text-[#5E1421] transition-colors cursor-pointer"
            >
              <span>View detailed breakdown and standalone support options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. HOW IT WORKS (Proposal Page 4)                        */}
      {/* ======================================================== */}
      <section className="py-20 md:py-24 bg-white border-y border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              Discover · Build · Present · Connect · Apply · Grow
            </h2>
            <p className="text-base text-[#5F6368] leading-relaxed">
              A student discovers SkillStory, organizes what they already have, presents it professionally, connects with their field, applies with stronger materials — and keeps growing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="bg-[#F8F6F3] rounded-xl p-6 border border-[#E8E4DD] space-y-4 hover:border-[#8B1E2D]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <ProcessStepIcon step={item.step} />
                  <span className="font-mono text-xs font-bold text-[#8B1E2D]">
                    STEP 0{item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#202124]">{item.title}</h3>
                  <p className="text-xs text-[#5F6368] mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. OUR PROMISE (Proposal Page 4)                         */}
      {/* ======================================================== */}
      <section className="py-16 md:py-20 bg-[#FAF8F5] border-b border-[#E8E4DD]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Ethical Standards &amp; Principles</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-[#202124]">
              Our Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promises.map((promise, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-5 rounded-xl bg-white border border-[#E8E4DD] shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <p className="text-sm text-[#202124] font-medium leading-relaxed">
                  {promise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. OUR PACKAGES (Proposal Page 2)                        */}
      {/* ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              OUR PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              Three Simple, Bundled Packages
            </h2>
            <p className="text-base text-[#5F6368] leading-relaxed">
              Our core services come together into three simple, bundled packages — each building on the one before it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl border p-8 flex flex-col justify-between shadow-sm transition-all ${
                  pkg.popular
                    ? 'border-[#8B1E2D] ring-2 ring-[#8B1E2D]/20 shadow-md'
                    : 'border-[#E8E4DD]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#8B1E2D] block">
                        {pkg.number}
                      </span>
                      <h3 className="text-xl font-bold text-[#202124] mt-0.5">{pkg.name}</h3>
                      <p className="text-xs font-semibold text-[#8B1E2D]">{pkg.tagline}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-display font-extrabold text-[#202124]">
                        {pkg.price}
                      </span>
                      <span className="block text-[11px] text-[#5F6368]">Standard rate</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#5F6368] leading-relaxed">
                    {pkg.desc}
                  </p>

                  <div className="border-t border-[#F0ECE6] pt-4 space-y-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#202124]">Includes:</p>
                    <ul className="space-y-2 text-xs text-[#3C4043]">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E4DD] text-xs text-[#5F6368]">
                    <strong>Delivery:</strong> {pkg.delivery}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                  <a
                    href={`https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20book%20${encodeURIComponent(
                      pkg.name
                    )}%20(${encodeURIComponent(pkg.price)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                      pkg.popular
                        ? 'bg-[#8B1E2D] hover:bg-[#5E1421] text-white'
                        : 'bg-[#202124] hover:bg-[#323336] text-white'
                    }`}
                  >
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setActiveTab('packages')}
              className="text-xs font-bold text-[#8B1E2D] hover:underline cursor-pointer"
            >
              View detailed package comparison &amp; additional standalone support (Project, Job-Search, LinkedIn) →
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. FOUNDER SECTION                                       */}
      {/* ======================================================== */}
      <FounderSection />

      {/* ======================================================== */}
      {/* 8. WHO IT'S FOR & WHAT'S NEXT (Proposal Page 4)          */}
      {/* ======================================================== */}
      <section className="py-16 md:py-20 bg-[#202124] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#E8A5AE] uppercase">
            WHO IT'S FOR &amp; WHAT'S NEXT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
            Many Students Already Have What It Takes.
          </h2>
          <p className="text-base sm:text-lg text-[#DCD5C9] max-w-2xl mx-auto leading-relaxed">
            SkillStory just helps them show it. Final-year students, fresh graduates, and anyone with projects, certifications or achievements they don't know how to present.
          </p>
          <p className="text-sm font-semibold text-[#E8A5AE] uppercase tracking-wider">
            Your Skills. Your Story. Your Next Step.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20get%20started."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-sm font-bold shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <button
              onClick={() => setActiveTab('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#A8ABB0] hover:border-white text-white text-sm font-bold transition-colors cursor-pointer"
            >
              <span>Contact Options &amp; Email</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
