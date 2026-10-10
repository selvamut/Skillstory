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
  Sparkles,
  FileText,
  Globe,
  Briefcase,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  const processSteps = [
    {
      step: 1,
      title: 'Discover',
      desc: 'We map out your coursework, technical skills, projects, and personal achievements.',
    },
    {
      step: 2,
      title: 'Build',
      desc: 'Transform raw experience into ATS-tested single-column resumes and tailored summaries.',
    },
    {
      step: 3,
      title: 'Present',
      desc: 'Develop an online portfolio and professional LinkedIn showcase highlighting real work.',
    },
    {
      step: 4,
      title: 'Connect',
      desc: 'Align your messaging to match specific job descriptions and recruiter expectations.',
    },
    {
      step: 5,
      title: 'Apply',
      desc: 'Submit confident, targeted applications with personalized cover notes and scripts.',
    },
    {
      step: 6,
      title: 'Grow',
      desc: 'Iterate your career narrative as your experience, projects, and ambitions expand.',
    },
  ];

  const packages = [
    {
      id: 'profile',
      name: 'SkillStory Profile',
      price: '₹200',
      desc: 'Complete single-page resume overhaul and ATS alignment for immediate job applications.',
      features: [
        'ATS-optimized single-column resume (PDF & Word)',
        'Headline & summary narrative rewrite',
        '3–5 project achievement bullet points',
        '24–48 hour turnaround',
      ],
      popular: false,
    },
    {
      id: 'pro',
      name: 'SkillStory Pro',
      price: '₹300',
      desc: 'Comprehensive career narrative overhaul covering both resume and LinkedIn presence.',
      features: [
        'Everything in SkillStory Profile',
        'Full LinkedIn profile copy & optimization',
        'Custom cover letter framework',
        'Keyword targeting for your chosen sector',
      ],
      popular: true,
    },
    {
      id: 'complete',
      name: 'SkillStory Complete',
      price: '₹500',
      desc: 'The all-in-one career presence package with personal web portfolio and interview script.',
      features: [
        'Everything in SkillStory Pro',
        'Personal single-page web portfolio layout',
        '1-on-1 narrative strategy consultation',
        '30-second elevator pitch introduction script',
      ],
      popular: false,
    },
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
              
              {/* Eyebrow kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#8B1E2D]" />
                <span>Career Identity &amp; Portfolio Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#202124] tracking-tight leading-[1.1] text-balance">
                Your Skills. <br />
                Your Story. <br />
                <span className="text-[#8B1E2D]">Your Next Step.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-[#4A4D52] leading-relaxed max-w-xl mx-auto lg:mx-0">
                We help students and early-career professionals turn projects, academic work, and real capabilities into polished resumes, LinkedIn profiles, and digital portfolios that open doors.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20get%20started%20with%20my%20career%20profile."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-base font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Start on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setActiveTab('packages')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border-2 border-[#202124] text-[#202124] hover:bg-[#202124] hover:text-white text-base font-bold transition-all cursor-pointer"
                >
                  <span>View Packages (from ₹200)</span>
                </button>
              </div>

              {/* Quiet Proof Markers */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#5F6368] font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#8B1E2D]" />
                  <span>ATS-Optimized Formats</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#8B1E2D]" />
                  <span>24–48h Standard Delivery</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#8B1E2D]" />
                  <span>Transparent Fixed Pricing</span>
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
      {/* 2. CORE VALUE STRIP                                      */}
      {/* ======================================================== */}
      <section className="py-12 bg-white border-y border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">01. Clarity First</p>
              <h3 className="text-base font-bold text-[#202124]">Authentic Storytelling</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                No exaggerated claims or buzzword padding. We articulate your genuine technical projects, coursework, and problem-solving skills.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">02. Recruiter Precision</p>
              <h3 className="text-base font-bold text-[#202124]">ATS-Proof Structure</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Standard single-column layouts that parse smoothly across Taleo, Workday, Greenhouse, and recruiter inbox scanners.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">03. Accessible to All</p>
              <h3 className="text-base font-bold text-[#202124]">Student-Friendly Pricing</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Transparent standard rates starting at ₹200 for a complete profile overhaul. No hidden subscriptions or upsells.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">04. Rapid Turnaround</p>
              <h3 className="text-base font-bold text-[#202124]">Prompt 24–48h Delivery</h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Fast collaboration over WhatsApp and email so you never miss an application deadline or placement drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FOUR CORE SERVICES SPOTLIGHT                          */}
      {/* ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              Everything You Need to Step Forward
            </h2>
            <p className="text-base text-[#5F6368]">
              Targeted, professional services tailored specifically for college graduates, engineering students, and early-career jobseekers.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Service 1: SkillStory Profile */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <ProfileServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-wider text-[#8B1E2D] uppercase">Profile &amp; Resume</span>
                    <span className="text-lg font-bold text-[#202124]">₹200</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">SkillStory Profile</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    A complete resume transformation that turns raw class projects, internships, and certifications into a clean, compelling single-page document.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Single-column ATS-compliant structure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Impact-focused project bullet points</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>LinkedIn summary recommendation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20the%20SkillStory%20Profile%20(₹200)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#F8F6F3] hover:bg-[#8B1E2D] text-[#202124] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire for SkillStory Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service 2: Digital Presence & Portfolio */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <PresenceServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-wider text-[#8B1E2D] uppercase">Web Presence</span>
                    <span className="text-lg font-bold text-[#202124]">₹500</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">SkillStory Complete Portfolio</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    A personal digital portfolio website to host project live demos, GitHub repositories, research papers, and your full professional bio.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Personal web showcase layout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Interactive project and skill sections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Mobile responsive &amp; GitHub Pages ready</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20the%20SkillStory%20Complete%20Portfolio%20(₹500)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#F8F6F3] hover:bg-[#8B1E2D] text-[#202124] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire for Complete Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service 3: Job Search Guidance */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <OpportunityServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-wider text-[#8B1E2D] uppercase">Application Strategy</span>
                    <span className="text-lg font-bold text-[#202124]">Starting at ₹300</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">Job Search Guidance</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    Personalized strategy to align your resume with specific job requirements, identify relevant openings, and navigate campus placement drives.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Job description keyword mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Tailored application cover messages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Cold outreach &amp; LinkedIn connection strategy</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20Job%20Search%20Guidance%20(Starting%20at%20₹300)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#F8F6F3] hover:bg-[#8B1E2D] text-[#202124] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire for Job Search Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service 4: Academic & Project Support */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 shadow-sm flex flex-col justify-between hover:border-[#8B1E2D]/40 transition-colors">
              <div className="space-y-6">
                <ProjectServiceIllustration />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-wider text-[#8B1E2D] uppercase">Academic &amp; Research</span>
                    <span className="text-lg font-bold text-[#202124]">Starting at ₹1,500</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#202124]">Academic &amp; Project Support</h3>
                  <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                    Structuring final year engineering projects, seminar presentation decks, research abstracts, and clear documentation.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Project report structuring &amp; technical documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Slide deck preparation for project defense</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8B1E2D]" />
                    <span>Methodology and findings narrative flow</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                <a
                  href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20Academic%20%26%20Project%20Support%20(Starting%20at%20₹1,500)."
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

          <div className="text-center pt-4">
            <button
              onClick={() => setActiveTab('services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#8B1E2D] hover:text-[#5E1421] transition-colors cursor-pointer"
            >
              <span>Explore all service specifications and options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. PROCESS ROADMAP: Discover → Build → Present → ...    */}
      {/* ======================================================== */}
      <section className="py-20 md:py-24 bg-white border-y border-[#E8E4DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              The Six-Step Story Process
            </h2>
            <p className="text-base text-[#5F6368]">
              A structured, collaborative pathway from raw coursework and projects to career confidence.
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
      {/* 5. PACKAGES & PRICING PREVIEW                            */}
      {/* ======================================================== */}
      <section className="py-20 md:py-28 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#8B1E2D] uppercase">
              TRANSPARENT STANDARD RATES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202124]">
              Choose Your Package
            </h2>
            <p className="text-base text-[#5F6368]">
              Straightforward pricing crafted for students. No recurring charges, hidden fees, or subscriptions.
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
                    Recommended Package
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <PackageBadgeIcon tier={pkg.id as 'profile' | 'pro' | 'complete'} />
                    <div className="text-right">
                      <span className="text-3xl font-display font-extrabold text-[#202124]">
                        {pkg.price}
                      </span>
                      <span className="block text-[11px] text-[#5F6368]">Standard rate</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#202124]">{pkg.name}</h3>
                    <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                      {pkg.desc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#3C4043] border-t border-[#F0ECE6] pt-5">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0ECE6]">
                  <a
                    href={`https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(
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
              See complete package comparison &amp; add-ons (LinkedIn Growth ₹400, Project Support ₹1,500) →
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FOUNDER SECTION                                       */}
      {/* ======================================================== */}
      <FounderSection />

      {/* ======================================================== */}
      {/* 7. FINAL CALL TO ACTION                                  */}
      {/* ======================================================== */}
      <section className="py-16 md:py-20 bg-[#202124] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#E8A5AE] uppercase">
            TAKE YOUR NEXT STEP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-balance">
            Every Great Career Begins with a Clear Story.
          </h2>
          <p className="text-base sm:text-lg text-[#A8ABB0] max-w-xl mx-auto">
            Share what you have learned and built. We’ll help you communicate your strengths with clarity, purpose, and impact.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20am%20ready%20to%20start%20my%20career%20story."
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
