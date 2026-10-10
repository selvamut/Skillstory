import React from 'react';

// Common visual palette
const C = {
  burgundy: '#8B1E2D',
  burgundyDark: '#5E1421',
  burgundySoft: '#A32839',
  burgundyTint: '#F7E9EB',
  charcoal: '#202124',
  charcoalMuted: '#5F6368',
  warmBg: '#F8F6F3',
  warmSurface: '#FFFFFF',
  warmBorder: '#E6E1D8',
  warmTan: '#EDE6DB',
  accentGold: '#D4A373',
  accentTeal: '#3D5A5B',
};

// ==========================================
// A. HOMEPAGE HERO CAREER ILLUSTRATION
// ==========================================
export const HeroCareerIllustration: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      <svg
        viewBox="0 0 640 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        aria-label="Student organizing career identity with resume, projects, and portfolio"
      >
        {/* Soft Background Geometry */}
        <circle cx="320" cy="240" r="210" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1.5" />
        <circle cx="320" cy="240" r="170" stroke={C.burgundyTint} strokeWidth="1" strokeDasharray="4 4" />

        {/* Desk Surface Baseline */}
        <path d="M60 410 L580 410" stroke={C.charcoal} strokeWidth="2.5" strokeLinecap="round" />
        <rect x="90" y="410" width="460" height="8" rx="4" fill={C.warmTan} />

        {/* --- LEFT ELEMENT: Resume Document In Progress --- */}
        <g transform="translate(90, 150)">
          {/* Resume Card Background */}
          <rect
            x="0"
            y="0"
            width="170"
            height="230"
            rx="10"
            fill={C.warmSurface}
            stroke={C.charcoal}
            strokeWidth="2"
            filter="drop-shadow(0 6px 12px rgba(0,0,0,0.05))"
          />
          {/* Header Accent Bar */}
          <rect x="16" y="16" width="138" height="6" rx="3" fill={C.burgundy} />
          {/* Avatar circle & Name lines */}
          <circle cx="32" cy="42" r="12" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1.5" />
          <path d="M28 40 Q32 36 36 40" stroke={C.burgundy} strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <rect x="52" y="34" width="70" height="7" rx="3.5" fill={C.charcoal} />
          <rect x="52" y="45" width="46" height="5" rx="2.5" fill={C.charcoalMuted} />

          {/* Section Divider */}
          <line x1="16" y1="64" x2="154" y2="64" stroke={C.warmBorder} strokeWidth="1" />

          {/* Experience / Projects Blocks */}
          <rect x="16" y="74" width="42" height="6" rx="2" fill={C.burgundy} />
          <rect x="16" y="86" width="138" height="4" rx="2" fill={C.warmTan} />
          <rect x="16" y="94" width="120" height="4" rx="2" fill={C.warmTan} />
          <rect x="16" y="102" width="130" height="4" rx="2" fill={C.warmTan} />

          {/* Skills Badges (Editorial clean tags) */}
          <rect x="16" y="118" width="34" height="6" rx="2" fill={C.burgundy} />
          <rect x="16" y="130" width="38" height="14" rx="3" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1" />
          <text x="35" y="140" textAnchor="middle" fontSize="8" fontWeight="600" fill={C.burgundyDark} fontFamily="system-ui">DATA</text>
          <rect x="58" y="130" width="48" height="14" rx="3" fill={C.warmBg} stroke={C.charcoal} strokeWidth="1" />
          <text x="82" y="140" textAnchor="middle" fontSize="8" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">PYTHON</text>
          <rect x="110" y="130" width="44" height="14" rx="3" fill={C.warmBg} stroke={C.charcoal} strokeWidth="1" />
          <text x="132" y="140" textAnchor="middle" fontSize="8" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">UI/UX</text>

          {/* ATS Verification Stamp */}
          <g transform="translate(16, 160)">
            <rect x="0" y="0" width="138" height="26" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <circle cx="16" cy="13" r="7" fill={C.burgundy} />
            <path d="M13 13 L15 15 L19 11" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="30" y="16" fontSize="9" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">ATS Formatted &amp; Verified</text>
          </g>

          {/* Floating Target Pin */}
          <circle cx="150" cy="18" r="8" fill={C.burgundy} />
          <path d="M147 18 L153 18 M150 15 L150 21" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* --- CENTER ELEMENT: Laptop with Portfolio Interface --- */}
        <g transform="translate(260, 200)">
          {/* Laptop Screen Body */}
          <rect x="0" y="0" width="220" height="150" rx="8" fill={C.charcoal} />
          {/* Laptop Display Inner Surface */}
          <rect x="8" y="8" width="204" height="134" rx="4" fill={C.warmSurface} />

          {/* Browser Window Header */}
          <rect x="8" y="8" width="204" height="16" fill={C.warmBg} />
          <circle cx="18" cy="16" r="3" fill={C.burgundy} />
          <circle cx="28" cy="16" r="3" fill={C.warmBorder} />
          <circle cx="38" cy="16" r="3" fill={C.warmBorder} />
          <rect x="52" y="12" width="110" height="8" rx="3" fill={C.warmSurface} stroke={C.warmBorder} strokeWidth="1" />
          <text x="107" y="18" textAnchor="middle" fontSize="6" fill={C.charcoalMuted} fontFamily="system-ui">skillstory.in/portfolio</text>

          {/* Portfolio Hero Preview Inside Laptop */}
          <rect x="18" y="32" width="70" height="8" rx="2" fill={C.burgundy} />
          <rect x="18" y="44" width="100" height="4" rx="2" fill={C.charcoalMuted} />
          <rect x="18" y="52" width="80" height="4" rx="2" fill={C.charcoalMuted} />

          {/* Featured Project Cards inside preview */}
          <rect x="18" y="64" width="86" height="66" rx="4" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
          <rect x="24" y="70" width="74" height="30" rx="3" fill={C.burgundyTint} />
          <rect x="24" y="104" width="55" height="5" rx="2" fill={C.charcoal} />
          <rect x="24" y="112" width="40" height="4" rx="2" fill={C.burgundy} />

          <rect x="112" y="64" width="88" height="66" rx="4" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
          <rect x="118" y="70" width="76" height="30" rx="3" fill={C.warmTan} />
          <rect x="118" y="104" width="60" height="5" rx="2" fill={C.charcoal} />
          <rect x="118" y="112" width="45" height="4" rx="2" fill={C.charcoalMuted} />

          {/* Laptop Base / Keyboard deck */}
          <path d="M-22 150 L242 150 L228 164 L-8 164 Z" fill="#D3CECA" stroke={C.charcoal} strokeWidth="1.5" />
          <rect x="80" y="152" width="60" height="6" rx="2" fill="#B3ACA6" />
        </g>

        {/* --- RIGHT FLOATING ELEMENT: Career Growth & Narrative Badge --- */}
        <g transform="translate(450, 90)">
          <rect
            x="0"
            y="0"
            width="140"
            height="110"
            rx="12"
            fill={C.warmSurface}
            stroke={C.charcoal}
            strokeWidth="2"
            filter="drop-shadow(0 8px 16px rgba(139,30,45,0.08))"
          />
          {/* Header */}
          <rect x="14" y="14" width="28" height="28" rx="8" fill={C.burgundy} />
          <path d="M22 30 L28 22 L34 26 L40 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="50" y="26" fontSize="11" fontWeight="700" fill={C.charcoal} fontFamily="system-ui">Story Growth</text>
          <text x="50" y="38" fontSize="9" fill={C.charcoalMuted} fontFamily="system-ui">Skills → Career</text>

          <line x1="14" y1="50" x2="126" y2="50" stroke={C.warmBorder} strokeWidth="1" />

          {/* Stepper items */}
          <circle cx="22" cy="64" r="5" fill={C.burgundy} />
          <text x="34" y="67" fontSize="9" fontWeight="600" fill={C.burgundyDark} fontFamily="system-ui">Resumes (₹200)</text>

          <circle cx="22" cy="80" r="5" fill={C.burgundy} />
          <text x="34" y="83" fontSize="9" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">LinkedIn (₹400)</text>

          <circle cx="22" cy="96" r="5" fill={C.burgundy} />
          <text x="34" y="99" fontSize="9" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">Portfolio (₹500)</text>
        </g>

        {/* --- DECORATIVE CONNECTING PATHS --- */}
        <path
          d="M245 220 C270 160 380 150 450 140"
          stroke={C.burgundy}
          strokeWidth="2"
          strokeDasharray="4 6"
          fill="none"
        />
        <circle cx="250" cy="210" r="4" fill={C.burgundy} />
        <circle cx="445" cy="142" r="4" fill={C.burgundy} />

        {/* Small Floating Accents */}
        <g transform="translate(110, 90)">
          <circle cx="10" cy="10" r="14" fill={C.burgundyTint} />
          <path d="M6 10 L14 10 M10 6 L10 14" stroke={C.burgundy} strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(540, 240)">
          <rect width="24" height="24" rx="6" fill={C.warmBg} stroke={C.burgundy} strokeWidth="1.5" />
          <path d="M7 12 L11 16 L17 8" stroke={C.burgundy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// B. PROFILE SERVICE ILLUSTRATION (Resume + Profile Card)
// ==========================================
export const ProfileServiceIllustration: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <svg
        viewBox="0 0 460 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        aria-label="Resume document beside a structured professional profile card"
      >
        <rect width="460" height="340" rx="16" fill={C.warmBg} />

        {/* Left: Resume Document */}
        <g transform="translate(40, 30)">
          <rect
            x="0"
            y="0"
            width="175"
            height="270"
            rx="8"
            fill={C.warmSurface}
            stroke={C.charcoal}
            strokeWidth="2"
            filter="drop-shadow(0 4px 8px rgba(0,0,0,0.06))"
          />
          {/* Top banner accent */}
          <rect x="14" y="14" width="147" height="6" rx="3" fill={C.burgundy} />
          {/* Candidate Name & Title */}
          <rect x="14" y="28" width="85" height="10" rx="3" fill={C.charcoal} />
          <rect x="14" y="42" width="115" height="5" rx="2" fill={C.charcoalMuted} />
          <rect x="14" y="51" width="90" height="5" rx="2" fill={C.charcoalMuted} />

          <line x1="14" y1="65" x2="161" y2="65" stroke={C.warmBorder} strokeWidth="1" />

          {/* Education Block */}
          <rect x="14" y="74" width="55" height="7" rx="2" fill={C.burgundy} />
          <rect x="14" y="85" width="135" height="4" rx="2" fill={C.warmTan} />
          <rect x="14" y="93" width="120" height="4" rx="2" fill={C.warmTan} />

          {/* Project Highlights */}
          <rect x="14" y="108" width="65" height="7" rx="2" fill={C.burgundy} />
          <rect x="14" y="119" width="147" height="4" rx="2" fill={C.charcoal} />
          <rect x="14" y="127" width="130" height="4" rx="2" fill={C.warmTan} />
          <rect x="14" y="135" width="140" height="4" rx="2" fill={C.warmTan} />

          {/* Highlighted Skills */}
          <rect x="14" y="152" width="45" height="7" rx="2" fill={C.burgundy} />
          <g transform="translate(14, 165)">
            <rect x="0" y="0" width="42" height="14" rx="3" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1" />
            <text x="21" y="10" textAnchor="middle" fontSize="7" fontWeight="600" fill={C.burgundyDark} fontFamily="system-ui">RESEARCH</text>

            <rect x="46" y="0" width="38" height="14" rx="3" fill={C.warmBg} stroke={C.charcoal} strokeWidth="1" />
            <text x="65" y="10" textAnchor="middle" fontSize="7" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">PYTHON</text>

            <rect x="88" y="0" width="36" height="14" rx="3" fill={C.warmBg} stroke={C.charcoal} strokeWidth="1" />
            <text x="106" y="10" textAnchor="middle" fontSize="7" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">FIGMA</text>
          </g>

          {/* ATS Compliance Shield */}
          <g transform="translate(14, 210)">
            <rect x="0" y="0" width="147" height="40" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <circle cx="20" cy="20" r="10" fill={C.burgundy} />
            <path d="M16 20 L19 23 L25 17" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="36" y="18" fontSize="10" fontWeight="700" fill={C.charcoal} fontFamily="system-ui">ATS 100% Pass</text>
            <text x="36" y="29" fontSize="8" fill={C.charcoalMuted} fontFamily="system-ui">Clean Single-Column Structure</text>
          </g>
        </g>

        {/* Right: LinkedIn & Professional Profile Card */}
        <g transform="translate(235, 45)">
          <rect
            x="0"
            y="0"
            width="185"
            height="240"
            rx="12"
            fill={C.warmSurface}
            stroke={C.charcoal}
            strokeWidth="2"
            filter="drop-shadow(0 6px 14px rgba(139,30,45,0.06))"
          />
          {/* Cover photo banner */}
          <path d="M0 12 Q0 0 12 0 L173 0 Q185 0 185 12 L185 55 L0 55 Z" fill={C.burgundy} />
          <path d="M10 25 L50 25 L75 55 L0 55 Z" fill={C.burgundyDark} opacity="0.5" />

          {/* Avatar Profile */}
          <circle cx="36" cy="55" r="22" fill={C.warmSurface} stroke={C.warmSurface} strokeWidth="3" />
          <circle cx="36" cy="55" r="19" fill={C.burgundyTint} />
          <circle cx="36" cy="50" r="7" fill={C.burgundy} />
          <path d="M23 65 C23 58 31 57 36 57 C41 57 49 58 49 65" fill={C.burgundy} />

          {/* Profile Name & Headline */}
          <rect x="16" y="86" width="95" height="10" rx="3" fill={C.charcoal} />
          <rect x="16" y="100" width="150" height="6" rx="2" fill={C.charcoalMuted} />
          <rect x="16" y="109" width="125" height="6" rx="2" fill={C.burgundy} />

          {/* Key Metric Pills */}
          <g transform="translate(16, 126)">
            <rect x="0" y="0" width="72" height="24" rx="5" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <text x="8" y="16" fontSize="9" fontWeight="700" fill={C.burgundyDark} fontFamily="system-ui">₹200 Standard</text>

            <rect x="78" y="0" width="75" height="24" rx="5" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <text x="86" y="16" fontSize="9" fontWeight="700" fill={C.charcoal} fontFamily="system-ui">24-48h Delivery</text>
          </g>

          {/* Narrative Summary Preview */}
          <rect x="16" y="160" width="153" height="4" rx="2" fill={C.warmTan} />
          <rect x="16" y="168" width="140" height="4" rx="2" fill={C.warmTan} />
          <rect x="16" y="176" width="148" height="4" rx="2" fill={C.warmTan} />
          <rect x="16" y="184" width="110" height="4" rx="2" fill={C.warmTan} />

          {/* Action CTA Badge */}
          <g transform="translate(16, 198)">
            <rect x="0" y="0" width="153" height="28" rx="6" fill={C.burgundy} />
            <text x="76" y="18" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFF" fontFamily="system-ui">SkillStory Profile — ₹200</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// C. PRESENCE SERVICE ILLUSTRATION (Portfolio Website on Laptop)
// ==========================================
export const PresenceServiceIllustration: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <svg
        viewBox="0 0 460 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        aria-label="Portfolio website displayed on a laptop with project thumbnails and achievements"
      >
        <rect width="460" height="340" rx="16" fill={C.warmBg} />

        {/* Laptop Display Chassis */}
        <g transform="translate(55, 30)">
          <rect x="0" y="0" width="350" height="225" rx="12" fill={C.charcoal} stroke={C.charcoal} strokeWidth="2" />
          <rect x="12" y="12" width="326" height="201" rx="6" fill={C.warmSurface} />

          {/* Browser Navigation */}
          <rect x="12" y="12" width="326" height="24" fill={C.warmTan} />
          <circle cx="26" cy="24" r="4" fill={C.burgundy} />
          <circle cx="38" cy="24" r="4" fill="#C2BBB3" />
          <circle cx="50" cy="24" r="4" fill="#C2BBB3" />
          <rect x="70" y="17" width="190" height="14" rx="4" fill={C.warmSurface} stroke={C.warmBorder} strokeWidth="1" />
          <text x="165" y="27" textAnchor="middle" fontSize="8" fontWeight="600" fill={C.charcoalMuted} fontFamily="system-ui">https://skillstory.in/your-name</text>

          {/* Portfolio Hero Header */}
          <g transform="translate(24, 48)">
            <circle cx="18" cy="18" r="14" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1.5" />
            <path d="M12 18 C12 12 16 11 18 11 C20 11 24 12 24 18" stroke={C.burgundy} strokeWidth="1.5" fill="none" />
            <rect x="40" y="10" width="110" height="9" rx="3" fill={C.charcoal} />
            <rect x="40" y="22" width="140" height="6" rx="2" fill={C.burgundy} />

            <rect x="230" y="12" width="70" height="18" rx="4" fill={C.burgundy} />
            <text x="265" y="24" textAnchor="middle" fontSize="8" fontWeight="700" fill="#FFF" fontFamily="system-ui">View CV</text>
          </g>

          {/* Project Thumbnails Grid */}
          <g transform="translate(24, 86)">
            {/* Project Card 1 */}
            <rect x="0" y="0" width="94" height="110" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <rect x="6" y="6" width="82" height="48" rx="4" fill={C.burgundyTint} />
            {/* Mini illustration inside project card */}
            <path d="M20 40 L35 25 L50 35 L70 20" stroke={C.burgundy} strokeWidth="2" strokeLinecap="round" />
            <circle cx="70" cy="20" r="3" fill={C.burgundy} />
            <rect x="6" y="60" width="65" height="7" rx="2" fill={C.charcoal} />
            <rect x="6" y="70" width="82" height="5" rx="2" fill={C.charcoalMuted} />
            <rect x="6" y="86" width="36" height="12" rx="3" fill={C.burgundy} />
            <text x="24" y="95" textAnchor="middle" fontSize="7" fontWeight="600" fill="#FFF" fontFamily="system-ui">Code</text>

            {/* Project Card 2 */}
            <rect x="104" y="0" width="94" height="110" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <rect x="110" y="6" width="82" height="48" rx="4" fill={C.warmTan} />
            <rect x="122" y="18" width="58" height="24" rx="3" fill={C.warmSurface} stroke={C.warmBorder} strokeWidth="1" />
            <rect x="110" y="60" width="70" height="7" rx="2" fill={C.charcoal} />
            <rect x="110" y="70" width="75" height="5" rx="2" fill={C.charcoalMuted} />
            <rect x="110" y="86" width="40" height="12" rx="3" fill={C.charcoal} />
            <text x="130" y="95" textAnchor="middle" fontSize="7" fontWeight="600" fill="#FFF" fontFamily="system-ui">Demo</text>

            {/* Project Card 3 */}
            <rect x="208" y="0" width="94" height="110" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <rect x="214" y="6" width="82" height="48" rx="4" fill="#EAE5DE" />
            <circle cx="255" cy="30" r="14" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1" />
            <text x="255" y="34" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.burgundy}>★</text>
            <rect x="214" y="60" width="60" height="7" rx="2" fill={C.charcoal} />
            <rect x="214" y="70" width="78" height="5" rx="2" fill={C.charcoalMuted} />
            <rect x="214" y="86" width="45" height="12" rx="3" fill={C.burgundy} />
            <text x="236" y="95" textAnchor="middle" fontSize="7" fontWeight="600" fill="#FFF" fontFamily="system-ui">Paper</text>
          </g>

          {/* Laptop Base */}
          <path d="M-35 225 L385 225 L365 245 L-15 245 Z" fill="#D3CECA" stroke={C.charcoal} strokeWidth="2" />
          <rect x="120" y="227" width="110" height="7" rx="3" fill="#B3ACA6" />
        </g>

        {/* Feature Pill Overlay */}
        <g transform="translate(145, 292)">
          <rect x="0" y="0" width="170" height="32" rx="8" fill={C.warmSurface} stroke={C.burgundy} strokeWidth="1.5" />
          <circle cx="20" cy="16" r="6" fill={C.burgundy} />
          <text x="34" y="20" fontSize="10" fontWeight="700" fill={C.charcoal} fontFamily="system-ui">SkillStory Complete — ₹500</text>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// D. OPPORTUNITY SERVICE ILLUSTRATION (Job Search & Career Roadmaps)
