# AQUACREATION — Premium Cinematic Filmmaker & Visual Studio Portfolio

> **“Your Vision. Our Creativity.”**  
> Creative studio specializing in professional video editing, cinematic filmmaking, bridal visual arts, YouTube content, commercial promo films, and high-end photo retouching.  
> **Instagram:** [@aquacreation18](https://instagram.com/aquacreation18)

---

## 1. Creative Direction — Black and Purple Cinema

AquaCreation is built from the ground up with a bespoke **Obsidian & Royal Purple** cinematic aesthetic:
- **Obsidian Black (`#070609`)**: Core atmospheric background
- **Deep Black (`#0B0910`)**: Surface and card containers
- **Dark Purple (`#160D25`)**: Elevated card depth and section contrast
- **Royal Purple (`#6D28D9`)**: Primary accent and brand hallmark
- **Electric Violet (`#8B5CF6`)**: Vivid focus rim lighting and glows
- **Soft Lavender (`#C4B5FD`)**: Secondary typographic highlights and badges
- **Primary White (`#F7F5FA`)**: High-contrast headline typography
- **Secondary Text (`#A9A2B4`)**: Editorial body copy

Atmospheric features:
- Micro-SVG film grain texture overlay
- Radial violet light leak glows
- Anamorphic frame letterboxing
- Interactive Before & After comparison slider
- Keyboard-accessible video and photo preview lightboxes

---

## 2. Architecture & Tech Stack

- **Framework:** Next.js (App Router, Server Components + interactive Client leaves)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS v4 with custom `@theme` tokens
- **Icons:** Lucide React
- **Validation:** Zod client & server schemas
- **Email:** Resend official SDK with rate limiting and bot honeypot protection
- **Media:** Optimized local assets in `public/images/`

### Directory Map

```text
aquacreation-portfolio/
├── public/
│   ├── images/
│   │   ├── hero-cinematic.jpg          # Cinematic ARRI set background
│   │   ├── videos/
│   │   │   ├── sample-reel-01.jpg      # Sample 01: 9:16 vertical reel poster
│   │   │   ├── sample-promo-02.jpg     # Sample 02: 16:9 commercial promo poster
│   │   │   └── sample-youtube-03.jpg   # Sample 03: 16:9 YouTube editing console
│   │   └── photos/
│   │       ├── bridal-portrait.jpg     # Bridal fine-art retouching frame
│   │       ├── before-retouch.jpg      # Raw unretouched studio reference
│   │       ├── after-retouch.jpg       # Master retouched & graded frame
│   │       └── color-grade-still.jpg   # Anamorphic 35mm film grading still
│   └── videos/                         # Optional local video files (.mp4 / .webm)
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts        # Zod validation + Resend API handler
│   │   ├── work/videos/page.tsx        # Video portfolio + category filter + modal
│   │   ├── work/photos/page.tsx        # Photo gallery + Before/After slider + lightbox
│   │   ├── services/page.tsx           # 10 comprehensive studio services breakdown
│   │   ├── contact/page.tsx            # Project brief submission & Instagram card
│   │   ├── globals.css                 # Theme tokens, custom scrollbars & film grain
│   │   ├── layout.tsx                  # Global metadata, fonts, navbar & footer
│   │   ├── page.tsx                    # Cinematic homepage assembly
│   │   ├── not-found.tsx               # 404 timeline cut page
│   │   ├── sitemap.ts                  # Dynamic SEO sitemap
│   │   └── robots.ts                   # Crawler configuration
│   ├── components/
│   │   ├── home/                       # Hero, SelectedWork, ServicesOverview, Philosophy, Cta
│   │   ├── layout/                     # Navbar, Footer
│   │   ├── portfolio/                  # VideoModal, PhotoLightbox, BeforeAfterSlider
│   │   ├── contact/                    # ContactForm
│   │   └── ui/                         # SectionHeading, Badge
│   ├── data/
│   │   ├── videos.ts                   # Centralized video entries & categories
│   │   ├── photos.ts                   # Centralized photo entries & categories
│   │   └── services.ts                 # 10 service offerings & deliverables
│   ├── lib/
│   │   ├── contact-schema.ts           # Zod schema & input validation rules
│   │   └── utils.ts                    # Class merging helper (cn)
│   └── types/
│       └── portfolio.ts                # Strict TypeScript contracts
├── .env.example                        # Documented environment variables
├── .env.local                          # Local environment variables
└── README.md                           # Documentation
```

---

## 3. Getting Started

### Prerequisites
- Node.js `v18.18+` or `v20.x` (Recommended)
- npm `v9+` or `v10+`

### Installation
```bash
# Clone the repository
git clone https://github.com/aquacreation/aquacreation-portfolio.git
cd aquacreation-portfolio

# Install project dependencies
npm install
```

### Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Production Build & Verification

```bash
# Verify TypeScript and create production bundle
npm run build

# Preview production build locally
npm run start

# Run linter
npm run lint
```

---

## 5. Adding & Replacing Media Assets

### A. Replacing Existing Frames
All media files are stored locally in `public/images/`:
- **Hero Image:** Replace `public/images/hero-cinematic.jpg`
- **Reels (9:16):** Replace `public/images/videos/sample-reel-01.jpg`
- **Commercial Promo (16:9):** Replace `public/images/videos/sample-promo-02.jpg`
- **YouTube Editing (16:9):** Replace `public/images/videos/sample-youtube-03.jpg`
- **Bridal Retouching:** Replace `public/images/photos/bridal-portrait.jpg`
- **Before & After Retouching:** Replace `public/images/photos/before-retouch.jpg` and `public/images/photos/after-retouch.jpg`

### B. Adding a New Video Project
Open `src/data/videos.ts` and append a new object to `FEATURED_VIDEOS`:
```typescript
{
  id: "your-project-slug",
  title: "Commercial Film Title",
  category: "promo", // "reels" | "promo" | "youtube" | "vlogs" | "cinematic" | "weddings"
  categoryLabel: "Promotional Videos",
  description: "High-impact narrative commercial for brand launch...",
  posterUrl: "/images/videos/your-poster.jpg",
  videoUrl: "/videos/your-video.mp4", // Or leave empty for 'Sample Preview' frame
  aspectRatio: "16:9", // "9:16" | "16:9" | "4:5" | "2.39:1"
  isFeatured: true,
  status: "sample", // "sample" | "published" | "coming_soon"
  duration: "1:30",
  client: "Client Name",
  toolsUsed: ["Premiere Pro", "DaVinci Resolve"],
  fieldHighlights: [
    "Field: Commercial Production",
    "Format: 16:9 4K Cinema",
  ],
}
```

### C. Adding a New Photo Entry
Open `src/data/photos.ts` and append to `PHOTO_ITEMS`:
```typescript
{
  id: "new-portrait-slug",
  title: "Editorial Fashion Frame",
  category: "retouching", // "retouching" | "enhancement" | "bridal" | "wedding" | "portrait" | "grading" | "manipulation"
  categoryLabel: "Photo Retouching",
  description: "Detailed description of the editing and grading approach...",
  imageUrl: "/images/photos/your-image.jpg",
  beforeUrl: "/images/photos/optional-before.jpg", // Optional for Before & After comparison
  aspectRatio: "3:4", // "3:4" | "16:9" | "1:1"
  isFeatured: false,
  status: "published",
  cameraOrGear: "Sony A7IV • 85mm",
  technique: "Frequency Separation",
  fieldHighlights: [
    "Field: Editorial Fashion",
    "Tone: Obsidian & Violet Contrast",
  ],
}
```

---

## 6. Resend Email Integration Setup

The project uses [Resend](https://resend.com) to transmit client enquiry briefs directly to your inbox.

1. Sign up for a free account at [resend.com](https://resend.com).
2. Go to **API Keys** and generate an API key (starts with `re_...`).
3. (Optional for production) Go to **Domains** and verify your custom sending domain (e.g. `mail.aquacreation.com`).
4. Set the following environment variables in `.env.local` or your Vercel project settings:
```env
RESEND_API_KEY=re_your_live_api_key_here
CONTACT_TO_EMAIL=vivekbarnaon@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev # Or your verified sender like hello@aquacreation.com
```

### Security Safeguards Included
- **Zero Client-Side Leaks:** All API keys remain strictly in Node.js server runtime (`/api/contact/route.ts`).
- **Zod Validation:** Server re-validates all fields, lengths, and email formats.
- **Bot Honeypot:** Invisible field catches automated spam bots.
- **Rate Limiting:** Prevents flooding from a single IP.
- **Reply-To:** Client's verified email is set as `replyTo`, allowing 1-click email replies.

---

## 7. Deployment to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete AquaCreation cinematic portfolio"
   git push origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and import the repository.
3. In **Environment Variables**, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Click **Deploy**. Vercel will automatically build the Next.js App Router application.

---

## 8. Brand Information

- **Brand:** AquaCreation
- **Tagline:** Your Vision. Our Creativity.
- **Instagram:** [@aquacreation18](https://instagram.com/aquacreation18)
- **Philosophy:** *“Every frame has a purpose. Every edit tells a story.”*
