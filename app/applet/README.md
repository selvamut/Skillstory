# SkillStory — Career Identity & Portfolio Platform

SkillStory is a professional personal branding and career identity platform dedicated to helping students and early-career professionals transform their education, skills, projects, and achievements into high-impact resumes, compelling LinkedIn profiles, and verified portfolios.

Founded by **Selvamuthu Arunachalam** (MBA — Logistics & Supply Chain Management).

## Project Structure

- `src/`
  - `components/`
    - `Navbar.tsx` — Top navigation with branding and section routing
    - `FounderSection.tsx` — Founder profile card featuring official founder portrait and bio
    - `Logo.tsx` — SkillStory brandmark
    - `Illustrations.tsx` — Custom visual illustrations
    - `Footer.tsx` — Brand footer with links and social connections
    - `LegalModal.tsx` — Privacy policy and terms of service modal
  - `views/`
    - `HomeView.tsx` — Landing page with value proposition, pillars, and founder section
    - `ServicesView.tsx` — Core services (Resume Building, LinkedIn Optimization, Portfolio Storytelling)
    - `PackagesView.tsx` — Package tiers and pricing details
    - `AboutView.tsx` — Mission, vision, and backstory
    - `ContactView.tsx` — Consultation booking and contact options
  - `assets/` — Project imagery and logo assets
- `public/`
  - `founder-photo.png` — Permanent founder portrait
  - `founder-photo.jpg` — JPEG portrait asset
  - `skill-story-logo.svg` — Vector brand logo
  - `favicon.svg` — Browser favicon

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
