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
  const [selectedService, setSelectedService] = useState('SkillStory Profile (₹200)');
  const [background, setBackground] = useState('');
  const [deadline, setDeadline] = useState('');
  const [copied, setCopied] = useState(false);

  const enquiryMessage = `Hi SkillStory!

Name: ${name || '[My Name]'}
Service Interested: ${selectedService}
My Background/Projects: ${background || 'College student / early-career jobseeker'}
Target Deadline: ${deadline || 'Within 2–3 days'}

Looking forward to your guidance!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(enquiryMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(enquiryMessage)}`;
  const emailUrl = `mailto:selvamuthu20200@gmail.com?subject=${encodeURIComponent(
    `SkillStory Enquiry: ${selectedService} — ${name || 'Prospective Client'}`
  )}&body=${encodeURIComponent(enquiryMessage)}`;

  return (
    <div className="py-12 md:py-20 bg-[#F8F6F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#202124] tracking-tight">
            Start Your Career Story Conversation
          </h1>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            Whether you are preparing for campus placements, updating your LinkedIn profile, or looking to build a personal portfolio, we are here to support you.
          </p>
        </div>

        {/* 2-Column Contact Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Instant Contact Options & Expectations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E2D] text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] text-base">WhatsApp Instant Chat</h3>
                  <p className="text-xs text-[#5F6368]">Fastest response channel</p>
                </div>
              </div>
              <p className="text-xs text-[#3C4043] leading-relaxed">
                Connect directly on WhatsApp to share your current draft, ask questions about packages, and receive instant confirmation.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
              >
                <span>Launch WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Direct Card */}
            <div className="bg-white rounded-2xl border border-[#E8E4DD] p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#202124] text-white flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#202124] text-base">Official Email Support</h3>
                  <p className="text-xs text-[#5F6368]">Detailed project briefs &amp; attachments</p>
                </div>
              </div>
              <p className="text-xs text-[#3C4043] leading-relaxed">
                Send your current resume PDF, project reports, or job specifications directly to our official inbox.
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

            {/* Response Time and Guarantee */}
            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-[#E8E4DD] space-y-2 text-xs text-[#5F6368]">
              <div className="flex items-center gap-2 font-bold text-[#202124]">
                <Clock className="w-4 h-4 text-[#8B1E2D]" />
                <span>Working Hours &amp; Response Timeline</span>
              </div>
              <p>
                We reply to incoming enquiries within <strong>2 to 4 hours</strong> during regular operating hours (Monday to Saturday, 9:00 AM – 8:00 PM IST).
              </p>
              <p>
                Standard deliverable turnaround: <strong>24 to 48 hours</strong> after details are confirmed.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Composer */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8E4DD] p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-xl font-display font-bold text-[#202124]">
                Prepare Your Enquiry
              </h3>
              <p className="text-xs text-[#5F6368]">
                Fill in your details below to generate an instant prefilled message you can send via WhatsApp or Email.
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
                  placeholder="e.g. Aditi Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wide mb-1.5">
                  Service You Need
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm bg-white focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                >
                  <option value="SkillStory Profile (₹200)">SkillStory Profile (₹200)</option>
                  <option value="SkillStory Pro (₹300)">SkillStory Pro (₹300)</option>
                  <option value="SkillStory Complete (₹500)">SkillStory Complete (₹500)</option>
                  <option value="LinkedIn Growth (₹400)">LinkedIn Growth (₹400)</option>
                  <option value="Job Search Guidance (Starting at ₹300)">Job Search Guidance (Starting at ₹300)</option>
                  <option value="Academic & Project Support (Starting at ₹1,500)">Academic &amp; Project Support (Starting at ₹1,500)</option>
                  <option value="General Consultation / Other">General Consultation / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wide mb-1.5">
                  Brief Background / Projects
                </label>
                <textarea
                  rows={3}
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  placeholder="e.g. 3rd year Computer Science student with 2 web projects and a Python machine learning mini-project."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#202124] uppercase tracking-wide mb-1.5">
                  Target Timeline / Urgency
                </label>
                <input
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="e.g. Placement drive next Tuesday / Within 48 hours"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCD5C9] text-sm focus:outline-none focus:border-[#8B1E2D] focus:ring-1 focus:ring-[#8B1E2D]"
                />
              </div>

              {/* Message Preview Box */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6368]">
                    Generated Message Preview
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
