import React, { useState } from 'react';
import { SkillStoryLogo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'packages', label: 'Packages' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F3]/95 backdrop-blur-md border-b border-[#E8E4DD] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Contract: [Brand] — [Links] — [Action] */}
        <div className="flex items-center justify-between gap-6 md:gap-8 h-20 md:h-22">
          
          {/* ZONE 1: Official Brand Logo (Symbol + Wordmark) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E2D] rounded-lg transition-opacity hover:opacity-90 cursor-pointer py-1"
            aria-label="SkillStory — Your Skills. Your Story. Your Next Step."
          >
            <SkillStoryLogo variant="complete" height={52} className="py-0.5" />
          </button>

          {/* ZONE 2: 4–5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#202124]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#8B1E2D]'
                      : 'text-[#3C4043] hover:text-[#202124]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1E2D] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20get%20started%20with%20my%20career%20profile."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-sm hover:shadow"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#202124] hover:text-[#8B1E2D] rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E4DD] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors cursor-pointer ${
                activeTab === link.id
                  ? 'bg-[#8B1E2D]/10 text-[#8B1E2D]'
                  : 'text-[#202124] hover:bg-[#F8F6F3]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#E8E4DD]">
            <a
              href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20get%20started."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#8B1E2D] text-white text-sm font-bold shadow-sm"
            >
              <span>Get Started on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
