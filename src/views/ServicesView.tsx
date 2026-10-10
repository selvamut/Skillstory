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
  FileText,
  Linkedin,
  Globe,
  Compass,
  GraduationCap,
  HelpCircle,
} from 'lucide-react';

interface ServicesViewProps {
  setActiveTab: (tab: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActiveTab }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'resume' | 'portfolio' | 'career'>('all');

  const services = [
    {
      id: 'profile',
      category: 'resume',
      title: 'SkillStory Profile',
      tagline: 'Single-page resume overhaul and ATS formatting',
      price: '₹200',
      priceNote: 'Standard fixed rate',
      turnaround: '24–48 hours',
      illustration: <ProfileServiceIllustration />,
      description:
        'Transform your raw academic projects, coursework, and internships into a high-impact, single-column resume engineered to pass recruiter screening and Applicant Tracking Systems (ATS).',
      deliverables: [
        'ATS-optimized single-column resume formatted in Word (.docx) & PDF',
        'Action-oriented bullet points quantifying technical and project achievements',
        'Headline and professional summary crafted for your target roles',
        'Formatting guidance for technical tools, coursework, and certifications',
        'One round of revisions within 7 days of delivery',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to book the SkillStory Profile service (₹200).',
    },
    {
      id: 'pro',
      category: 'resume',
      title: 'SkillStory Pro',
      tagline: 'Resume overhaul plus comprehensive LinkedIn optimization',
      price: '₹300',
      priceNote: 'Standard fixed rate',
      turnaround: '48 hours',
      illustration: <ProfileServiceIllustration />,
      description:
        'A comprehensive dual-channel career narrative overhaul. In addition to a full resume rewrite, we revamp your LinkedIn profile so recruiters finding your profile see a consistent, credible professional brand.',
      deliverables: [
        'Everything included in SkillStory Profile',
        'Full LinkedIn headline, About narrative, and experience section copy',
        'Tailored cover letter template framework adaptable to multiple applications',
        'Keyword alignment for campus placements and off-campus entry roles',
        'Two rounds of revisions within 10 days of delivery',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to book the SkillStory Pro service (₹300).',
    },
    {
      id: 'complete',
      category: 'portfolio',
      title: 'SkillStory Complete',
      tagline: 'Resume, LinkedIn, and personal digital web portfolio',
      price: '₹500',
      priceNote: 'Standard fixed rate',
      turnaround: '3–4 days',
      illustration: <PresenceServiceIllustration />,
      description:
        'The complete career identity package. Stand out among hundreds of generic applicant PDFs with your own clean, responsive personal portfolio website showcasing your live projects, code, and story.',
      deliverables: [
        'Everything included in SkillStory Pro',
        'Single-page personal web portfolio structure (HTML/Tailwind or GitHub Pages)',
        'Curation of 3–5 featured projects with GitHub and live demo links',
        '1-on-1 narrative strategy consultation via text/call',
        '30-second elevator pitch introduction script for HR and technical interviews',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to book the SkillStory Complete package (₹500).',
    },
    {
      id: 'linkedin',
      category: 'career',
      title: 'LinkedIn Growth',
      tagline: 'Profile positioning and recruiter outreach framework',
      price: '₹400',
      priceNote: 'Standard fixed rate',
      turnaround: '48 hours',
      illustration: <ProfileServiceIllustration />,
      description:
        'Optimize your presence on LinkedIn to attract inbound recruiter searches, connect with alumni, and build professional relationships with hiring managers.',
      deliverables: [
        'Complete LinkedIn profile audit and headline optimization',
        'Featured section curation for projects, certificates, and publications',
        '3 customized direct message outreach templates for recruiters and alumni',
        'Actionable checklist for weekly network engagement',
      ],
      whatsappMsg: 'Hi SkillStory, I would like to book the LinkedIn Growth service (₹400).',
    },
    {
      id: 'jobsearch',
      category: 'career',
      title: 'Job Search Guidance',
      tagline: 'Role matching, application tailoring, and interview pitch',
      price: 'Starting at ₹300',
      priceNote: 'Customized based on target roles',
      turnaround: '2–3 days',
      illustration: <OpportunityServiceIllustration />,
      description:
        'Navigate the off-campus and placement drive landscape with deliberate strategy. We analyze specific job listings with you to identify keywords, tailor your materials, and prepare your pitch.',
      deliverables: [
        'Deep breakdown of 2–3 target job descriptions',
        'Identification of core keywords and required skills gaps',
        'Custom application tailoring strategy for high-priority openings',
        'Interview self-introduction framing and project explanation talking points',
      ],
      whatsappMsg: 'Hi SkillStory, I would like Job Search Guidance (Starting at ₹300).',
    },
    {
      id: 'projectsupport',
      category: 'career',
      title: 'Academic & Project Support',
      tagline: 'Research structuring, project reports, and defense slide decks',
      price: 'Starting at ₹1,500',
      priceNote: 'Scoped based on technical depth',
      turnaround: '5–7 days',
      illustration: <ProjectServiceIllustration />,
      description:
        'For engineering and postgraduate students preparing final-year projects, seminar presentations, or research papers. We assist in structuring technical reports, methodology narratives, and slide presentations.',
      deliverables: [
        'Structured chapter outlining: Abstract, Literature Review, Methodology, Results',
        'Technical report proofreading and professional narrative polishing',
        'Clean, modern slide deck for project viva or conference presentation',
        'Executive summary document for recruiters demonstrating project rigor',
      ],
      whatsappMsg: 'Hi SkillStory, I would like Academic & Project Support (Starting at ₹1,500).',
    },
  ];

  const filteredServices =
    selectedFilter === 'all'
      ? services
      : services.filter((s) => s.category === selectedFilter);

  return (
    <div className="py-12 md:py-20 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <span>Specialized Career Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#202124] tracking-tight">
            Crafting Your Professional Narrative
          </h1>
          <p className="text-lg text-[#5F6368] leading-relaxed">
            Every service at SkillStory is designed around student affordability, transparent standard pricing, and direct 1-on-1 collaboration.
          </p>

          {/* Interactive Filter Controls (Functional button tabs) */}
          <div className="flex items-center justify-center gap-2 p-1 bg-[#EAE5DE] rounded-xl max-w-md mx-auto pt-1 mt-6">
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
              onClick={() => setSelectedFilter('resume')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'resume'
                  ? 'bg-white text-[#202124] shadow-sm'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              Resumes
            </button>
            <button
              onClick={() => setSelectedFilter('portfolio')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'portfolio'
                  ? 'bg-white text-[#202124] shadow-sm'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              Web Portfolio
            </button>
            <button
              onClick={() => setSelectedFilter('career')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                selectedFilter === 'career'
                  ? 'bg-white text-[#202124] shadow-sm'
                  : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              Career &amp; Research
            </button>
          </div>
        </div>

        {/* Detailed Service Cards List */}
        <div className="space-y-12">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-[#E8E4DD] p-6 sm:p-8 lg:p-10 shadow-sm hover:border-[#8B1E2D]/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual Preview / 2D Editorial Illustration */}
                <div className="lg:col-span-5 flex justify-center bg-[#F8F6F3] rounded-xl p-4 border border-[#ECE7E0]">
                  {service.illustration}
                </div>

                {/* Content Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Title and Pricing Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F0ECE6] pb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#202124]">
                        {service.title}
                      </h2>
                      <p className="text-xs font-semibold text-[#8B1E2D] uppercase tracking-wide mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="sm:text-right mt-2 sm:mt-0">
                      <span className="text-3xl font-display font-black text-[#202124]">
                        {service.price}
                      </span>
                      <span className="block text-[11px] text-[#5F6368]">
                        {service.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#4A4D52] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#202124]">
                      What you receive:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3C4043]">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#8B1E2D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Strip & Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#F0ECE6]">
                    <div className="flex items-center gap-2 text-xs text-[#5F6368]">
                      <Clock className="w-3.5 h-3.5 text-[#8B1E2D]" />
                      <span>Estimated delivery: <strong>{service.turnaround}</strong></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(service.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <a
                        href={`mailto:selvamuthu20200@gmail.com?subject=${encodeURIComponent(
                          `Enquiry for ${service.title}`
                        )}&body=${encodeURIComponent(
                          `Hi SkillStory,\n\nI would like more information on ${service.title} (${service.price}).\n\nMy background:\nMy deadline:`
                        )}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#202124] text-[#202124] hover:bg-[#202124] hover:text-white text-xs font-bold transition-colors"
                        title="Send email enquiry"
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

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl border border-[#E8E4DD] p-8 md:p-12 space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <h3 className="text-2xl font-display font-bold text-[#202124]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-[#5F6368]">
              Common questions about working with SkillStory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-2">
              <h4 className="font-bold text-[#202124]">How does the process start once I contact you?</h4>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Send us a message on WhatsApp or email with your current resume, LinkedIn link, or a brief summary of what you have worked on. We confirm the package, timeline, and start immediately.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#202124]">What if I don't have many internship experiences?</h4>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                That is the exact reason SkillStory exists. We specialize in highlighting academic projects, personal coding builds, hackathons, presentations, and lab coursework into legitimate professional proof.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#202124]">Are there any hidden charges or subscription fees?</h4>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                No. All prices listed (₹200, ₹300, ₹500, etc.) are standard one-time fees. Revisions within the specified window are included.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#202124]">In what formats do I receive my resume?</h4>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                You receive both editable Microsoft Word (.docx) and print-ready PDF formats, properly tagged for single-column ATS parsers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
