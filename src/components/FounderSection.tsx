import React, { useState, useEffect } from 'react';
import { MessageSquare, Mail, Compass, Anchor, ArrowUpRight, Upload } from 'lucide-react';

interface FounderSectionProps {
  onContactClick?: () => void;
  className?: string;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onContactClick,
  className = '',
}) => {
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Check localStorage for persisted user photo
    try {
      const saved = localStorage.getItem('skillstory_founder_photo');
      if (saved) {
        setCustomPhotoUrl(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhotoUrl(result);
        setImageError(false);
        try {
          localStorage.setItem('skillstory_founder_photo', result);
        } catch {
          // Ignore storage overflow
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className={`py-16 md:py-24 bg-[#F8F6F3] border-y border-[#E8E4DD] ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Founder Portrait with Restrained Frame     */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              {/* Subtle Burgundy Editorial Offset Accent Frame */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#8B1E2D]/20 via-[#8B1E2D]/5 to-transparent -rotate-1 pointer-events-none" 
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-0 rounded-2xl border-2 border-[#8B1E2D]/30 translate-x-2 translate-y-2 pointer-events-none" 
              />

              {/* Main Portrait Card */}
              <div className="relative bg-[#F4EFEA] rounded-2xl overflow-hidden border border-[#DCD5C9] shadow-lg">
                
                {/* Image Display */}
                {customPhotoUrl && !imageError ? (
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4EFEA]">
                    <img
                      src={customPhotoUrl}
                      alt="Founder, SkillStory — Portrait"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  /* Editorial Duotone Portrait Rendering with Nautical/Maritime Line Art */
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2EDE6]">
                    <svg
                      viewBox="0 0 400 520"
                      className="w-full h-full select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Portrait of SkillStory Founder with maritime line-art background"
                    >
                      {/* Background warm duotone field */}
                      <rect width="400" height="520" fill="#F4EFEA" />

                      {/* --- MARITIME LINE ART BACKGROUND (Matching uploaded artwork) --- */}
                      {/* Wave Contours Top Left */}
                      <g stroke="#C8C0B4" strokeWidth="1.2" opacity="0.8">
                        <path d="M-20 40 C60 20 120 70 200 40 C280 10 340 50 420 30" fill="none" />
                        <path d="M-20 65 C60 45 120 95 200 65 C280 35 340 75 420 55" fill="none" />
                        <path d="M-20 90 C60 70 120 120 200 90 C280 60 340 100 420 80" fill="none" />
                        <path d="M-20 115 C60 95 120 145 200 115" fill="none" />
                      </g>

                      {/* Compass Rose Upper Right */}
                      <g transform="translate(340, 150)" stroke="#B8AEA0" strokeWidth="1" opacity="0.85">
                        <circle cx="0" cy="0" r="45" fill="none" />
                        <circle cx="0" cy="0" r="32" fill="none" strokeDasharray="2 3" />
                        {/* Cardinal Points */}
                        <line x1="0" y1="-55" x2="0" y2="55" strokeWidth="1.5" />
                        <line x1="-55" y1="0" x2="55" y2="0" strokeWidth="1.5" />
                        <polygon points="0,-48 5,-15 0,0 -5,-15" fill="#8B1E2D" opacity="0.6" stroke="#8B1E2D" />
                        <polygon points="0,48 5,15 0,0 -5,15" fill="#C8C0B4" />
                        <polygon points="48,0 15,5 0,0 15,-5" fill="#C8C0B4" />
                        <polygon points="-48,0 -15,5 0,0 -15,-5" fill="#C8C0B4" />
                        <text x="0" y="-60" textAnchor="middle" fontSize="11" fontWeight="700" fill="#756D60" fontFamily="sans-serif">N</text>
                      </g>

                      {/* Cargo Container Ship Lower Left */}
                      <g transform="translate(-10, 290)" stroke="#B8AEA0" strokeWidth="1.2" opacity="0.75" fill="none">
                        {/* Hull */}
                        <path d="M10 160 L180 160 L165 195 L20 195 Z" />
                        <line x1="15" y1="180" x2="175" y2="180" strokeDasharray="3 3" />
                        {/* Containers stack */}
                        <rect x="25" y="115" width="40" height="20" />
                        <rect x="25" y="135" width="40" height="25" />
                        <rect x="70" y="105" width="45" height="25" />
                        <rect x="70" y="130" width="45" height="30" />
                        <rect x="120" y="120" width="40" height="40" />
                        {/* Bridge & Mast */}
                        <path d="M135 120 L135 80 L160 80 L160 120" />
                        <line x1="145" y1="80" x2="145" y2="50" strokeWidth="1.5" />
                        <line x1="135" y1="60" x2="155" y2="60" />
                        {/* Water lines */}
                        <path d="M0 200 Q40 196 80 200 T160 200 T240 200" strokeWidth="1.5" />
                        <path d="M0 210 Q40 206 80 210 T160 210" />
                      </g>

                      {/* --- FOUNDER PORTRAIT SILHOUETTE & FEATURES --- */}
                      {/* South Asian founder: curly black hair, glasses, beard, collared shirt, arms crossed */}
                      <g transform="translate(140, 110)">
                        {/* Neck & Chest */}
                        <path d="M80 180 C80 200 60 210 50 240 L160 240 C150 210 130 200 130 180 Z" fill="#D9D0C3" />

                        {/* Collared Shirt */}
                        <path d="M30 240 L70 200 L105 235 L140 200 L180 240 L210 330 L0 330 Z" fill="#E8E1D5" stroke="#4A453E" strokeWidth="2" />
                        {/* Collar folds */}
                        <polygon points="65,200 95,245 105,215" fill="#FFF" stroke="#4A453E" strokeWidth="1.5" />
                        <polygon points="145,200 115,245 105,215" fill="#FFF" stroke="#4A453E" strokeWidth="1.5" />
                        <circle cx="105" cy="265" r="3" fill="#8B1E2D" />
                        <circle cx="105" cy="295" r="3" fill="#8B1E2D" />

                        {/* Crossed Arms & Forearm */}
                        <path d="M10 280 C20 330 90 350 140 340 C190 330 205 280 205 280 L180 250 L35 250 Z" fill="#DDD5C8" stroke="#4A453E" strokeWidth="2" />
                        {/* Wristwatch on left wrist */}
                        <rect x="75" y="322" width="22" height="14" rx="3" fill="#A8A29A" stroke="#202124" strokeWidth="1.5" />
                        <circle cx="86" cy="329" r="5" fill="#FFF" stroke="#202124" strokeWidth="1" />

                        {/* Head & Face Contour */}
                        <path d="M60 80 C60 40 80 25 105 25 C130 25 150 40 150 80 C150 120 138 160 105 160 C72 160 60 120 60 80 Z" fill="#CDBFA8" stroke="#3D372E" strokeWidth="1.5" />

                        {/* Curly Textured Hair */}
                        <path d="M52 75 C45 50 60 15 105 12 C150 15 165 50 158 75 C152 70 148 55 140 45 C125 35 85 35 70 45 C62 55 58 70 52 75 Z" fill="#202124" />
                        <path d="M50 65 Q45 50 55 40 Q65 20 85 18 Q105 12 125 18 Q145 20 155 40 Q165 55 158 70 Q145 35 105 30 Q65 35 50 65 Z" fill="#202124" />
                        {/* Hair curls / texture */}
                        <circle cx="75" cy="28" r="9" fill="#202124" />
                        <circle cx="95" cy="22" r="10" fill="#202124" />
                        <circle cx="115" cy="24" r="10" fill="#202124" />
                        <circle cx="135" cy="30" r="9" fill="#202124" />
                        <circle cx="62" cy="42" r="8" fill="#202124" />
                        <circle cx="148" cy="45" r="8" fill="#202124" />

                        {/* Spectacles / Glasses (Modern Dark Frames) */}
                        <g stroke="#202124" strokeWidth="3" fill="none">
                          <rect x="70" y="65" width="28" height="20" rx="6" fill="#F4EFEA" fillOpacity="0.4" />
                          <rect x="110" y="65" width="28" height="20" rx="6" fill="#F4EFEA" fillOpacity="0.4" />
                          <line x1="98" y1="74" x2="110" y2="74" />
                          <line x1="60" y1="72" x2="70" y2="72" />
                          <line x1="138" y1="72" x2="148" y2="72" />
                        </g>

                        {/* Eyes behind lenses */}
                        <circle cx="84" cy="74" r="3" fill="#202124" />
                        <circle cx="124" cy="74" r="3" fill="#202124" />

                        {/* Nose and Warm Smile */}
                        <path d="M104 76 L102 96 L108 98" stroke="#4A453E" strokeWidth="2" strokeLinecap="round" fill="none" />
                        <path d="M92 110 Q105 120 118 110" stroke="#3D372E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                        {/* Neatly Groomed Short Beard & Moustache */}
                        <path d="M88 104 Q105 106 122 104" stroke="#202124" strokeWidth="3" strokeLinecap="round" />
                        <path d="M72 105 C72 140 85 158 105 158 C125 158 138 140 138 105 C132 115 125 142 105 142 C85 142 78 115 72 105 Z" fill="#202124" />
                      </g>
                    </svg>
                  </div>
                )}

                {/* Subtle Bottom Caption Bar */}
                <div className="bg-[#202124] text-white px-5 py-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#E8A5AE]">Founder Portrait</p>
                    <p className="text-sm font-medium text-[#F8F6F3]">SkillStory Studio</p>
                  </div>
                  
                  {/* Upload / Toggle actual file button */}
                  <label 
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#F8F6F3]/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors cursor-pointer"
                    title="Load original photograph from device"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Maritime subtle caption quote */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#5F6368]">
              <Compass className="w-3.5 h-3.5 text-[#8B1E2D]" />
              <span>Dedicated to student career clarity &amp; narrative direction</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Eyebrow, Heading, Role & Approved Bio     */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Small Eyebrow Heading */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#8B1E2D]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#8B1E2D]">
                THE PERSON BEHIND SKILLSTORY
              </span>
            </div>

            {/* Main Heading: Founder Name */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#202124] tracking-tight leading-[1.15] mb-2.5">
              Selvamuthu Arunachalam
            </h2>

            {/* Professional Title & Academic Credential */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 text-base font-semibold text-[#8B1E2D] mb-6">
              <span>Founder, SkillStory</span>
              <span className="hidden sm:inline text-[#B8AEA0]" aria-hidden="true">|</span>
              <span className="text-sm sm:text-base font-medium text-[#4A4D52]">
                MBA — Logistics &amp; Supply Chain Management
              </span>
            </div>

            {/* Approved Founder Biography (Exact words from brief) */}
            <div className="space-y-4 text-base sm:text-lg text-[#3C4043] leading-relaxed font-normal">
              <p>
                SkillStory grew from a simple observation: many students have valuable skills, meaningful projects, and achievements, but struggle to present them professionally.
              </p>
              
              <p>
                Through my experience supporting student resumes, LinkedIn profiles, professional content, and portfolios, I saw an opportunity to help people communicate their potential with greater clarity and confidence.
              </p>

              <p>
                I started SkillStory to help students and early-career professionals turn what they have learned, created, and achieved into a stronger professional story.
              </p>

              <p>
                For me, this is about more than creating a resume. It is about helping people recognize their strengths and present them with purpose.
              </p>

              <p className="font-medium text-[#202124] pt-2 border-t border-[#E8E4DD]">
                SkillStory is a journey of learning, building, and helping one story at a time.
              </p>
            </div>

            {/* Quick Actions & Contact Adjacency */}
            <div className="mt-8 pt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/?text=Hi%20SkillStory%2C%20I%20would%20like%20to%20discuss%20my%20career%20story%20and%20resume."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#8B1E2D] hover:bg-[#5E1421] text-white text-sm font-semibold shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start Your Story on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:selvamuthu20200@gmail.com?subject=Enquiry%20regarding%20SkillStory"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#202124] text-[#202124] hover:bg-[#202124] hover:text-white text-sm font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send an Email</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