// ==========================================
export const OpportunityServiceIllustration: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <svg
        viewBox="0 0 460 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        aria-label="Student analyzing job descriptions and preparing targeted applications"
      >
        <rect width="460" height="340" rx="16" fill={C.warmBg} />

        {/* Left: Job Description & Target Match Card */}
        <g transform="translate(35, 35)">
          <rect
            x="0"
            y="0"
            width="185"
            height="260"
            rx="10"
            fill={C.warmSurface}
            stroke={C.charcoal}
            strokeWidth="2"
            filter="drop-shadow(0 4px 10px rgba(0,0,0,0.05))"
          />
          {/* Header */}
          <rect x="16" y="16" width="30" height="30" rx="6" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1.5" />
          <text x="31" y="35" textAnchor="middle" fontSize="14" fontWeight="700" fill={C.burgundy}>💼</text>
          <rect x="54" y="18" width="90" height="9" rx="3" fill={C.charcoal} />
          <rect x="54" y="32" width="60" height="6" rx="2" fill={C.charcoalMuted} />

          <line x1="16" y1="56" x2="169" y2="56" stroke={C.warmBorder} strokeWidth="1" />

          {/* Keyword Match Checklist */}
          <text x="16" y="74" fontSize="10" fontWeight="700" fill={C.burgundyDark} fontFamily="system-ui">Job Criteria Match</text>

          {/* Row 1 */}
          <circle cx="24" cy="94" r="7" fill={C.burgundy} />
          <path d="M21 94 L23 96 L27 92" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
          <text x="38" y="97" fontSize="9" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">Core Technical Skills</text>

          {/* Row 2 */}
          <circle cx="24" cy="116" r="7" fill={C.burgundy} />
          <path d="M21 116 L23 118 L27 114" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
          <text x="38" y="119" fontSize="9" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">Project Impact Metrics</text>

          {/* Row 3 */}
          <circle cx="24" cy="138" r="7" fill={C.burgundy} />
          <path d="M21 138 L23 140 L27 136" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
          <text x="38" y="141" fontSize="9" fontWeight="600" fill={C.charcoal} fontFamily="system-ui">Narrative Positioning</text>

          {/* Match Score Gauge */}
          <g transform="translate(16, 160)">
            <rect x="0" y="0" width="153" height="50" rx="6" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1" />
            <text x="14" y="22" fontSize="9" fontWeight="700" fill={C.burgundyDark} fontFamily="system-ui">Relevance Alignment</text>
            <rect x="14" y="30" width="125" height="8" rx="4" fill={C.warmSurface} />
            <rect x="14" y="30" width="105" height="8" rx="4" fill={C.burgundy} />
            <text x="124" y="22" textAnchor="end" fontSize="9" fontWeight="700" fill={C.burgundy}>85%</text>
          </g>

          {/* Starting at ₹300 */}
          <text x="92" y="238" textAnchor="middle" fontSize="9" fontWeight="700" fill={C.charcoalMuted} fontFamily="system-ui">Starting at ₹300</text>
        </g>

        {/* Right: Application Prep & Interview Pitch */}
        <g transform="translate(240, 45)">
          <rect
            x="0"
            y="0"
            width="185"
            height="240"
            rx="12"
            fill={C.warmSurface}
            stroke={C.charcoal}
            strokeWidth="2"
            filter="drop-shadow(0 6px 14px rgba(0,0,0,0.06))"
          />
          <rect x="16" y="16" width="153" height="12" rx="3" fill={C.burgundy} />
          <text x="92" y="25" textAnchor="middle" fontSize="8" fontWeight="700" fill="#FFF" fontFamily="system-ui">TARGETED STRATEGY</text>

          {/* Steps */}
          <g transform="translate(16, 42)">
            <rect x="0" y="0" width="153" height="34" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <text x="12" y="16" fontSize="9" fontWeight="700" fill={C.charcoal} fontFamily="system-ui">1. Role Breakdown</text>
            <text x="12" y="27" fontSize="8" fill={C.charcoalMuted} fontFamily="system-ui">Extract what recruiters actually seek</text>
          </g>

          <g transform="translate(16, 84)">
            <rect x="0" y="0" width="153" height="34" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <text x="12" y="16" fontSize="9" fontWeight="700" fill={C.charcoal} fontFamily="system-ui">2. Tailored Application</text>
            <text x="12" y="27" fontSize="8" fill={C.charcoalMuted} fontFamily="system-ui">Resume &amp; cover alignment</text>
          </g>

          <g transform="translate(16, 126)">
            <rect x="0" y="0" width="153" height="34" rx="6" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <text x="12" y="16" fontSize="9" fontWeight="700" fill={C.charcoal} fontFamily="system-ui">3. Story Delivery</text>
            <text x="12" y="27" fontSize="8" fill={C.charcoalMuted} fontFamily="system-ui">Confident self-introduction</text>
          </g>

          <g transform="translate(16, 178)">
            <rect x="0" y="0" width="153" height="42" rx="6" fill={C.burgundy} />
            <text x="76" y="19" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFF" fontFamily="system-ui">Job Search Guidance</text>
            <text x="76" y="32" textAnchor="middle" fontSize="8" fill={C.burgundyTint} fontFamily="system-ui">Starting at ₹300</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// E. PROJECT SERVICE ILLUSTRATION (Research Presentation & Academic Support)
