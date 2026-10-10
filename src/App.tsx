/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { PackagesView } from './views/PackagesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash routing for GitHub Pages compatibility
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'packages', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F8F6F3] text-[#202124]">
      {/* Top Navigation Bar with strict 3-zone contract */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && <HomeView setActiveTab={handleTabChange} />}
        {activeTab === 'services' && <ServicesView setActiveTab={handleTabChange} />}
        {activeTab === 'packages' && <PackagesView setActiveTab={handleTabChange} />}
        {activeTab === 'about' && <AboutView setActiveTab={handleTabChange} />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Brand Footer */}
      <Footer setActiveTab={handleTabChange} openLegalModal={setLegalModal} />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
}
