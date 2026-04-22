# Vera Beauty Design System

> Age beautifully, backed by science.

The Vera Design System is the single source of truth for building cohesive, accessible, and beautiful experiences across every Vera Beauty touchpoint — mobile app, web platform, and marketing.

Built on Apple Human Interface Guidelines principles with a focus on **minimalist luxury**, **clinical trust**, and **inclusive beauty**.

---

## Quick Navigation

### Brand

- [Brand Identity](./brand-identity.md) — Mission, vision, values, voice
- [Gwallee](./gwallee.md) — The manifesto. What Gwallee is, why Vera is built around it, and how we speak it.
- [Visual Direction](./visual-direction.md) — Reference set (Aesop × Sulwhasoo × Function Health) and the design implications that flow from it.

### Foundations

- [Color System](./foundations/colors.md) — Primary, secondary (Monk Skin Tone), semantic, and dark mode palettes
- [Typography](./foundations/typography.md) — Type scale, weights, line heights, and font pairing
- [Layout & Grid](./foundations/layout.md) — 12-column responsive grid, breakpoints, safe areas
- [Spacing](./foundations/spacing.md) — 8px base unit scale and usage guidelines

### Tokens

- [Design Tokens (JSON)](./tokens/design-tokens.json) — Complete token structure for developer handoff
- Build pipeline — Generates platform-specific outputs from source tokens (see [Token Build Pipeline](#token-build-pipeline) below)
- [Design Tokens (preview)](https://verabeautyinc.github.io/design-system/preview.html)

### Guidelines

- [Design Principles](./guidelines/principles.md) — Three core principles with examples
- [Do's and Don'ts](./guidelines/dos-and-donts.md) — 10 examples with visual descriptions
- [Implementation Guide](./guidelines/implementation.md) — Developer reference

### Marketing Asset Library

- [Digital Advertising](./marketing/digital-advertising.md) — Google Ads, Facebook/Instagram, TikTok scripts
- [Email Marketing](./marketing/email-marketing.md) — Welcome series, nurture sequence, re-engagement
- [Landing Pages](./marketing/landing-pages.md) — Hero, features, social proof, FAQ
- [Social Media](./marketing/social-media.md) — LinkedIn, X threads, Instagram, TikTok
- [Sales Enablement](./marketing/sales-enablement.md) — One-pager, deck, battlecard, objection handling
- [Content Marketing](./marketing/content-marketing.md) — Blog outlines, whitepaper, webinar script

---

## Design Philosophy

Vera's design language is rooted in three beliefs:

1. **Clarity is luxury.** Remove everything that doesn't serve the user.
2. **Trust is earned through consistency.** Every pixel reinforces clinical authority.
3. **Beauty is inclusive.** Design for every skin tone, every age, every comfort level.

---

## Platform Coverage

| Platform                  | Framework         | Status |
| ------------------------- | ----------------- | ------ |
| Mobile (iOS/Android)      | React Native Expo | Active |
| Web (Reception + Landing) | Next.js 15        | Active |
| API                       | Hono + Bun        | Active |

---

## Token Build Pipeline

The design tokens source file (`tokens/design-tokens.json`) is transformed into platform-specific outputs via [Style Dictionary v4](https://styledictionary.com/).

```bash
npm install              # One-time setup
npm run build            # Generate all outputs
npm run verify           # Smoke test outputs
npm run build:verify     # Both in sequence
```

### Generated Outputs

| Output     | Path                    | Description                                                    |
| ---------- | ----------------------- | -------------------------------------------------------------- |
| CSS        | `build/css/tokens.css`  | Custom properties (`--vera-*`) with rem dimensions, hex colors |
| TypeScript | `build/ts/tokens.ts`    | Nested `as const` object with numeric dimensions/durations     |
| Figma      | `build/figma/vera.json` | DTCG JSON for Tokens Studio import                             |

The `build/` directory is gitignored — run `npm run build` after cloning.

---

## Version

**v1.1.0** — April 2026