// ==========================================
export const ProjectServiceIllustration: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <svg
        viewBox="0 0 460 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm select-none"
        aria-label="Student presenting research project with charts, documents, presentation screen, and notes"
      >
        <rect width="460" height="340" rx="16" fill={C.warmBg} />

        {/* Presentation Board in Center-Right */}
        <g transform="translate(150, 30)">
          <rect x="0" y="0" width="270" height="180" rx="10" fill={C.warmSurface} stroke={C.charcoal} strokeWidth="2" />
          <rect x="12" y="12" width="246" height="20" fill={C.burgundy} rx="4" />
          <text x="135" y="26" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFF" fontFamily="system-ui">RESEARCH PRESENTATION &amp; DEFENSE</text>

          {/* Chart Graphic inside board */}
          <g transform="translate(20, 44)">
            <rect x="0" y="0" width="110" height="70" rx="4" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            {/* Bar charts */}
            <rect x="14" y="38" width="14" height="24" rx="2" fill={C.warmTan} />
            <rect x="36" y="24" width="14" height="38" rx="2" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1" />
            <rect x="58" y="16" width="14" height="46" rx="2" fill={C.burgundy} />
            <rect x="80" y="28" width="14" height="34" rx="2" fill={C.charcoal} />
            <line x1="10" y1="62" x2="100" y2="62" stroke={C.charcoal} strokeWidth="1" />
          </g>

          {/* Key Findings Bullet Notes */}
          <g transform="translate(140, 44)">
            <rect x="0" y="0" width="115" height="70" rx="4" fill={C.warmBg} stroke={C.warmBorder} strokeWidth="1" />
            <rect x="10" y="12" width="70" height="6" rx="2" fill={C.burgundy} />
            <rect x="10" y="24" width="95" height="4" rx="2" fill={C.charcoalMuted} />
            <rect x="10" y="32" width="90" height="4" rx="2" fill={C.charcoalMuted} />
            <rect x="10" y="44" width="60" height="5" rx="2" fill={C.charcoal} />
            <rect x="10" y="53" width="85" height="4" rx="2" fill={C.warmTan} />
          </g>

          {/* Research Rigor Status Strip */}
          <g transform="translate(20, 126)">
            <rect x="0" y="0" width="235" height="26" rx="4" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="1" />
            <text x="16" y="17" fontSize="9" fontWeight="700" fill={C.burgundyDark} fontFamily="system-ui">Academic Rigor · Structured Methodology · Clear Results</text>
          </g>

          {/* Stand Legs */}
          <line x1="80" y1="180" x2="60" y2="245" stroke={C.charcoal} strokeWidth="2.5" />
          <line x1="190" y1="180" x2="210" y2="245" stroke={C.charcoal} strokeWidth="2.5" />
          <line x1="50" y1="245" x2="220" y2="245" stroke={C.charcoal} strokeWidth="2.5" />
        </g>

        {/* Student Document Folder on Left */}
        <g transform="translate(35, 60)">
          <rect x="0" y="0" width="135" height="190" rx="8" fill={C.warmSurface} stroke={C.charcoal} strokeWidth="2" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.06))" />
          <path d="M0 8 Q0 0 8 0 L60 0 L75 16 L127 16 Q135 16 135 24 L135 182 Q135 190 127 190 L8 190 Q0 190 0 182 Z" fill={C.warmTan} />
          <rect x="10" y="30" width="115" height="145" rx="6" fill={C.warmSurface} stroke={C.warmBorder} strokeWidth="1" />
          <rect x="20" y="44" width="70" height="7" rx="2" fill={C.burgundy} />
          <rect x="20" y="58" width="95" height="4" rx="2" fill={C.charcoalMuted} />
          <rect x="20" y="66" width="85" height="4" rx="2" fill={C.charcoalMuted} />
          <rect x="20" y="74" width="90" height="4" rx="2" fill={C.warmTan} />

          {/* Project Support Price Badge */}
          <g transform="translate(18, 120)">
            <rect x="0" y="0" width="100" height="34" rx="6" fill={C.burgundy} />
            <text x="50" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#FFF" fontFamily="system-ui">Project Support</text>
            <text x="50" y="27" textAnchor="middle" fontSize="7" fill={C.burgundyTint} fontFamily="system-ui">Starting at ₹1,500</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// F. PROCESS ICONS (Discover → Build → Present → Connect → Apply → Grow)
