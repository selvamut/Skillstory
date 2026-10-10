import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Send,
  Check,
  Copy,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState('Package 01 · SkillStory Profile (₹200)');
  const [background, setBackground] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [copied, setCopied] = useState(false);

  const enquiryMessage = `Hi SkillStory!

Name: ${name || '[My Name]'}
Package / Support Interested: ${selectedService}
Education / Current Projects: ${background || 'Final-year student / fresh graduate'}
Target Role / Goal: ${targetRole || 'Fresher job search / placement preparation'}

I would like to discuss next steps and schedule a discovery call!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(enquiryMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(enquiryMessage)}`;
  const emailUrl = `mailto:selvamuthu20200@gmail.com?subject=${encodeURIComponent(
    `SkillStory Discovery Call: ${selectedService} — ${name || 'Prospective Student'}`
  )}&body=${encodeURIComponent(enquiryMessage)}`;

  return (
    <div className="py-12 md:py-20 bg-[#F8F6F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header from Proposal */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with SkillStory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#202124] tracking-tight">
            Start Your Discovery Call
          </h1>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            Helping students turn their education, skills, projects and achievements into stronger resumes, LinkedIn profiles and portfolios. Reach out to schedule your discovery call.
          </p>
        </div>

        {/* 2-Column Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Our Promise */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E2D] text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] text-base">WhatsApp Instant Chat</h3>
                  <p className="text-xs text-[#5F6368]">Quickest way to schedule your call</p>
                </div>
              </div>
              <p className="text-xs text-[#3C4043] leading-relaxed">
                Connect directly on WhatsApp to discuss your skills, ask questions about our packages, and set up your initial feedback call.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#202124] text-white flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] text-base">Email Support</h3>
                  <p className="text-xs text-[#5F6368]">Send existing resumes and project drafts</p>
                </div>
              </div>
              <p className="text-xs text-[#3C4043] leading-relaxed">
                Send your current drafts, academic projects, or job descriptions directly to our team.
              </p>
              <div className="p-3 bg-[#F8F6F3] rounded-lg border border-[#E8E4DD] text-xs font-mono text-[#202124]">
                selvamuthu20200@gmail.com
              </div>
              <a
                href={emailUrl}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#202124] hover:bg-[#202124] hover:text-white text-[#202124] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Proposal Promise Note */}
            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-[#E8E4DD] space-y-2 text-xs text-[#5F6368]">
              <div className="flex items-center gap-2 font-bold text-[#202124]">
                <ShieldCheck className="w-4 h-4 text-[#8B1E2D]" />
                <span>Our Principles</span>
              </div>
              <p>
                Every category uses guidance and support only; nothing is fabricated on your behalf. You review and approve everything before it's final.
              </p>
            </div>

          </div>

          {/* Right Column: Pre-filled Discovery Call Note Composer */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8E4DD] p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-xl font-display font-bold text-[#202124]">
                Prepare Your Discovery Note
              </h3>
              <p className="text-xs text-[#5F6368]">
                Share a few brief details to generate a clear note for WhatsApp or Email.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappUrl, '_blank');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wide mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wide mb-1.5">
                  Package or Support Needed
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm bg-white focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                >
                  <option value="Package 01 · SkillStory Profile (Build your foundation — ₹200)">
                    Package 01 · SkillStory Profile (Build your foundation — ₹200)
                  </option>
                  <option value="Package 02 · SkillStory Pro (Build your professional presence — ₹300)">
                    Package 02 · SkillStory Pro (Build your professional presence — ₹300)
                  </option>
                  <option value="Package 03 · SkillStory Complete (Build your complete identity — ₹500)">
                    Package 03 · SkillStory Complete (Build your complete identity — ₹500)
                  </option>
                  <option value="Additional Support · Project Support (Starting at ₹1,500)">
                    Additional Support · Project Support (Starting at ₹1,500)
                  </option>
                  <option value="Additional Support · Job-Search Guidance (Starting at ₹300)">
                    Additional Support · Job-Search Guidance (Starting at ₹300)
                  </option>
                  <option value="Additional Support · LinkedIn Growth (₹400)">
                    Additional Support · LinkedIn Growth (₹400)
                  </option>
                  <option value="General Discovery & Guidance Call">
                    General Discovery &amp; Guidance Call
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wide mb-1.5">
                  Your Current Education &amp; Projects
                </label>
                <textarea
                  rows={3}
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  placeholder="e.g. Final-year B.Tech / MBA student with 2 class projects and an internship."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wide mb-1.5">
                  Target Role or Immediate Objective
                </label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  placeholder="e.g. Software developer, Logistics analyst, Campus placements"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                />
              </div>

              {/* Message Preview */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6368]">
                    Generated Note Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B1E2D] hover:underline cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#E8E4DD] rounded-lg text-xs font-mono text-[#3C4043] whitespace-pre-wrap leading-relaxed">
                  {enquiryMessage}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>

                <a
                  href={emailUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-[#202124] hover:bg-[#202124] hover:text-white text-[#202124] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};
