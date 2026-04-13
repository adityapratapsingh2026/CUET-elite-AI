# CUET ELITE AI — Design Brief

## Tone & Purpose
Premium luxury EdTech platform for high-stakes CUET exam prep. Aspirational, confident, prestigious. Conveys mastery and serious intent for ambitious students.

## Visual Direction
Ultra-modern luxury with academic prestige. Deep charcoal near-black backgrounds layered with glassmorphic cards, gold accent highlights, and premium typography. Inspired by top global EdTech platforms — not basic Indian coaching templates.

## Color Palette

| Token | Light OKLCH | Dark OKLCH | Usage |
|-------|------------|-----------|-------|
| Background | `0.98 0 0` | `0.12 0 0` | Page background, deepest zone |
| Foreground | `0.12 0 0` | `0.93 0 0` | Primary text, AA+ contrast |
| Card | `0.95 0 0` | `0.16 0 0` | Content containers, glass effect |
| Primary/Accent | `0.75 0.18 70` | `0.75 0.18 70` | Gold/amber—buttons, icons, highlights, hover glow |
| Secondary | `0.85 0 0` | `0.22 0 0` | Muted interactive states, borders |
| Muted | `0.88 0 0` | `0.2 0 0` | Disabled text, subtle dividers |
| Destructive | `0.55 0.22 25` | `0.65 0.19 22` | Error states, alerts |
| Chart Colors | `0.75 0.18 70`, `0.65 0.22 40`, `0.6 0.12 185`, `0.83 0.19 84`, `0.77 0.19 70` | Matching set | Performance dashboard data viz |

## Typography

| Role | Font | Usage | Tracking |
|------|------|-------|----------|
| Display/Headings | Bricolage Grotesque (400, 700) | Page titles, card headers, hero text | Tight, +0.5% |
| Body/UI | DM Sans (400, 700) | Copy, buttons, labels, descriptive text | Normal, 0% |
| Code/Data | JetBrains Mono (400, 700) | Quiz timers, score displays, technical labels | Wider, +1% |

Type scale: `12px` (xs), `14px` (sm), `16px` (base), `20px` (lg), `24px` (xl), `32px` (2xl), `40px` (3xl).

## Structural Zones

| Zone | Treatment | Visual Cue |
|------|-----------|-----------|
| Header | `bg-card` with `border-b border-accent/30` gold underline, glassmorphism | Premium anchor, navigation clarity |
| Main Content | `bg-background` with alternating `glass-effect` cards | Clean grid, layered depth |
| Sidebar (if present) | `bg-card` with `border-r` subtle divider | Secondary navigation, muted tone |
| Footer | `bg-card/50` with `border-t border-muted` | Recessive zone, company/legal info |
| Quiz/Test Cards | `glass-gold` (semi-transparent + accent border) with `gold-glow` shadow | Premium interactive highlight |
| CTA Buttons | `bg-primary text-primary-foreground` with `hover-lift` and `pulse-accent` on load | Confident, aspirational action |

## Elevation & Depth

- **Level 0 (Base):** `bg-background`, no shadow
- **Level 1 (Cards):** `bg-card` with `shadow-md` or `glass-effect`
- **Level 2 (Modals/Popovers):** `glass-effect` with `shadow-elevated` and `gold-glow` on hover
- **Interactive Hover:** `hover-lift` lifts element `-translate-y-1` and adds `shadow-xl`

## Motion & Animation

| Effect | Keyframe | Duration | Timing | Trigger |
|--------|----------|----------|--------|---------|
| Page Fade-In | `fadeIn` | 0.6s | ease-in-out | On page load |
| Card Slide-Up | `slideUp` (0 → 10px Y offset) | 0.5s | ease-out | On scroll into view |
| Hover Lift | `hover-lift` class | 0.3s (smooth) | cubic-bezier(0.4, 0, 0.2, 1) | Card/button hover |
| Pulse Glow | `pulseAccent` (opacity 1 → 0.7) | 2s | infinite | CTA button load state |
| Page Transitions | Fade in/out | 0.3s | smooth curve | Route changes |

## Shape Language

- **Radius:** 10px (0.625rem) default, 12px for elevated cards, 8px for form inputs, 24px for large modals
- **Spacing:** 16px grid baseline; use multiples (8, 12, 16, 24, 32, 48) for consistency
- **Borders:** Subtle 1px borders on cards using `border-border/30` (transparent) or `border-accent/20` (gold accent for premium cards)

## Component Patterns

- **Cards:** Glass effect with backdrop-blur, semi-transparent white/gold border, hover lift with gold shadow glow
- **Buttons:** Filled gold primary, outlined secondary, text-only tertiary. All include smooth transition + hover state
- **Inputs:** Clean borders, focus ring in gold, placeholder text muted
- **Badges/Pills:** `bg-muted text-foreground` for neutral, `bg-accent text-accent-foreground` for highlights (XP, achievements)
- **Progress Bars:** Gold accent fill on neutral background, smooth animation on update
- **Modals:** Centered glass container with blur backdrop, scroll-aware positioning

## Signature Detail

**Academic Crown + AI Circuit Icon:** A merged gold-colored icon combining a graduation cap silhouette with subtle circuit-board trace patterns. Appears in:
- Logo mark (header, favicon)
- Achievement badges (locked/unlocked states)
- Empty states (study prompts)
- Toast notifications (success feedback)

This icon reinforces the brand's fusion of academic excellence and AI-powered intelligence.

## Constraints & Anti-Patterns

✓ **DO:**
- Use OKLCH color system consistently; never mix hex, rgb, or hsl
- Leverage glassmorphism and backdrop-blur sparingly for premium cards, not every element
- Maintain dark mode primarily; light mode is opt-in toggle
- Use only the three bundled fonts; no system font fallbacks
- Animate on intentional user actions and page transitions, not gratuitously
- Keep chart colors consistent across dashboard

✗ **DON'T:**
- Mix multiple shadow effects on one element (choose: `shadow-md` OR `gold-glow`, not both)
- Use generic blue CTAs; all primary actions are gold
- Add gradients to text or backgrounds outside hero section (keep it clean)
- Animate every interaction; restraint builds premium feel
- Use opacity for contrast; tune lightness (L) instead

## Responsive Breakpoints

- **Mobile (< 640px):** Stack cards vertically, single-column layout, larger touch targets (44px min)
- **Tablet (640px–1024px):** 2-column grids, condensed spacing, sidebar collapses to drawer
- **Desktop (> 1024px):** 3–4 column grids, full sidebar, optimized whitespace

## Dark/Light Mode Toggle

- Toggle persisted in `localStorage` under `theme` key
- Dark mode (default) uses `.dark` class on `<html>` root
- Light mode removes `.dark` class
- All tokens automatically flip via CSS custom properties
- No hard-coded colors in components

## Accessibility & Quality

- **Contrast:** Foreground-on-background ≥ 0.7 L difference; tested WCAG AA+ in both modes
- **Focus:** Gold ring (`ring-accent`) on all interactive elements with 2px minimum visible outline
- **Motion:** All animations respect `prefers-reduced-motion` media query
- **Typography:** Line height ≥ 1.5 for body text; 1.2 for headings

---

**Design System Locked.** All design tokens live in `src/frontend/src/index.css` and `src/frontend/tailwind.config.js`. Component teams consume via Tailwind classes only.