// ==========================================
export const ProcessStepIcon: React.FC<{ step: number; className?: string }> = ({
  step,
  className = '',
}) => {
  switch (step) {
    case 1: // Discover
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-8 h-8 ${className}`}>
          <circle cx="22" cy="22" r="14" stroke={C.burgundy} strokeWidth="3" />
          <path d="M32 32 L42 42" stroke={C.charcoal} strokeWidth="3" strokeLinecap="round" />
          <circle cx="22" cy="22" r="6" fill={C.burgundyTint} />
        </svg>
      );
    case 2: // Build
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-8 h-8 ${className}`}>
          <rect x="10" y="18" width="28" height="22" rx="4" stroke={C.burgundy} strokeWidth="3" fill={C.burgundyTint} />
          <path d="M18 18 V12 C18 9 21 7 24 7 C27 7 30 9 30 12 V18" stroke={C.charcoal} strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="26" x2="24" y2="32" stroke={C.burgundy} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 3: // Present
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-8 h-8 ${className}`}>
          <rect x="8" y="10" width="32" height="24" rx="4" stroke={C.charcoal} strokeWidth="3" fill={C.burgundyTint} />
          <path d="M18 20 L24 24 L30 18" stroke={C.burgundy} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="38" x2="32" y2="38" stroke={C.charcoal} strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="34" x2="24" y2="38" stroke={C.charcoal} strokeWidth="3" />
        </svg>
      );
    case 4: // Connect
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-8 h-8 ${className}`}>
          <circle cx="16" cy="24" r="8" stroke={C.burgundy} strokeWidth="3" fill={C.burgundyTint} />
          <circle cx="32" cy="24" r="8" stroke={C.charcoal} strokeWidth="3" />
          <path d="M22 24 L26 24" stroke={C.burgundy} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 5: // Apply
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-8 h-8 ${className}`}>
          <rect x="12" y="8" width="24" height="32" rx="3" stroke={C.burgundy} strokeWidth="3" fill={C.burgundyTint} />
          <line x1="18" y1="18" x2="30" y2="18" stroke={C.charcoal} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="18" y1="24" x2="28" y2="24" stroke={C.charcoal} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="18" y1="30" x2="24" y2="30" stroke={C.burgundy} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 6: // Grow
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-8 h-8 ${className}`}>
          <path d="M8 38 L18 26 L26 32 L40 12" stroke={C.burgundy} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 12 H40 V22" stroke={C.burgundy} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="40" cy="12" r="3" fill={C.burgundyDark} />
        </svg>
      );
  }
};

