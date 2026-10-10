import React, { useState } from 'react';

interface LogoProps {
  variant?: 'complete' | 'symbol' | 'dark' | 'horizontal';
  className?: string;
  height?: number | string;
  altText?: string;
}

export const SkillStorySymbol: React.FC<{
  size?: number;
  className?: string;
  isDark?: boolean;
}> = ({ size = 44, className = '', isDark = false }) => {
  const charcoalColor = isDark ? '#FFFFFF' : '#202124';
  const burgundyColor = isDark ? '#D94052' : '#8B1E2D';

  return (
    <svg
      width={size}
      height={Math.round((size * 140) / 160)}
      viewBox="0 0 160 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Upper Wing Blade */}
      <path
        d="M16 28 C38 46 72 74 94 116 C80 98 58 80 34 62 L16 28 Z"
        fill={charcoalColor}
      />
      <path
        d="M42 6 C70 26 98 62 110 102 C94 88 70 62 38 36 L42 6 Z"
        fill={charcoalColor}
      />
      {/* Lower Burgundy Feather Accent */}
      <path
        d="M38 56 C56 78 82 104 92 134 C76 118 58 100 40 82 Z"
        fill={burgundyColor}
      />
      {/* Burgundy Human Profile & Falcon Head Contour */}
      <path
        d="M92 134 C112 116 142 98 156 78 C150 74 146 69 149 64 C152 59 158 57 155 51 C152 46 146 44 143 40 C151 38 162 32 164 26 C159 21 146 18 132 23 C118 29 104 42 88 60"
        stroke={burgundyColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Wing Joint Contour */}
      <path
        d="M110 102 C122 88 140 76 154 60"
        stroke={charcoalColor}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="92" cy="134" r="4" fill={burgundyColor} />
    </svg>
  );
};

export const SkillStoryLogo: React.FC<LogoProps> = ({
  variant = 'complete',
  className = '',
  height = 56,
  altText = 'SkillStory — Your Skills. Your Story. Your Next Step.',
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const isDark = variant === 'dark';

  // If only symbol is requested
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <SkillStorySymbol size={typeof height === 'number' ? height : 44} isDark={isDark} />
      </div>
    );
  }

  // The complete uploaded logo includes both the symbol and wordmark
  // Primary: Load from official asset path with graceful high-fidelity vector fallback
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const logoSrc = isDark ? `${cleanBase}skill-story-logo-white.svg` : `${cleanBase}skill-story-logo.svg`;

  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      {!imgFailed ? (
        <img
          src={logoSrc}
          alt={altText}
          style={{ height: typeof height === 'number' ? `${height}px` : height }}
          className="w-auto max-w-full object-contain block transition-opacity duration-200"
          onError={() => setImgFailed(true)}
          loading="eager"
        />
      ) : (
        /* Seamless inline SVG fallback rendering the exact complete logo */
        <svg
          viewBox="0 0 400 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: typeof height === 'number' ? `${height}px` : height }}
          className="w-auto max-w-full object-contain block"
          role="img"
          aria-label={altText}
        >
          <g transform="translate(110, 16)">
            <path
              d="M16 32 C38 48 72 74 94 116 C80 98 58 80 34 62 L16 32 Z"
              fill={isDark ? '#FFFFFF' : '#202124'}
            />
            <path
              d="M42 10 C70 30 98 66 110 104 C94 90 70 64 38 40 L42 10 Z"
              fill={isDark ? '#FFFFFF' : '#202124'}
            />
            <path
              d="M38 60 C58 82 84 108 94 138 C78 122 60 104 42 86 Z"
              fill={isDark ? '#D94052' : '#8B1E2D'}
            />
            <path
              d="M94 138 C114 120 144 102 158 82 C152 78 148 73 151 68 C154 63 160 61 157 55 C154 50 148 48 145 44 C153 42 164 36 166 30 C161 25 148 22 134 27 C120 33 106 46 90 64"
              stroke={isDark ? '#D94052' : '#8B1E2D'}
              strokeWidth="8.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M110 104 C122 90 140 78 154 62"
              stroke={isDark ? '#FFFFFF' : '#202124'}
              strokeWidth="8.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="94" cy="138" r="4.5" fill={isDark ? '#D94052' : '#8B1E2D'} />
          </g>
          <text
            x="200"
            y="222"
            textAnchor="middle"
            fill={isDark ? '#FFFFFF' : '#202124'}
            fontFamily="'Plus Jakarta Sans', 'Outfit', sans-serif"
            fontSize="52"
            fontWeight="700"
            letterSpacing="-0.8px"
          >
            SkillStory
          </text>
        </svg>
      )}
    </div>
  );
};
