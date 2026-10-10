import React from 'react';
import { SkillStoryLogo } from './Logo';
import { MessageSquare, Mail, ArrowUpRight, Shield, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openLegalModal: (doc: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openLegalModal }) => {
  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202124] text-[#F8F6F3] pt-16 pb-12 border-t border-[#36383D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#36383D]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none cursor-pointer inline-flex items-center"
              aria-label="SkillStory Home"
            >
              <SkillStoryLogo variant="dark" height={54} />
            </button>
            <p className="text-sm text-[#A8ABB0] max-w-sm leading-relaxed">
              Helping students turn their education, skills, projects and achievements into stronger resumes, LinkedIn profiles and portfolios.
            </p>
            <p className="text-xs font-semibold tracking-wide text-[#E8A5AE] uppercase">
              Your Skills. Your Story. Your Next Step.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-[#F8F6F3] uppercase">
              Our Categories
            </h4>
            <ul className="space-y-2 text-sm text-[#A8ABB0]">
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  01 · Profile (₹200)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  02 · Presence (₹500)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  03 · Opportunity (From ₹300)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  04 · Project (From ₹1,500)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Job-Search Guidance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  LinkedIn Growth (₹400)
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-[#F8F6F3] uppercase">
              Company &amp; Pages
            </h4>
            <ul className="space-y-2 text-sm text-[#A8ABB0]">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services &amp; Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('packages')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Packages &amp; Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About &amp; Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact &amp; Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-[#F8F6F3] uppercase">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#F8F6F3] hover:text-[#E8A5AE] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#8B1E2D]" />
                <span>WhatsApp Instant Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="mailto:selvamuthu20200@gmail.com?subject=Enquiry%20regarding%20SkillStory"
                className="flex items-center gap-2 text-sm text-[#F8F6F3] hover:text-[#E8A5AE] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8B1E2D]" />
                <span>selvamuthu20200@gmail.com</span>
              </a>

              <div className="pt-2">
                <span className="text-xs text-[#808389] block">
                  Support hours: Mon – Sat, 9 AM – 8 PM IST
                </span>
                <span className="text-xs text-[#808389] block mt-0.5">
                  Typical turnaround: 24–48 hours
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#808389]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SkillStory. All rights reserved.</span>
            <span>·</span>
            <span>Handcrafted for students &amp; early professionals</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => openLegalModal('privacy')}
              className="hover:text-[#F8F6F3] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openLegalModal('terms')}
              className="hover:text-[#F8F6F3] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#F8F6F3] transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