// ==========================================
// G. PACKAGE CARD ICONS (Profile, Pro, Complete)
// ==========================================
export const PackageBadgeIcon: React.FC<{
  tier: 'profile' | 'pro' | 'complete';
  className?: string;
}> = ({ tier, className = '' }) => {
  switch (tier) {
    case 'profile':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-10 h-10 ${className}`}>
          <rect x="6" y="6" width="36" height="36" rx="8" fill={C.warmBg} stroke={C.burgundy} strokeWidth="2" />
          <path d="M16 16 H32" stroke={C.charcoal} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 22 H28" stroke={C.charcoalMuted} strokeWidth="2" strokeLinecap="round" />
          <path d="M16 28 H30" stroke={C.charcoalMuted} strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="32" r="4" fill={C.burgundy} />
        </svg>
      );
    case 'pro':
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-10 h-10 ${className}`}>
          <rect x="6" y="6" width="36" height="36" rx="8" fill={C.burgundyTint} stroke={C.burgundy} strokeWidth="2.5" />
          <path d="M24 14 L27 21 L34 22 L29 27 L30 34 L24 30 L18 34 L19 27 L14 22 L21 21 Z" fill={C.burgundy} />
        </svg>
      );
    case 'complete':
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className={`w-10 h-10 ${className}`}>
          <rect x="6" y="6" width="36" height="36" rx="8" fill={C.charcoal} />
          <circle cx="24" cy="24" r="12" stroke={C.burgundy} strokeWidth="2" fill="#323336" />
          <path d="M19 24 L22 27 L29 20" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};
