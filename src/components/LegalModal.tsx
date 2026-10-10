import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#202124]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#E8E4DD] animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8E4DD]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center">
              {type === 'privacy' ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#202124]">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-[#5F6368]">SkillStory · Effective October 2026</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5F6368] hover:text-[#202124] hover:bg-[#F8F6F3] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-[#3C4043] space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>SkillStory</strong>, we understand that your resume, academic records, code repositories, and career aspirations contain sensitive personal information. We treat your data with the highest standard of confidentiality.
              </p>

              <h4 className="font-bold text-[#202124] text-sm pt-2">1. Information We Collect</h4>
              <p>
                We only collect information voluntarily provided by you for the express purpose of crafting your professional profile. This includes your name, contact details, educational history, project summaries, and job targets.
              </p>

              <h4 className="font-bold text-[#202124] text-sm pt-2">2. How Your Information Is Used</h4>
              <p>
                Your materials are used solely to draft, rewrite, format, and deliver your resume, cover letter, LinkedIn content, or web portfolio. We do not sell, rent, or share candidate documents with third-party advertisers or recruitment agencies without explicit authorization.
              </p>

              <h4 className="font-bold text-[#202124] text-sm pt-2">3. Storage &amp; Deletion</h4>
              <p>
                Upon final project sign-off and completion of the revision period, your draft files remain archived for 30 days should you request minor updates. You may request immediate deletion of your materials at any time by messaging us on WhatsApp or emailing selvamuthu20200@gmail.com.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>SkillStory</strong>. By engaging our career consulting and profile writing services, you agree to the following terms and collaboration principles.
              </p>

              <h4 className="font-bold text-[#202124] text-sm pt-2">1. Scope of Services</h4>
              <p>
                SkillStory provides professional resume restructuring, ATS formatting, LinkedIn copy, and digital portfolio layouts. We collaborate with you to articulate your authentic achievements and skills with clarity.
              </p>

              <h4 className="font-bold text-[#202124] text-sm pt-2">2. Authenticity &amp; Integrity</h4>
              <p>
                SkillStory is committed to truthful representation. We do not invent fake qualifications, degrees, or unearned credentials. Clients remain responsible for verifying the factual accuracy of their final delivered resumes before submitting them to prospective employers.
              </p>

              <h4 className="font-bold text-[#202124] text-sm pt-2">3. Revisions &amp; Turnaround</h4>
              <p>
                Standard deliverables (SkillStory Profile ₹200, SkillStory Pro ₹300) are typically turned around in 24 to 48 hours. Each package includes dedicated revision rounds within the specified post-delivery window to ensure complete satisfaction.
              </p>

              <h4 className="font-bold text-[#202124] text-sm pt-2">4. Standard Pricing</h4>
              <p>
                All quoted rates are standard fixed prices for single-applicant projects. Additional bespoke requests (e.g. specialized academic dissertations or multiple portfolio domains) are quoted transparently prior to work commencement.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E8E4DD] bg-[#FAF8F5] rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#202124] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#35373B] transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
